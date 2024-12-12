export interface House {
  name: string;
  image: string;
  bathrooms: number;
  bedrooms: number;
  description: string;
  price: number;
  id: string;
}

const houseListings: House[] = [
  {
    id: "1",
    name: "Cozy Family Home",
    image: require("@/assets/house-booking/item_1.jpg"),
    bathrooms: 2,
    bedrooms: 3,
    price: 250000,
    description:
      "This lovely family home is nestled in a serene and friendly neighborhood. It features a spacious backyard perfect for gatherings or children to play, a fully-equipped modern kitchen, and cozy living spaces. Ideal for families looking for comfort and community.",
  },
  {
    id: "2",
    name: "Modern Apartment",
    image: require("@/assets/house-booking/item_2.jpg"),
    bathrooms: 1,
    bedrooms: 2,
    price: 180000,
    description:
      "Located in the heart of the city, this modern apartment offers an open-concept layout, sleek finishes, and proximity to the best shops, restaurants, and public transport. Perfect for professionals or small families seeking urban living.",
  },
  {
    id: "3",
    name: "Luxury Villa",
    image: require("@/assets/house-booking/item_3.jpg"),
    bathrooms: 4,
    bedrooms: 5,
    price: 1200000,
    description:
      "This exquisite villa boasts stunning sea views, a private pool, and luxurious interiors designed for opulent living. Enjoy spacious rooms, high-end amenities, and unmatched privacy. A dream home for those seeking elegance and tranquility.",
  },
  {
    id: "4",
    name: "Downtown Studio",
    image: require("@/assets/house-booking/item_4.jpg"),
    bathrooms: 1,
    bedrooms: 1,
    price: 120000,
    description:
      "Compact yet efficient, this studio apartment is perfect for individuals seeking a vibrant lifestyle. Located in a bustling downtown area, it offers easy access to entertainment, dining, and public transit, all while providing a comfortable living space.",
  },
  {
    id: "5",
    name: "Suburban Townhouse",
    image: require("@/assets/house-booking/item_1.jpg"),
    bathrooms: 3,
    bedrooms: 4,
    price: 400000,
    description:
      "A charming townhouse situated in a quiet suburban area, featuring modern interiors, spacious living areas, and a two-car garage. Perfect for families or individuals seeking a balance between urban convenience and suburban peace.",
  },
  {
    id: "6",
    name: "Beachfront Bungalow",
    image: require("@/assets/house-booking/item_2.jpg"),
    bathrooms: 2,
    bedrooms: 2,
    price: 320000,
    description:
      "Experience serene coastal living in this cozy beachfront bungalow. With direct beach access, modern amenities, and a spacious deck, this property is perfect for weekend getaways or a peaceful retreat.",
  },
  {
    id: "7",
    name: "Mountain Cabin",
    image: require("@/assets/house-booking/item_3.jpg"),
    bathrooms: 1,
    bedrooms: 3,
    price: 220000,
    description:
      "Escape to the mountains with this rustic cabin, ideal for nature enthusiasts and adventurers. Surrounded by scenic trails and wildlife, this property offers a tranquil environment and cozy interiors for ultimate relaxation.",
  },
  {
    id: "8",
    name: "Urban Penthouse",
    image: require("@/assets/house-booking/item_4.jpg"),
    bathrooms: 3,
    bedrooms: 4,
    price: 200000,
    description:
      "This luxurious urban penthouse features breathtaking city views, high-end finishes, and state-of-the-art amenities. Perfect for those who want to live in style and enjoy the best of city life from an elevated perspective.",
  },
  {
    id: "9",
    name: "Country Cottage",
    image: require("@/assets/house-booking/item_1.jpg"),
    bathrooms: 1,
    bedrooms: 2,
    price: 350000,
    description:
      "A picturesque cottage nestled in the countryside, surrounded by lush greenery. This property offers a cozy interior, a charming garden, and the perfect environment for those seeking peace and simplicity.",
  },
  {
    id: "10",
    name: "Eco-Friendly Home",
    image: require("@/assets/house-booking/item_2.jpg"),
    bathrooms: 2,
    bedrooms: 3,
    price: 350000,
    description:
      "Sustainability meets comfort in this eco-friendly home. Equipped with solar panels, energy-efficient appliances, and sustainable materials, it is perfect for environmentally conscious buyers.",
  },
];

export default houseListings;
