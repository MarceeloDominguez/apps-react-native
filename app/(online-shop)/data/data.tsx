import { ImageSourcePropType } from "react-native";

export interface Category {
  id: number;
  name: string;
  image: ImageSourcePropType | undefined;
}

export interface Item {
  description: string;
  id: number;
  price: number;
  star: number;
  title: string;
  image: ImageSourcePropType | undefined;
}

export const CATEGORY: Category[] = [
  {
    id: 1,
    name: "Vegetable",
    image: require("@/assets/online-shop/cat1.png"),
  },
  {
    id: 2,
    name: "Fruits",
    image: require("@/assets/online-shop/cat2.png"),
  },
  {
    id: 3,
    name: "Dairy",
    image: require("@/assets/online-shop/cat3.png"),
  },
  {
    id: 4,
    name: "Drinks",
    image: require("@/assets/online-shop/cat4.png"),
  },
  {
    id: 5,
    name: "Grain",
    image: require("@/assets/online-shop/cat5.png"),
  },
];

export const ITEMS: Item[] = [
  {
    description:
      "With its vibrant orange hue and a burst of refreshing citrus flavor, the juicy orange is a natural source of vitamin C, invigorating your senses and  supporting your immune system. A delightful snack that combines health and taste.",
    id: 1,
    price: 5.5,
    star: 4.3,
    title: "Fresh orange",
    image: require("@/assets/online-shop/orange.png"),
  },
  {
    description:
      "Crisp and succulent, apples are nature's candy. Each bite offers a symphony of sweetness and a satisfying crunch. Packed with fiber and antioxidants, apples make for a wholesome snack, keeping you energized throughout the day.",
    id: 2,
    price: 6.5,
    star: 4.5,
    title: "Fresh apple",
    image: require("@/assets/online-shop/apple.png"),
  },
  {
    description:
      "Quench your thirst and satisfy your sweet tooth with the hydrating goodness of watermelon. Bursting with juiciness and vibrant color, this summer favorite is a natural way to stay cool and refreshed. Enjoy the taste of summer with every juicy bite.",
    id: 3,
    price: 5.1,
    star: 4.2,
    title: "Fresh Watermelon",
    image: require("@/assets/online-shop/watermelon.png"),
  },
  {
    description:
      "Nature's little jewels, cherries are a burst of sweet indulgence. Packed with antioxidants, these tiny treats not only satisfy your sweet cravings but also contribute to overall well-being. Pop a handful for a guilt-free snack that delights your taste buds.",
    id: 4,
    price: 6.0,
    star: 4.8,
    title: "Fresh Berry",
    image: require("@/assets/online-shop/berry.png"),
  },
  {
    description:
      "Transport yourself to the tropics with the exotic taste of pineapple. Juicy and tantalizingly sweet, this golden fruit is not only a treat for your taste buds but also a rich source of vitamins and enzymes, promoting digestive health and adding a splash of sunshine to your day.",
    id: 5,
    price: 10,
    star: 4.4,
    title: "Fresh Pineapple",
    image: require("@/assets/online-shop/pineapple.png"),
  },
  {
    description:
      "Delight in the sweetness of strawberries, each berry a burst of flavor and nutrition. Whether enjoyed on their own or added to your favorite dishes, these red gems are a guilt-free pleasure, offering a dose of vitamin C, antioxidants, and a touch of natural sweetness.",
    id: 6,
    price: 12,
    star: 4.8,
    title: "Fresh Strawberry",
    image: require("@/assets/online-shop/strawberry.png"),
  },
];
