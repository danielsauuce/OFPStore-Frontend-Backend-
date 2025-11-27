import Joi from 'joi';

// Registration validation schema
export const registerValidation = Joi.object({
  fullname: Joi.string().min(2).max(50).required().trim().messages({
    'string.empty': 'Full name is required',
    'string.min': 'Full name must be at least 2 characters',
    'string.max': 'Full name cannot exceed 50 characters',
    'any.required': 'Full name is required',
  }),
  email: Joi.string().email().required().trim().lowercase().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.pattern.base':
        'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      'any.required': 'Password is required',
    }),
  role: Joi.string().valid('customer', 'admin').default('customer').messages({
    'any.only': 'Role must be either customer or admin',
  }),
});

// Login validation schema
export const loginValidation = Joi.object({
  email: Joi.string().email().required().trim().lowercase().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
});

export default { registerValidation, loginValidation };
