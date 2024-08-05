const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = async () => {
  try {
    
    await Tag.destroy({ where: {}, truncate: true });

    await Tag.bulkCreate(tagData);

    console.log('Tags seeded successfully');
  } catch (error) {
    console.error('Error seeding tags:', error);
  }
};
module.exports = seedTags;
