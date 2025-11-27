import User from '../models/user.mjs';
import generateTokens from '../utils/genereteToken';
import logger from '../utils/logger';
import { registerValidation, loginValidation } from '../utils/userValidation';

const registerUser = async (req, res) => {
  logger.info('Registration endpoint hit');

  try {
    const { error } = registerValidation(req.body);

    if (error) {
      logger.warn('Validation error', error.details[0].message);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.warn('User already exists');
      return res.status(400).json({
        success: false,
        message: 'User already exists. Please use a different email.',
      });
    }

    const user = new User({
      fullname,
      email,
      password,
    });
    await user.save();
    logger.warn('User saved successfully', user._id);

    const { accessToken, refreshToken } = await generateTokens(user);

    if (user) {
      return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        accessToken,
        refreshToken,
      });
    }
  } catch (error) {
    logger.error('Registration error occur');
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

const loginUser = async (req, res) => {
  logger.info('Login endpoint hit');

  try {
    const { error } = loginValidation(req.body);

    if (error) {
      logger.warn('Validation error', error.details[0].message);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      logger.warn('User not found');
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      logger.warn('Invalid password attempt');
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    logger.info('User logged in successfully', user._id);

    const { accessToken, refreshToken } = await generateTokens(user);

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error('Login error occur', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export default { registerUser, loginUser };
