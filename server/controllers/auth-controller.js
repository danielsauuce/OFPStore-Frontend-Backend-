import User from '../models/user.mjs';
import generateTokens from '../utils/generateToken.js';
import logger from '../utils/logger.js';
import { registerValidation, loginValidation } from '../utils/userValidation.js';

export const registerUser = async (req, res) => {
  logger.info('Registration endpoint hit');

  try {
    const { error } = registerValidation.validate(req.body);

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
    logger.info('User saved successfully', { userId: user._id });

    const { accessToken, refreshToken } = await generateTokens(user);

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      // accessToken,
      // refreshToken,
    });
  } catch (error) {
    logger.error('Registration error occurred:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    });
  }
};

export const loginUser = async (req, res) => {
  logger.info('Login endpoint hit');

  try {
    const { error } = loginValidation.validate(req.body);

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

    logger.info('User logged in successfully', { userId: user._id });

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
    logger.error('Login error occurred:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    });
  }
};

export const logoutUser = async (req, res) => {};

export const changePassword = async (req, res) => {};

export const checkAuth = async (req, res) => {};
