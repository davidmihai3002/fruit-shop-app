import { FruitDish } from "@/lib/types/models";

export type { FruitDish };

export type Category = "fresh" | "cooked" | "drinks" | "savory";
export const categories = ["Fresh", "Cooked", "Drinks", "Savory"];

export const mockFruitDishesForTesting: FruitDish[] = [
  {
    id: 1,
    dishName: "Mango Sticky Rice",
    dishPrice: 14,
    category: "cooked",
    qty: 2,
    isHot: true,
    isFavorite: true,
    description:
      "Sweet glutinous rice with fresh mango slices and coconut milk.",
    ingredients: "Sticky rice, mango, coconut milk, sugar, sesame seeds",
    imgSrc: null,
    bgColor: "#FFF8E1",
  },
  {
    id: 2,
    dishName: "Super Berry Smoothie",
    dishPrice: 8.0,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "A refreshing blend of strawberries, blueberries, and raspberries.",
    ingredients: "Strawberries, blueberries, raspberries, yogurt, honey",
    imgSrc: null,
    bgColor: "#F3E5F5",
  },
  {
    id: 3,
    dishName: "Watermelon Feta Salad",
    dishPrice: 10.0,
    category: "savory",
    qty: 3,
    isHot: false,
    isFavorite: true,
    description: "A savory summer salad with mint and balsamic glaze.",
    ingredients:
      "Watermelon, feta cheese, mint leaves, balsamic glaze, cucumber",
    imgSrc: null,
    bgColor: "#E8F5E9",
  },
  {
    id: 4,
    dishName: "Tropical Fruit Bowl",
    dishPrice: 15.0,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description: "Seasonal tropical fruits served with a side of lime wedges.",
    ingredients: "Pineapple, papaya, dragon fruit, kiwi, passion fruit",
    imgSrc: null,
    bgColor: "#FFF3E0",
  },
  {
    id: 5,
    dishName: "Spiced Poached Pears",
    dishPrice: 14.0,
    category: "cooked",
    qty: 4,
    isHot: true,
    isFavorite: false,
    description: "Pears gently poached in cinnamon and vanilla syrup.",
    ingredients: "Bosc pears, cinnamon sticks, vanilla bean, star anise, sugar",
    imgSrc: null,
    bgColor: "#FBE9E7",
  },
];

