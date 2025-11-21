import mongoose from 'mongoose';
import bcrypt, { genSalt } from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true, trim: true },
    firstname: { type: String, required: true, unique: true, trim: true },
    lastname: { type: String, required: true, unique: true, trim: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  },
);

// index for faster queries
userSchema.index({ email: 1 });

//Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
