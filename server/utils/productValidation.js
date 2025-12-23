import Joi from 'joi';

// Create Product Validation
export const createProductValidation = Joi.object({
  title: Joi.string().min(3).max(200).required().trim().messages({
    'string.empty': 'Product title is required',
    'string.min': 'Title must be at least 3 characters',
    'string.max': 'Title cannot exceed 200 characters',
    'any.required': 'Product title is required',
  }),
  description: Joi.string().max(2000).trim().allow('').messages({
    'string.max': 'Description cannot exceed 2000 characters',
  }),
  category: Joi.string()
    .valid('Sofas', 'Tables', 'Chairs', 'Beds', 'Storage', 'Decor', 'Outdoor')
    .required()
    .messages({
      'any.only': 'Category must be one of: Sofas, Tables, Chairs, Beds, Storage, Decor, Outdoor',
      'any.required': 'Category is required',
    }),
  price: Joi.number().positive().precision(2).required().messages({
    'number.base': 'Price must be a number',
    'number.positive': 'Price must be greater than 0',
    'any.required': 'Price is required',
  }),
  discountPrice: Joi.number().positive().precision(2).less(Joi.ref('price')).messages({
    'number.base': 'Discount price must be a number',
    'number.positive': 'Discount price must be greater than 0',
    'number.less': 'Discount price must be less than regular price',
  }),
  image: Joi.string().uri().required().messages({
    'string.uri': 'Image must be a valid URL',
    'any.required': 'Product image is required',
  }),
  images: Joi.array().items(Joi.string().uri()).messages({
    'string.uri': 'Each image must be a valid URL',
  }),
  stock: Joi.number().integer().min(0).required().messages({
    'number.base': 'Stock must be a number',
    'number.integer': 'Stock must be a whole number',
    'number.min': 'Stock cannot be negative',
    'any.required': 'Stock quantity is required',
  }),
  featured: Joi.boolean().default(false),
  dimensions: Joi.object({
    width: Joi.number().positive().messages({
      'number.positive': 'Width must be greater than 0',
    }),
    height: Joi.number().positive().messages({
      'number.positive': 'Height must be greater than 0',
    }),
    depth: Joi.number().positive().messages({
      'number.positive': 'Depth must be greater than 0',
    }),
    unit: Joi.string().valid('cm', 'inches').default('cm'),
  }),
  weight: Joi.object({
    value: Joi.number().positive().messages({
      'number.positive': 'Weight must be greater than 0',
    }),
    unit: Joi.string().valid('kg', 'lbs').default('kg'),
  }),
  material: Joi.array().items(Joi.string().trim()).messages({
    'array.base': 'Material must be an array',
  }),
  colors: Joi.array().items(Joi.string().trim()).messages({
    'array.base': 'Colors must be an array',
  }),
  tags: Joi.array().items(Joi.string().trim().lowercase()).messages({
    'array.base': 'Tags must be an array',
  }),
  brand: Joi.string().trim().max(100).messages({
    'string.max': 'Brand name cannot exceed 100 characters',
  }),
  sku: Joi.string().trim().alphanum().messages({
    'string.alphanum': 'SKU must only contain letters and numbers',
  }),
});

// Update Product Validation (all fields optional)
export const updateProductValidation = Joi.object({
  title: Joi.string().min(3).max(200).trim().messages({
    'string.min': 'Title must be at least 3 characters',
    'string.max': 'Title cannot exceed 200 characters',
  }),
  description: Joi.string().max(2000).trim().allow('').messages({
    'string.max': 'Description cannot exceed 2000 characters',
  }),
  category: Joi.string()
    .valid('Sofas', 'Tables', 'Chairs', 'Beds', 'Storage', 'Decor', 'Outdoor')
    .messages({
      'any.only': 'Category must be one of: Sofas, Tables, Chairs, Beds, Storage, Decor, Outdoor',
    }),
  price: Joi.number().positive().precision(2).messages({
    'number.positive': 'Price must be greater than 0',
  }),
  discountPrice: Joi.number().positive().precision(2).messages({
    'number.positive': 'Discount price must be greater than 0',
  }),
  image: Joi.string().uri().messages({
    'string.uri': 'Image must be a valid URL',
  }),
  images: Joi.array().items(Joi.string().uri()),
  stock: Joi.number().integer().min(0).messages({
    'number.integer': 'Stock must be a whole number',
    'number.min': 'Stock cannot be negative',
  }),
  inStock: Joi.boolean(),
  featured: Joi.boolean(),
  dimensions: Joi.object({
    width: Joi.number().positive(),
    height: Joi.number().positive(),
    depth: Joi.number().positive(),
    unit: Joi.string().valid('cm', 'inches'),
  }),
  weight: Joi.object({
    value: Joi.number().positive(),
    unit: Joi.string().valid('kg', 'lbs'),
  }),
  material: Joi.array().items(Joi.string().trim()),
  colors: Joi.array().items(Joi.string().trim()),
  tags: Joi.array().items(Joi.string().trim().lowercase()),
  brand: Joi.string().trim().max(100),
  sku: Joi.string().trim().alphanum(),
  isActive: Joi.boolean(),
})
  .min(1)
  .messages({
    'object.min': 'At least one field must be provided for update',
  });

// Add Review Validation
export const addReviewValidation = Joi.object({
  rating: Joi.number().integer().min(1).max(5).required().messages({
    'number.min': 'Rating must be at least 1',
    'number.max': 'Rating cannot exceed 5',
    'any.required': 'Rating is required',
  }),
  comment: Joi.string().min(10).max(500).required().trim().messages({
    'string.empty': 'Review comment is required',
    'string.min': 'Review must be at least 10 characters',
    'string.max': 'Review cannot exceed 500 characters',
    'any.required': 'Review comment is required',
  }),
});

// Query/Filter Validation
export const productQueryValidation = Joi.object({
  category: Joi.string().valid('Sofas', 'Tables', 'Chairs', 'Beds', 'Storage', 'Decor', 'Outdoor'),
  minPrice: Joi.number().positive().messages({
    'number.positive': 'Minimum price must be greater than 0',
  }),
  maxPrice: Joi.number().positive().greater(Joi.ref('minPrice')).messages({
    'number.positive': 'Maximum price must be greater than 0',
    'number.greater': 'Maximum price must be greater than minimum price',
  }),
  inStock: Joi.boolean(),
  featured: Joi.boolean(),
  sort: Joi.string().valid('price_asc', 'price_desc', 'rating', 'newest', 'popular'),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(12),
  search: Joi.string().trim().min(2).messages({
    'string.min': 'Search query must be at least 2 characters',
  }),
});

// Product ID Validation
export const productIdValidation = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid product ID format',
      'any.required': 'Product ID is required',
    }),
});
