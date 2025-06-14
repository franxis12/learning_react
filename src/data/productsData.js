const products = [
  // Aromatic Plants
  {
    id: 1,
    name: "Lavender",
    description: "Aromatic plant known for its relaxing properties.",
    price: 5.99,
    image: "https://charsawfarms.com/cdn/shop/files/PurpleBouquetlavender2.jpg?v=1710207668&width=1946",
    category: "Aromatic Plants",
  },
  {
    id: 2,
    name: "Mint",
    description: "Refreshing herb commonly used in teas and recipes.",
    price: 3.99,
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/275/275944/mint-on-a-wooden-table.jpg",
    category: "Aromatic Plants",
  },
  {
    id: 3,
    name: "Lemon Balm",
    description: "Lemon-scented herb used for its calming effects.",
    price: 4.99,
    image: "https://bonnieplants.com/cdn/shop/articles/BONNIE_lemon-balm_iStock-184975706-1800px_ded081e4-7cbc-4dad-834d-8cdaeb2794fe.jpg?v=1642541739&width=1000",
    category: "Aromatic Plants",
  },
  {
    id: 4,
    name: "Rosemary",
    description: "Fragrant herb used in cooking and aromatherapy.",
    price: 3.5,
    image: "https://kellogggarden.com/wp-content/uploads/2021/03/Tips-on-How-to-Grow-Rosemary.jpg",
    category: "Aromatic Plants",
  },
  {
    id: 5,
    name: "Basil",
    description: "Sweet-scented herb often used in Mediterranean cuisine.",
    price: 2.99,
    image: "https://health.osu.edu/-/media/health/images/stories/2025/03/holy-basil.jpg",
    category: "Aromatic Plants",
  },
  {
    id: 6,
    name: "Thyme",
    description: "Herb with subtle aroma, great for seasoning meats.",
    price: 3.25,
    image: "https://www.thespruce.com/thmb/NwgWg8-NjddC5oZRgZgxNKbCDfg=/5304x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-thyme-1402630-hero-d44ccea3e3604c1db97d23761b25de52.jpg",
    category: "Aromatic Plants",
  },
  {
    id: 7,
    name: "Oregano",
    description: "Strong-flavored herb common in Italian cooking.",
    price: 3.45,
    image: "https://s1.elespanol.com/2015/07/05/cocinillas/cocinillas_46255377_116193219_1024x576.jpg",
    category: "Aromatic Plants",
  },
  {
    id: 8,
    name: "Sage",
    description: "Earthy, slightly peppery herb used in stuffings.",
    price: 3.85,
    image: "https://i.herbalreality.com/wp-content/uploads/2023/02/21123216/sage-plant.jpeg",
    category: "Aromatic Plants",
  },

  // Medicinal Plants
  {
    id: 9,
    name: "Aloe Vera",
    description: "Medicinal plant known for treating burns and skin irritation.",
    price: 7.5,
    image: "https://files.nccih.nih.gov/aloe-vera-steven-foster-square.jpg",
    category: "Medicinal Plants",
  },
  {
    id: 10,
    name: "Chamomile",
    description: "Popular for teas and used to ease stomach pain and anxiety.",
    price: 4.75,
    image: "https://www.superseeds.com/cdn/shop/files/roman-chamomile-herbs-pinetree-garden-seeds-719.jpg?v=1736460015",
    category: "Medicinal Plants",
  },
  {
    id: 11,
    name: "Echinacea",
    description: "Boosts the immune system and reduces cold symptoms.",
    price: 6.25,
    image: "https://www.newblooms.com/cdn/shop/files/Echinacea_SUMMERSONG_Firefinch_US7_982_110_0003_high_res.jpg?v=1734719546&width=1946",
    category: "Medicinal Plants",
  },
  {
    id: 12,
    name: "Peppermint",
    description: "Used for digestion relief and headaches.",
    price: 3.75,
    image: "https://letsliveitup.com/cdn/shop/articles/peppermint-leaf-health-benefits-and-nutrition_1000x.jpg?v=1746647357",
    category: "Medicinal Plants",
  },
  {
    id: 13,
    name: "Calendula",
    description: "Anti-inflammatory properties and skin healing support.",
    price: 4.95,
    image: "https://www.tiendamika.cl/cdn/shop/products/95CALENDULA_600x600.png?v=1638183306",
    category: "Medicinal Plants",
  },
  {
    id: 14,
    name: "Ginger",
    description: "Used for nausea, digestion, and anti-inflammatory benefits.",
    price: 5.45,
    image: "https://static1.backyardbossimages.com/wordpress/wp-content/uploads/2022/07/ginger-feature.jpg",
    category: "Medicinal Plants",
  },
  {
    id: 15,
    name: "Turmeric",
    description: "Powerful anti-inflammatory and antioxidant herb.",
    price: 5.75,
    image: "https://lazydogfarm.com/cdn/shop/articles/massive-turmeric-root-1080x1080.png?v=1703217897",
    category: "Medicinal Plants",
  },
  {
    id: 16,
    name: "Lemongrass",
    description: "Helps reduce stress and supports healthy digestion.",
    price: 4.15,
    image: "https://pansgardenojai.com/cdn/shop/files/Lemongrass_bcc8706c-fabf-46ce-901b-5d146efd2312.jpg?v=1689661805",
    category: "Medicinal Plants",
  }
];

export default products;