const products = [
    // beauty products list
    {
        "id": 1,
        "name": "Blue Heaven Festive MakeUp Kit For Women, Fair Tone Combo, (Pack of 8)",
        "category": ["Beauty", "Makeup", "Skin Care", "Cosmetics", "Face"],
        "Brand": "Blue Heaven",
        "description": "A complete festive makeup kit for women with a fair tone combo.",
        "badge": "Best Seller",
        "stock": 50,
        "sold": 22,
        "productAvatar": "/images/Beauty/beauty1.png",
        "images": [
            "/images/Beauty/beauty1.png",
            "/images/Beauty/beauty2.png",
            "/images/Beauty/beauty3.png",
            "/images/Beauty/beauty4.png",
            "/images/Beauty/beauty5.png"
        ],
        "originalPrice": 1499,
        "offeredPrice": 1199,
        "rating": 4.8,
        "createdAt": "2025-04-01",
        "reviews": [
            {
                "user": "droneGuru",
                "comment": "Amazing flight control and stable footage!",
                "rating": 5,
                "profileImg": "/images/Drones/drone2.png"
            }
        ],
        "features": [
            "Specially curated all-in-one make-up kit",
            "Suitable for fair complexion",
            "It is a complete makeup kit of 8 exciting products",
            "All premium products at affordable price"
        ]
    },
    {
        "id": 2,
        "name": "Maybelline New York Fit Me Matte + Poreless Liquid Foundation",
        "category": ["Beauty", "Makeup", "Foundation"],
        "Brand": "Maybelline",
        "description": "Matte foundation that fits your skin tone and texture.",
        "badge": "Best Seller",
        "stock": 75,
        "sold": 30,
        "productAvatar": "/images/Beauty/beauty6.png",
        "images": [
            "/images/Beauty/beauty6.png",
            "/images/Beauty/beauty7.png",
            "/images/Beauty/beauty8.png"
        ],
        "originalPrice": 599,
        "offeredPrice": 499,
        "rating": 4.5,
        "createdAt": "2025-04-02",
        "reviews": [
            {
                "user": "makeupQueen",
                "comment": "Great coverage and long-lasting!",
                "rating": 4,
                "profileImg": "src/SampleDatas/Users/makeupQueen.png"
            }
        ],
        "features": [
            "Matte finish for a natural look",
            "Available in various shades",
            "Controls shine and minimizes pores"
        ]
    },
    {
        "id": 3,
        "name": "L'Oreal Paris Infallible Pro-Matte Liquid Lipstick",
        "category": ["Beauty", "Makeup", "Lipstick"],
        "Brand": "L'Oreal Paris",
        "description": "Long-lasting matte liquid lipstick with intense color.",
        "badge": "New Arrival",
        "stock": 100,
        "sold": 45,
        "productAvatar": "/images/Beauty/beauty9.png",
        "images": [
            "/images/Beauty/beauty9.png",
            "/images/Beauty/beauty10.png",
            "/images/Beauty/beauty11.png"
        ],
        "originalPrice": 799,
        "offeredPrice": 699,
        "rating": 4.7,
        "createdAt": "2025-04-03",
        "reviews": [
            {
                "user": "lipstickLover",
                "comment": "The color payoff is amazing and it lasts all day!",
                "rating": 5,
                "profileImg": "/images/Beauty/beauty12.png"
            }
        ],
        "features": [
            "Intense matte finish",
            "Long-lasting formula",
            "Available in multiple shades"
        ]
    },
    // Jewelry products list
    {
        "id": 4,
        "name": "Zaveri Pearls Gold Plated Traditional Necklace Set",
        "category": ["Jewelry", "Necklaces", "Traditional"],
        "Brand": "Zaveri Pearls",
        "description": "Elegant gold plated traditional necklace set with matching earrings.",
        "badge": "Trending",
        "stock": 30,
        "sold": 15,
        "productAvatar": "/images/Jewelry/jewelry1.png",
        "images": [
            "/images/Jewelry/jewelry1.png",
            "/images/Jewelry/jewelry2.png",
            "/images/Jewelry/jewelry3.png"
        ],
        "originalPrice": 2999,
        "offeredPrice": 2499,
        "rating": 4.6,
        "createdAt": "2025-04-04",
        "reviews": [
            {
                "user": "jewelryLover",
                "comment": "Absolutely stunning necklace set!",
                "rating": 5,
                "profileImg": "/images/Jewelry/jewelry4.png"
            }
        ],
        "features": [
            "Gold plated for a luxurious look",
            "Lightweight and comfortable to wear",
            "Perfect for special occasions"
        ]
    },
    {
        "id": 5,
        "name": "Zaveri Pearls Gold Plated Traditional Necklace Set",
        "category": ["Jewelry", "Necklaces", "Traditional"],
        "Brand": "Zaveri Pearls",
        "description": "Elegant gold plated traditional necklace set with matching earrings.",
        "badge": "Trending",
        "stock": 30,
        "sold": 15,
        "productAvatar": "/images/Jewelry/jewelry1.png",
        "images": [
            "/images/Jewelry/jewelry1.png",
            "/images/Jewelry/jewelry2.png",
            "/images/Jewelry/jewelry3.png"
        ],
        "originalPrice": 2999,
        "offeredPrice": 2499,
        "rating": 4.6,
        "createdAt": "2025-04-04",
        "reviews": [
            {
                "user": "jewelryLover",
                "comment": "Absolutely stunning necklace set!",
                "rating": 5,
                "profileImg": "/images/Jewelry/jewelry4.png"
            }
        ],
        "features": [
            "Gold plated for a luxurious look",
            "Lightweight and comfortable to wear",
            "Perfect for special occasions"
        ]
    },
    {
        "id": 6,
        "name": "Zaveri Pearls Gold Plated Traditional Necklace Set",
        "category": ["Jewelry", "Necklaces", "Traditional"],
        "Brand": "Zaveri Pearls",
        "description": "Elegant gold plated traditional necklace set with matching earrings.",
        "badge": "Trending",
        "stock": 30,
        "sold": 15,
        "productAvatar": "/images/Jewelry/jewelry1.png",
        "images": [
            "/images/Jewelry/jewelry1.png",
            "/images/Jewelry/jewelry2.png",
            "/images/Jewelry/jewelry3.png"
        ],
        "originalPrice": 2999,
        "offeredPrice": 2499,
        "rating": 4.6,
        "createdAt": "2025-04-04",
        "reviews": [
            {
                "user": "jewelryLover",
                "comment": "Absolutely stunning necklace set!",
                "rating": 5,
                "profileImg": "/images/Jewelry/jewelry4.png"
            }
        ],
        "features": [
            "Gold plated for a luxurious look",
            "Lightweight and comfortable to wear",
            "Perfect for special occasions"
        ]
    },
    // Earrinsg products list
    {
        "id": 7,
        "name": "Zaveri Pearls Gold Plated Traditional Earrings",
        "category": ["Jewelry", "Earrings", "Traditional"],
        "Brand": "Zaveri Pearls",
        "description": "Beautiful gold plated traditional earrings with intricate design.",
        "badge": "New Arrival",
        "stock": 60,
        "sold": 25,
        "productAvatar": "/images/Jewelry/jewelry5.png",
        "images": [
            "/images/Jewelry/jewelry5.png",
            "/images/Jewelry/jewelry6.png",
            "/images/Jewelry/jewelry7.png"
        ],
        "originalPrice": 1499,
        "offeredPrice": 1299,
        "rating": 4.4,
        "createdAt": "2025-04-05",
        "reviews": [
            {
                "user": "earringEnthusiast",
                "comment": "These earrings are gorgeous and lightweight!",
                "rating": 4,
                "profileImg": "/images/Jewelry/jewelry8.png"
            }
        ],
        "features": [
            "Gold plated for a luxurious look",
            "Lightweight and comfortable to wear",
            "Perfect for everyday wear or special occasions"
        ]
    }
]

export default products;