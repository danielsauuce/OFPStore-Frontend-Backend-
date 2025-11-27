import Joi from 'joi';

export const registerValidation = Joi.object({
  fullname: Joi.string().min(2).max(50).required().trim(),
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().min(8).required(),
});

export const loginValidation = Joi.object({
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().required(),
});
export default { registerValidation, loginValidation };
