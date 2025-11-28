interface FruitDish {
  id: number;
  dishName: string;
  dishPrice: number;
  category: "fresh" | "cooked" | "drinks" | "savory";
  isHot: boolean;
  isFavorite: boolean;
  description: string;
  ingredients: string;
  imgSrc: string;
}

const fruitDishes: FruitDish[] = [
  // Fresh Category
  {
    id: 47,
    dishName: "Tropical Paradise Bowl",
    dishPrice: 12.99,
    category: "fresh",
    isHot: false,
    isFavorite: true,
    description: "A vibrant mix of exotic fruits topped with coconut flakes and a drizzle of passion fruit syrup.",
    ingredients: "mango, pineapple, dragon fruit, kiwi, coconut flakes, passion fruit syrup, mint leaves",
    imgSrc: ""
  },
  {
    id: 823,
    dishName: "Berry Medley Salad",
    dishPrice: 10.50,
    category: "fresh",
    isHot: false,
    isFavorite: false,
    description: "Fresh seasonal berries tossed with honey-lime dressing and topped with crushed pistachios for crunch.",
    ingredients: "strawberries, blueberries, raspberries, blackberries, honey, lime juice, pistachios, basil",
    imgSrc: ""
  },
  {
    id: 156,
    dishName: "Citrus Sunrise Platter",
    dishPrice: 9.75,
    category: "fresh",
    isHot: false,
    isFavorite: true,
    description: "Assorted citrus segments arranged beautifully with edible flowers and a touch of agave nectar drizzle.",
    ingredients: "oranges, grapefruit, blood oranges, pomelo, kumquats, agave nectar, edible flowers, mint",
    imgSrc: ""
  },
  {
    id: 94,
    dishName: "Melon Trio Delight",
    dishPrice: 8.99,
    category: "fresh",
    isHot: false,
    isFavorite: false,
    description: "Three varieties of melon cubed and mixed with fresh lime juice, finished with a sprinkle of sea salt.",
    ingredients: "watermelon, cantaloupe, honeydew, lime juice, sea salt, mint leaves",
    imgSrc: ""
  },
  {
    id: 672,
    dishName: "Stone Fruit Fantasy",
    dishPrice: 11.25,
    category: "fresh",
    isHot: false,
    isFavorite: false,
    description: "Sliced peaches, nectarines, and plums drizzled with lavender honey and topped with toasted almonds.",
    ingredients: "peaches, nectarines, plums, apricots, lavender honey, toasted almonds, lemon zest",
    imgSrc: ""
  },

  // Cooked Category
  {
    id: 38,
    dishName: "Caramelized Apple Compote",
    dishPrice: 13.50,
    category: "cooked",
    isHot: true,
    isFavorite: true,
    description: "Warm cinnamon-spiced apples cooked to perfection, served with vanilla bean ice cream and caramel sauce.",
    ingredients: "apples, brown sugar, cinnamon, butter, vanilla extract, nutmeg, lemon juice, vanilla ice cream",
    imgSrc: ""
  },
  {
    id: 591,
    dishName: "Grilled Pineapple Skewers",
    dishPrice: 10.99,
    category: "cooked",
    isHot: true,
    isFavorite: false,
    description: "Charred pineapple chunks glazed with honey-rum sauce and garnished with toasted coconut and lime zest.",
    ingredients: "pineapple, honey, rum, coconut flakes, lime zest, brown sugar, cinnamon",
    imgSrc: ""
  },
  {
    id: 245,
    dishName: "Baked Pear Halves",
    dishPrice: 12.75,
    category: "cooked",
    isHot: true,
    isFavorite: true,
    description: "Tender pears baked with maple syrup and pecans, topped with mascarpone cream and a drizzle of honey.",
    ingredients: "pears, maple syrup, pecans, mascarpone, honey, cinnamon, vanilla extract, butter",
    imgSrc: ""
  },
  {
    id: 789,
    dishName: "Cherry Jubilee Flambé",
    dishPrice: 15.99,
    category: "cooked",
    isHot: true,
    isFavorite: false,
    description: "Dark cherries flambéed with brandy and served over pound cake with whipped cream and almond slivers.",
    ingredients: "dark cherries, brandy, sugar, pound cake, whipped cream, almond slivers, lemon juice, cornstarch",
    imgSrc: ""
  },

  // Drinks Category
  {
    id: 512,
    dishName: "Mango Passion Smoothie",
    dishPrice: 7.50,
    category: "drinks",
    isHot: false,
    isFavorite: true,
    description: "Creamy blend of mango and passion fruit with yogurt, finished with chia seeds and a fresh fruit garnish.",
    ingredients: "mango, passion fruit, Greek yogurt, coconut milk, chia seeds, honey, ice",
    imgSrc: ""
  },
  {
    id: 67,
    dishName: "Berry Blast Refresher",
    dishPrice: 6.99,
    category: "drinks",
    isHot: false,
    isFavorite: false,
    description: "Mixed berries blended with mint, lime juice, and sparkling water for a refreshing and tangy beverage.",
    ingredients: "strawberries, blueberries, raspberries, mint, lime juice, sparkling water, agave syrup, ice",
    imgSrc: ""
  },
  {
    id: 934,
    dishName: "Tropical Green Elixir",
    dishPrice: 8.25,
    category: "drinks",
    isHot: false,
    isFavorite: true,
    description: "Nutrient-packed smoothie with spinach, pineapple, and banana, sweetened naturally with dates and ginger.",
    ingredients: "spinach, pineapple, banana, dates, ginger, coconut water, lime juice",
    imgSrc: ""
  },
  {
    id: 28,
    dishName: "Watermelon Mint Cooler",
    dishPrice: 6.50,
    category: "drinks",
    isHot: false,
    isFavorite: false,
    description: "Fresh watermelon juice blended with mint leaves and lime, served over crushed ice with a salted rim option.",
    ingredients: "watermelon, mint leaves, lime juice, agave syrup, sea salt, ice",
    imgSrc: ""
  },
  {
    id: 405,
    dishName: "Spiced Apple Cider",
    dishPrice: 5.99,
    category: "drinks",
    isHot: true,
    isFavorite: false,
    description: "Warm apple cider infused with cinnamon sticks, cloves, and orange slices, perfect for cozy afternoons.",
    ingredients: "apple cider, cinnamon sticks, cloves, orange slices, nutmeg, star anise, brown sugar",
    imgSrc: ""
  },
  {
    id: 761,
    dishName: "Peach Ginger Fizz",
    dishPrice: 7.25,
    category: "drinks",
    isHot: false,
    isFavorite: true,
    description: "Sparkling beverage with muddled peaches, fresh ginger, and a hint of rosemary over ice with lemon twist.",
    ingredients: "peaches, fresh ginger, rosemary, lemon juice, sparkling water, honey, ice",
    imgSrc: ""
  },

  // Savory Category
  {
    id: 319,
    dishName: "Prosciutto Wrapped Melon",
    dishPrice: 14.50,
    category: "savory",
    isHot: false,
    isFavorite: true,
    description: "Sweet cantaloupe wedges wrapped in salty prosciutto, drizzled with balsamic glaze and fresh basil leaves.",
    ingredients: "cantaloupe, prosciutto, balsamic glaze, basil, olive oil, black pepper, sea salt",
    imgSrc: ""
  },
  {
    id: 88,
    dishName: "Fig and Goat Cheese Crostini",
    dishPrice: 13.25,
    category: "savory",
    isHot: false,
    isFavorite: false,
    description: "Toasted baguette slices topped with creamy goat cheese, fresh figs, honey drizzle, and crushed walnuts.",
    ingredients: "figs, goat cheese, baguette, honey, walnuts, thyme, balsamic reduction, arugula",
    imgSrc: ""
  },
  {
    id: 546,
    dishName: "Apple Brie Tartlets",
    dishPrice: 12.99,
    category: "savory",
    isHot: true,
    isFavorite: true,
    description: "Flaky pastry cups filled with brie cheese and caramelized apples, finished with thyme and a drizzle of honey.",
    ingredients: "apples, brie cheese, puff pastry, honey, thyme, butter, brown sugar, pecans",
    imgSrc: ""
  },
  {
    id: 203,
    dishName: "Pear and Gorgonzola Salad",
    dishPrice: 11.75,
    category: "savory",
    isHot: false,
    isFavorite: false,
    description: "Mixed greens with sliced pears, crumbled gorgonzola, candied walnuts, and a maple vinaigrette dressing.",
    ingredients: "pears, gorgonzola cheese, mixed greens, candied walnuts, maple syrup, balsamic vinegar, olive oil, Dijon mustard",
    imgSrc: ""
  },
  {
    id: 657,
    dishName: "Grilled Peach Caprese",
    dishPrice: 13.99,
    category: "savory",
    isHot: true,
    isFavorite: true,
    description: "Charred peach slices layered with fresh mozzarella and basil, finished with olive oil and aged balsamic.",
    ingredients: "peaches, mozzarella, basil, balsamic vinegar, olive oil, sea salt, black pepper, arugula",
    imgSrc: ""
  }
];

export default fruitDishes;