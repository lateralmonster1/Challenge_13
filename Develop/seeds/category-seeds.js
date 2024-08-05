const { Category } = require('../models'); 

const categoryData = [
  { category_name: 'Shirts' },
  { category_name: 'Shorts' },
  { category_name: 'Music' },
  { category_name: 'Hats' },
  { category_name: 'Shoes' },
];

const seedCategories = async () => {
  try {
    
    await Category.destroy({ where: {}, truncate: true });

 
    await Category.bulkCreate(categoryData);

    console.log('Categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};

module.exports = seedCategories;