export const fruitDishes: FruitDish[] = [
  // Fresh Category
  {
    id: 47,
    dishName: "Tropical Paradise Bowl",
    dishPrice: 12.99,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "A vibrant mix of exotic fruits topped with coconut flakes and a drizzle of passion fruit syrup.",
    ingredients:
      "mango, pineapple, dragon fruit, kiwi, coconut flakes, passion fruit syrup, mint leaves",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 823,
    dishName: "Berry Medley Salad",
    dishPrice: 10.5,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Fresh seasonal berries tossed with honey-lime dressing and topped with crushed pistachios for crunch.",
    ingredients:
      "strawberries, blueberries, raspberries, blackberries, honey, lime juice, pistachios, basil",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },
  {
    id: 156,
    dishName: "Citrus Sunrise Platter",
    dishPrice: 9.75,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Assorted citrus segments arranged beautifully with edible flowers and a touch of agave nectar drizzle.",
    ingredients:
      "oranges, grapefruit, blood oranges, pomelo, kumquats, agave nectar, edible flowers, mint",
    imgSrc: null,
    bgColor: "#F1EFF6",
  },
  {
    id: 94,
    dishName: "Melon Trio Delight",
    dishPrice: 8.99,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Three varieties of melon cubed and mixed with fresh lime juice, finished with a sprinkle of sea salt.",
    ingredients:
      "watermelon, cantaloupe, honeydew, lime juice, sea salt, mint leaves",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 672,
    dishName: "Stone Fruit Fantasy",
    dishPrice: 11.25,
    category: "fresh",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Sliced peaches, nectarines, and plums drizzled with lavender honey and topped with toasted almonds.",
    ingredients:
      "peaches, nectarines, plums, apricots, lavender honey, toasted almonds, lemon zest",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },

  // Cooked Category
  {
    id: 38,
    dishName: "Caramelized Apple Compote",
    dishPrice: 13.5,
    category: "cooked",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Warm cinnamon-spiced apples cooked to perfection, served with vanilla bean ice cream and caramel sauce.",
    ingredients:
      "apples, brown sugar, cinnamon, butter, vanilla extract, nutmeg, lemon juice, vanilla ice cream",
    imgSrc: null,
    bgColor: "#F1EFF6",
  },
  {
    id: 591,
    dishName: "Grilled Pineapple Skewers",
    dishPrice: 10.99,
    category: "cooked",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Charred pineapple chunks glazed with honey-rum sauce and garnished with toasted coconut and lime zest.",
    ingredients:
      "pineapple, honey, rum, coconut flakes, lime zest, brown sugar, cinnamon",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 245,
    dishName: "Baked Pear Halves",
    dishPrice: 12.75,
    category: "cooked",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Tender pears baked with maple syrup and pecans, topped with mascarpone cream and a drizzle of honey.",
    ingredients:
      "pears, maple syrup, pecans, mascarpone, honey, cinnamon, vanilla extract, butter",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },
  {
    id: 789,
    dishName: "Cherry Jubilee Flambé",
    dishPrice: 15.99,
    category: "cooked",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Dark cherries flambéed with brandy and served over pound cake with whipped cream and almond slivers.",
    ingredients:
      "dark cherries, brandy, sugar, pound cake, whipped cream, almond slivers, lemon juice, cornstarch",
    imgSrc: null,
    bgColor: "#F1EFF6",
  },

  // Drinks Category
  {
    id: 512,
    dishName: "Mango Passion Smoothie",
    dishPrice: 7.5,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Creamy blend of mango and passion fruit with yogurt, finished with chia seeds and a fresh fruit garnish.",
    ingredients:
      "mango, passion fruit, Greek yogurt, coconut milk, chia seeds, honey, ice",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 67,
    dishName: "Berry Blast Refresher",
    dishPrice: 6.99,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Mixed berries blended with mint, lime juice, and sparkling water for a refreshing and tangy beverage.",
    ingredients:
      "strawberries, blueberries, raspberries, mint, lime juice, sparkling water, agave syrup, ice",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },
  {
    id: 934,
    dishName: "Tropical Green Elixir",
    dishPrice: 8.25,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Nutrient-packed smoothie with spinach, pineapple, and banana, sweetened naturally with dates and ginger.",
    ingredients:
      "spinach, pineapple, banana, dates, ginger, coconut water, lime juice",
    imgSrc: null,
    bgColor: "#F1EFF6",
  },
  {
    id: 28,
    dishName: "Watermelon Mint Cooler",
    dishPrice: 6.5,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Fresh watermelon juice blended with mint leaves and lime, served over crushed ice with a salted rim option.",
    ingredients:
      "watermelon, mint leaves, lime juice, agave syrup, sea salt, ice",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 405,
    dishName: "Spiced Apple Cider",
    dishPrice: 5.99,
    category: "drinks",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Warm apple cider infused with cinnamon sticks, cloves, and orange slices, perfect for cozy afternoons.",
    ingredients:
      "apple cider, cinnamon sticks, cloves, orange slices, nutmeg, star anise, brown sugar",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },
  {
    id: 761,
    dishName: "Peach Ginger Fizz",
    dishPrice: 7.25,
    category: "drinks",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Sparkling beverage with muddled peaches, fresh ginger, and a hint of rosemary over ice with lemon twist.",
    ingredients:
      "peaches, fresh ginger, rosemary, lemon juice, sparkling water, honey, ice",
    imgSrc: null,
    bgColor: "#F1EFF6",
  },

  // Savory Category
  {
    id: 319,
    dishName: "Prosciutto Wrapped Melon",
    dishPrice: 14.5,
    category: "savory",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Sweet cantaloupe wedges wrapped in salty prosciutto, drizzled with balsamic glaze and fresh basil leaves.",
    ingredients:
      "cantaloupe, prosciutto, balsamic glaze, basil, olive oil, black pepper, sea salt",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 88,
    dishName: "Fig and Goat Cheese Crostini",
    dishPrice: 13.25,
    category: "savory",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Toasted baguette slices topped with creamy goat cheese, fresh figs, honey drizzle, and crushed walnuts.",
    ingredients:
      "figs, goat cheese, baguette, honey, walnuts, thyme, balsamic reduction, arugula",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },
  {
    id: 546,
    dishName: "Apple Brie Tartlets",
    dishPrice: 12.99,
    category: "savory",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Flaky pastry cups filled with brie cheese and caramelized apples, finished with thyme and a drizzle of honey.",
    ingredients:
      "apples, brie cheese, puff pastry, honey, thyme, butter, brown sugar, pecans",
    imgSrc: null,
    bgColor: "#F1EFF6",
  },
  {
    id: 203,
    dishName: "Pear and Gorgonzola Salad",
    dishPrice: 11.75,
    category: "savory",
    qty: 1,
    isHot: false,
    isFavorite: false,
    description:
      "Mixed greens with sliced pears, crumbled gorgonzola, candied walnuts, and a maple vinaigrette dressing.",
    ingredients:
      "pears, gorgonzola cheese, mixed greens, candied walnuts, maple syrup, balsamic vinegar, olive oil, Dijon mustard",
    imgSrc: null,
    bgColor: "#FFFAEB",
  },
  {
    id: 657,
    dishName: "Grilled Peach Caprese",
    dishPrice: 13.99,
    category: "savory",
    qty: 1,
    isHot: true,
    isFavorite: false,
    description:
      "Charred peach slices layered with fresh mozzarella and basil, finished with olive oil and aged balsamic.",
    ingredients:
      "peaches, mozzarella, basil, balsamic vinegar, olive oil, sea salt, black pepper, arugula",
    imgSrc: null,
    bgColor: "#FEF0F0",
  },
];

export default fruitDishes;
