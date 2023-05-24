import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const desserts = [
  {
    title: 'Profiteroles',
    price: '$10',
    tags: 'Chocolate | Cream | Dough',
  },
  {
    title: "Apple Pie",
    price: '$12',
    tags: 'Apple | Pie Crust | Powdered Sugar',
  },
  {
    title: 'Pudding',
    price: '$6',
    tags: 'Milk | Cornstarch | Vanilla',
  },
  {
    title: 'Old Fashioned',
    price: '$5',
    tags: 'Cake Dough | Cream | Chocolate',
  },
  {
    title: 'Rice Pudding',
    price: '$10',
    tags: 'Milk | Rice | Cinnamon | Cornstarch',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, desserts, awards };
