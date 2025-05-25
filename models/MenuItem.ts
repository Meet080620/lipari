import mongoose, { Schema, model, models } from 'mongoose';

const MenuItemSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['Starter', 'Pasta', 'Pizza', 'Dessert', 'Drink'],
    required: true,
  },
  description: String,
  image: String,
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

export const MenuItem = models.MenuItem || model('MenuItem', MenuItemSchema);
