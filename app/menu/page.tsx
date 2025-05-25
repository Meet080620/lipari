'use client';

import { useState } from 'react';
import DishShowcase from '@/components/DishShowcase';
type MenuCategory = {
  name: string;
  subcategories: string[];
  dishes: {
    name: string;
    subcategory: string;
    image: string;
    description: string;
    price: string;
    weight: string;
    prepTime: string;
    calories: string;
    cuisine: string;
    ingredients: string[];
    icons?: { label: string; icon: string }[];
  }[];
};

const menuData: Record<string, MenuCategory> = {
  spuntini: {
    name: 'Spuntini Starters',
    subcategories: ['veg', 'non-veg'],
    dishes: [
      {
        name: 'Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Grilled bread rubbed with garlic and topped with tomatoes and olive oil.',
        price: '$8.00',
        weight: '150g',
        prepTime: '10 min',
        calories: '220 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
            {
        name: 'Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Grilled bread rubbed with garlic and topped with tomatoes and olive oil.',
        price: '$8.00',
        weight: '150g',
        prepTime: '10 min',
        calories: '220 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
            {
        name: 'Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Grilled bread rubbed with garlic and topped with tomatoes and olive oil.',
        price: '$8.00',
        weight: '150g',
        prepTime: '10 min',
        calories: '220 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
            {
        name: 'Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Grilled bread rubbed with garlic and topped with tomatoes and olive oil.',
        price: '$8.00',
        weight: '150g',
        prepTime: '10 min',
        calories: '220 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
    ],
  },
  spuntini_ta: {
    name: 'Spuntini Starters (T/A)',
    subcategories: ['veg'],
    dishes: [
      {
        name: 'Takeaway Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Takeaway-style garlic toast with toppings.',
        price: '$7.50',
        weight: '140g',
        prepTime: '8 min',
        calories: '210 kcal',
        cuisine: 'Italian',
        ingredients: ['Bread', 'Tomato', 'Garlic'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
           {
        name: 'Takeaway Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Takeaway-style garlic toast with toppings.',
        price: '$7.50',
        weight: '140g',
        prepTime: '8 min',
        calories: '210 kcal',
        cuisine: 'Italian',
        ingredients: ['Bread', 'Tomato', 'Garlic'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
           {
        name: 'Takeaway Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Takeaway-style garlic toast with toppings.',
        price: '$7.50',
        weight: '140g',
        prepTime: '8 min',
        calories: '210 kcal',
        cuisine: 'Italian',
        ingredients: ['Bread', 'Tomato', 'Garlic'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
           {
        name: 'Takeaway Bruschetta',
        subcategory: 'veg',
        image: '/dishes/bruschetta.jpg',
        description: 'Takeaway-style garlic toast with toppings.',
        price: '$7.50',
        weight: '140g',
        prepTime: '8 min',
        calories: '210 kcal',
        cuisine: 'Italian',
        ingredients: ['Bread', 'Tomato', 'Garlic'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
    ],
  },
  insalate: {
    name: 'Insalate Salads',
    subcategories: ['green', 'caprese'],
    dishes: [
      {
        name: 'Caprese Salad',
        subcategory: 'caprese',
        image: '/dishes/caprese.jpg',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.',
        price: '$9.00',
        weight: '180g',
        prepTime: '10 min',
        calories: '260 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
            {
        name: 'Caprese Salad',
        subcategory: 'caprese',
        image: '/dishes/caprese.jpg',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.',
        price: '$9.00',
        weight: '180g',
        prepTime: '10 min',
        calories: '260 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
            {
        name: 'Caprese Salad',
        subcategory: 'caprese',
        image: '/dishes/caprese.jpg',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.',
        price: '$9.00',
        weight: '180g',
        prepTime: '10 min',
        calories: '260 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
            {
        name: 'Caprese Salad',
        subcategory: 'caprese',
        image: '/dishes/caprese.jpg',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.',
        price: '$9.00',
        weight: '180g',
        prepTime: '10 min',
        calories: '260 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'],
        icons: [{ label: 'Vegetarian', icon: '🥦' }],
      },
    ],
  },
  insalate_ta: {
    name: 'Insalate Salads (T/A)',
    subcategories: ['green'],
    dishes: [
      {
        name: 'Garden Salad (T/A)',
        subcategory: 'green',
        image: '/dishes/caprese.jpg',
        description: 'Fresh leafy greens with vinaigrette dressing.',
        price: '$8.50',
        weight: '170g',
        prepTime: '9 min',
        calories: '200 kcal',
        cuisine: 'Italian',
        ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Vinaigrette'],
        icons: [{ label: 'Vegan', icon: '🥗' }],
      },
          {
        name: 'Garden Salad (T/A)',
        subcategory: 'green',
        image: '/dishes/caprese.jpg',
        description: 'Fresh leafy greens with vinaigrette dressing.',
        price: '$8.50',
        weight: '170g',
        prepTime: '9 min',
        calories: '200 kcal',
        cuisine: 'Italian',
        ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Vinaigrette'],
        icons: [{ label: 'Vegan', icon: '🥗' }],
      },
          {
        name: 'Garden Salad (T/A)',
        subcategory: 'green',
        image: '/dishes/caprese.jpg',
        description: 'Fresh leafy greens with vinaigrette dressing.',
        price: '$8.50',
        weight: '170g',
        prepTime: '9 min',
        calories: '200 kcal',
        cuisine: 'Italian',
        ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Vinaigrette'],
        icons: [{ label: 'Vegan', icon: '🥗' }],
      },
          {
        name: 'Garden Salad (T/A)',
        subcategory: 'green',
        image: '/dishes/caprese.jpg',
        description: 'Fresh leafy greens with vinaigrette dressing.',
        price: '$8.50',
        weight: '170g',
        prepTime: '9 min',
        calories: '200 kcal',
        cuisine: 'Italian',
        ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Vinaigrette'],
        icons: [{ label: 'Vegan', icon: '🥗' }],
      },
          {
        name: 'Garden Salad (T/A)',
        subcategory: 'green',
        image: '/dishes/caprese.jpg',
        description: 'Fresh leafy greens with vinaigrette dressing.',
        price: '$8.50',
        weight: '170g',
        prepTime: '9 min',
        calories: '200 kcal',
        cuisine: 'Italian',
        ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Vinaigrette'],
        icons: [{ label: 'Vegan', icon: '🥗' }],
      },
    ],
  },
  secondi: {
    name: 'Secondi Mains',
    subcategories: ['chicken', 'seafood'],
    dishes: [
      {
        name: 'Chicken Parmigiana',
        subcategory: 'chicken',
        image: '/dishes/chicken-parm.jpg',
        description: 'Breaded chicken breast topped with marinara and cheese.',
        price: '$16.00',
        weight: '350g',
        prepTime: '25 min',
        calories: '720 kcal',
        cuisine: 'Italian',
        ingredients: ['Chicken', 'Cheese', 'Marinara Sauce'],
      },
            {
        name: 'Chicken Parmigiana',
        subcategory: 'chicken',
        image: '/dishes/chicken-parm.jpg',
        description: 'Breaded chicken breast topped with marinara and cheese.',
        price: '$16.00',
        weight: '350g',
        prepTime: '25 min',
        calories: '720 kcal',
        cuisine: 'Italian',
        ingredients: ['Chicken', 'Cheese', 'Marinara Sauce'],
      },
            {
        name: 'Chicken Parmigiana',
        subcategory: 'chicken',
        image: '/dishes/chicken-parm.jpg',
        description: 'Breaded chicken breast topped with marinara and cheese.',
        price: '$16.00',
        weight: '350g',
        prepTime: '25 min',
        calories: '720 kcal',
        cuisine: 'Italian',
        ingredients: ['Chicken', 'Cheese', 'Marinara Sauce'],
      },
            {
        name: 'Chicken Parmigiana',
        subcategory: 'chicken',
        image: '/dishes/chicken-parm.jpg',
        description: 'Breaded chicken breast topped with marinara and cheese.',
        price: '$16.00',
        weight: '350g',
        prepTime: '25 min',
        calories: '720 kcal',
        cuisine: 'Italian',
        ingredients: ['Chicken', 'Cheese', 'Marinara Sauce'],
      },
            {
        name: 'Chicken Parmigiana',
        subcategory: 'chicken',
        image: '/dishes/chicken-parm.jpg',
        description: 'Breaded chicken breast topped with marinara and cheese.',
        price: '$16.00',
        weight: '350g',
        prepTime: '25 min',
        calories: '720 kcal',
        cuisine: 'Italian',
        ingredients: ['Chicken', 'Cheese', 'Marinara Sauce'],
      },
    ],
  },
  salse: {
    name: 'Salse Sauces',
    subcategories: ['red', 'white'],
    dishes: [
      {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
    ],
  },
  salse_ta: {
    name: 'Salse Sauces (T/A)',
    subcategories: ['white'],
    dishes: [
      {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
            {
        name: 'Marinara Sauce',
        subcategory: 'red',
        image: '/dishes/marinara.jpg',
        description: 'Classic tomato-based sauce with herbs and garlic.',
        price: '$4.00',
        weight: '100g',
        prepTime: '15 min',
        calories: '120 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Garlic', 'Basil'],
      },
    ],
  },
  pasta: {
    name: 'Paste Pasta',
    subcategories: ['white sauce', 'red sauce'],
    dishes: [
      {
        name: 'Arrabbiata Pasta',
        subcategory: 'red sauce',
        image: '/dishes/arrabbiata.jpg',
        description: 'Spicy red sauce pasta with chili and tomato.',
        price: '$12.00',
        weight: '240g',
        prepTime: '15 min',
        calories: '610 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Chili', 'Garlic'],
        icons: [{ label: 'Spicy', icon: '🌶️' }],
      },
            {
        name: 'Arrabbiata Pasta',
        subcategory: 'red sauce',
        image: '/dishes/arrabbiata.jpg',
        description: 'Spicy red sauce pasta with chili and tomato.',
        price: '$12.00',
        weight: '240g',
        prepTime: '15 min',
        calories: '610 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Chili', 'Garlic'],
        icons: [{ label: 'Spicy', icon: '🌶️' }],
      },
            {
        name: 'Arrabbiata Pasta',
        subcategory: 'red sauce',
        image: '/dishes/arrabbiata.jpg',
        description: 'Spicy red sauce pasta with chili and tomato.',
        price: '$12.00',
        weight: '240g',
        prepTime: '15 min',
        calories: '610 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Chili', 'Garlic'],
        icons: [{ label: 'Spicy', icon: '🌶️' }],
      },
            {
        name: 'Arrabbiata Pasta',
        subcategory: 'red sauce',
        image: '/dishes/arrabbiata.jpg',
        description: 'Spicy red sauce pasta with chili and tomato.',
        price: '$12.00',
        weight: '240g',
        prepTime: '15 min',
        calories: '610 kcal',
        cuisine: 'Italian',
        ingredients: ['Tomato', 'Chili', 'Garlic'],
        icons: [{ label: 'Spicy', icon: '🌶️' }],
      },
    ],
  },
};


export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('spuntini');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const categories = Object.keys(menuData);
  const currentCategory = menuData[activeCategory]; // ✅ Valid now


  const filteredDishes = currentCategory.dishes.filter((dish: { subcategory: string; }) =>
    activeSubcategory ? dish.subcategory === activeSubcategory : true
  );

  return (
    <main className="pt-10  pb-5 bg-[#] text-marinara">
      {/* 🔸 Category Tabs */}
      <nav className="flex flex-wrap justify-center gap-3 mb-6 px-6 font-semibold tracking-wider">
        {categories.map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setActiveSubcategory(null);
            }}
            className={`px-4 py-2 text-sm font-semibold rounded-full  transition ${
              activeCategory === key
              ? 'bg-[#21270F] text-marinara hover:bg-bolognese/10'
                : 'bg-bolognese text-parmesan'
            }`}
          >
            {menuData[key].name}
          </button>
        ))}
      </nav>

      {/* 🔸 Subcategory Filters */}
      <div className="flex justify-center tracking-wider gap-3 mb-10 px-6 flex-wrap">
        {currentCategory.subcategories.map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSubcategory(sub)}
            className={`px-3 py-1 text-sm border rounded-full capitalize ${
              activeSubcategory === sub
                   ? 'bg-[#1a320d] text-marinara hover:bg-bolognese/10'
                : 'bg-bolognese text-parmesan'
            }`}
          >
            {sub}
          </button>
        ))}
        {activeSubcategory && (
          <button
            onClick={() => setActiveSubcategory(null)}
            className="text-sm underline text-gray-500"
          >
            Show all
          </button>
        )}
      </div>

      {/* 🍽️ Render Dishes */}
      {filteredDishes.map((dish, index) => (
        <DishShowcase key={index} dish={dish} reverse={index % 2 === 1} />
      ))}
    </main>
  );
}
