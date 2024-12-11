export interface House {
  name: string;
  image: string;
  bathrooms: number;
  bedrooms: number;
  description: string;
  price: number;
}

const houseListings: House[] = [
  {
    name: "Cozy Family Home",
    image: require("@/assets/house-booking/item_1.jpg"),
    bathrooms: 2,
    bedrooms: 3,
    price: 250000,
    description:
      "A beautiful family home located in a quiet neighborhood with a spacious backyard.",
  },
  {
    name: "Modern Apartment",
    image: require("@/assets/house-booking/item_2.jpg"),
    bathrooms: 1,
    bedrooms: 2,
    price: 180000,
    description:
      "A stylish apartment in the heart of the city, close to shops and restaurants.",
  },
  {
    name: "Luxury Villa",
    image: require("@/assets/house-booking/item_3.jpg"),
    bathrooms: 4,
    bedrooms: 5,
    price: 1200000,
    description:
      "An exquisite villa with stunning sea views and a private pool.",
  },
  {
    name: "Downtown Studio",
    image: require("@/assets/house-booking/item_4.jpg"),
    bathrooms: 1,
    bedrooms: 1,
    price: 120000,
    description:
      "A compact yet functional studio apartment in a vibrant downtown area.",
  },
  {
    name: "Suburban Townhouse",
    image: require("@/assets/house-booking/item_1.jpg"),
    bathrooms: 3,
    bedrooms: 4,
    price: 400000,
    description:
      "A charming townhouse with a modern interior and a two-car garage.",
  },
  {
    name: "Beachfront Bungalow",
    image: require("@/assets/house-booking/item_2.jpg"),
    bathrooms: 2,
    bedrooms: 2,
    price: 320000,
    description:
      "A cozy bungalow located steps away from the beach, perfect for relaxing weekends.",
  },
  {
    name: "Mountain Cabin",
    image: require("@/assets/house-booking/item_3.jpg"),
    bathrooms: 1,
    bedrooms: 3,
    price: 220000,
    description:
      "A rustic cabin in the mountains, ideal for nature lovers and adventurers.",
  },
  {
    name: "Urban Penthouse",
    image: require("@/assets/house-booking/item_4.jpg"),
    bathrooms: 3,
    bedrooms: 4,
    price: 200000,
    description:
      "A luxurious penthouse with breathtaking city views and top-notch amenities.",
  },
  {
    name: "Country Cottage",
    image: require("@/assets/house-booking/item_1.jpg"),
    bathrooms: 1,
    bedrooms: 2,
    price: 350000,
    description:
      "A charming cottage surrounded by lush greenery and tranquility.",
  },
  {
    name: "Eco-Friendly Home",
    image: require("@/assets/house-booking/item_2.jpg"),
    bathrooms: 2,
    bedrooms: 3,
    price: 350000,
    description:
      "A sustainable home with solar panels and energy-efficient appliances.",
  },
];

export default houseListings;
