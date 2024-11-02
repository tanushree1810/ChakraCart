import p_image1 from './p_image1.png'; // shoes
import p_image1_2 from './p_image1_2.png';
import p_image1_3 from './p_image1_3.png';
import p_image1_4 from './p_image1_4.png';
import p_image1_5 from './p_image1_5.png';
import p_image_2 from './p_image_2.png'; // perfume
import p_image_3 from './p_image_3.png'; // perfume
import p_image_4 from './p_image_4.png'; // perfume
import p_image_5 from './p_image_5.png'; // boxers (men)
import p_image_6 from './p_image_6.png'; // trousers (men)
import p_image_7 from './p_image_7.png'; // trousers (men)
import p_image_8 from './p_image_8.png'; // boxers (men)
import p_image_9 from './p_image_9.png'; // t-shirt (men)
import p_image_10 from './p_image_10.png'; // t-shirt (men)
import p_image_11 from './p_image_11.png'; // t-shirt (women)
import p_image_12 from './p_image_12.png'; // t-shirt (women)
import p_image_13 from './p_image_13.png'; // shirt (men)
import p_image_14 from './p_image_14.png'; // shirt (men)
import p_image_15 from './p_image_15.png'; // bag (unisex)
import p_image_16 from './p_image_16.png'; // bag (unisex)
import p_image_17 from './p_image_17.png'; // bag (unisex)
import p_image_18 from './p_image_18.png'; // soft toy
import p_image_19 from './p_image_19.png'; // soft toy
import p_image_20 from './p_image_20.png'; // soft toy
import p_image_21 from './p_image_21.png'; // hoodie
import p_image_22 from './p_image_22.png'; // hoodie
import p_image_23 from './p_image_23.png'; // headband
import p_image_24 from './p_image_24.png'; // socks (unisex)
import p_image_25 from './p_image_25.png'; // socks (unisex)
import p_image_26 from './p_image_26.png'; // cap (men)
import p_image_27 from './p_image_27.png'; // cap (unisex)
import p_image_28 from './p_image_28.png'; // keychain
import p_image_29 from './p_image_29.png'; // keychain
import p_image_30 from './p_image_30.png'; // keychain
import p_image_31 from './p_image_31.png'; // diary
import p_image_32 from './p_image_32.png'; // diary

import logo from './logo.png';
import hero_img from './hero_img.png';
import cart_icon from './cart_icon.png';
import bin_icon from './bin_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import profile_icon from './profile_icon.png';
import quality_icon from './quality_icon.png';
import search_icon from './search_icon.png';
import star_dull_icon from './star_dull_icon.png';
import star_icon from './star_icon.png';
import support_img from './support_img.png';
import menu_icon from './menu_icon.png';
import about_img from './about_img.png';
import contact_img from './contact_img.png';
import razorpay_logo from './razorpay_logo.png';
import stripe_logo from './stripe_logo.png';
import cross_icon from './cross_icon.png';

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

const products = [
    {
        _id: 1,
        name: "Naruto-Themed Shoes",
        description: "Stylish Naruto-themed shoes with custom designs featuring iconic characters and symbols.",
        price: 1999,
        image: [p_image1, p_image1_2, p_image1_3, p_image1_4, p_image1_5],
        category: "Unisex",
        subCategory: "Footwear",
        sizes: ["6", "7", "8", "9", "10"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 2,
        name: "Naruto Perfume - Sage Mode",
        description: "A unique fragrance inspired by Naruto’s Sage Mode. Bold and refreshing.",
        price: 1499,
        image: [p_image_2],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: ["50ml", "100ml"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 3,
        name: "Naruto Perfume - Kurama's Fury",
        description: "Feel the power of Kurama with this intense and long-lasting fragrance.",
        price: 1799,
        image: [p_image_3],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: ["50ml", "100ml"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 4,
        name: "Naruto Perfume - Hokage Spirit",
        description: "A fresh and earthy scent inspired by Naruto's journey to become Hokage.",
        price: 1599,
        image: [p_image_4],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: ["50ml", "100ml"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 5,
        name: "Naruto Boxers (Men)",
        description: "Comfortable Naruto-themed boxers with fun character prints for men.",
        price: 599,
        image: [p_image_5],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 6,
        name: "Naruto Trousers (Men) - Konoha Edition",
        description: "Casual Naruto-themed trousers for men, perfect for everyday wear.",
        price: 1299,
        image: [p_image_6],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 7,
        name: "Naruto Trousers (Men) - Akatsuki Edition",
        description: "Men's trousers with the iconic red cloud Akatsuki design.",
        price: 1399,
        image: [p_image_7],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 8,
        name: "Naruto Boxers (Men) - Uchiha Clan",
        description: "Comfortable Naruto-themed boxers with Uchiha clan symbols.",
        price: 599,
        image: [p_image_8],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 9,
        name: "Naruto T-Shirt (Men) - Team 7",
        description: "Team 7 graphic t-shirt featuring Naruto, Sasuke, and Sakura for men.",
        price: 899,
        image: [p_image_9],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 10,
        name: "Naruto T-Shirt (Men) - Akatsuki Edition",
        description: "Men's Akatsuki-themed t-shirt with the iconic red cloud symbol.",
        price: 999,
        image: [p_image_10],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 11,
        name: "Naruto T-Shirt (Women) - Konoha Edition",
        description: "Women's Naruto-themed t-shirt featuring the Konoha village symbol.",
        price: 899,
        image: [p_image_11],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 12,
        name: "Naruto T-Shirt (Women) - Chibi Naruto",
        description: "Adorable chibi Naruto print t-shirt for women.",
        price: 899,
        image: [p_image_12],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 13,
        name: "Naruto Shirt (Men) - Hokage Edition",
        description: "Naruto Hokage-themed formal shirt for men, featuring embroidered details.",
        price: 1299,
        image: [p_image_13],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 14,
        name: "Naruto Shirt (Men) - Sage Mode",
        description: "Elegant Naruto-themed shirt with Sage Mode designs for men.",
        price: 1399,
        image: [p_image_14],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 15,
        name: "Naruto Backpack - Konoha Style",
        description: "Stylish unisex backpack inspired by the Hidden Leaf Village.",
        price: 1599,
        image: [p_image_15],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 16,
        name: "Naruto Sling Bag - Akatsuki",
        description: "Sleek Akatsuki-themed sling bag for everyday use.",
        price: 1299,
        image: [p_image_16],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 17,
        name: "Naruto Crossbody Bag - Ninja Style",
        description: "Practical crossbody bag with ninja designs, perfect for fans.",
        price: 999,
        image: [p_image_17],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 18,
        name: "Naruto Plush Toy - Naruto",
        description: "Soft plush toy of Naruto, perfect for collectors and fans.",
        price: 899,
        image: [p_image_18],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 19,
        name: "Naruto Plush Toy - Sasuke",
        description: "Soft plush toy of Sasuke Uchiha, perfect for collectors and fans.",
        price: 899,
        image: [p_image_19],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 20,
        name: "Naruto Plush Toy - Sakura",
        description: "Soft plush toy of Sakura Haruno, perfect for collectors and fans.",
        price: 899,
        image: [p_image_20],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 21,
        name: "Naruto Hoodie - Team 7 Edition",
        description: "Comfortable hoodie featuring Team 7 designs, perfect for cooler weather.",
        price: 1899,
        image: [p_image_21],
        category: "Unisex",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 22,
        name: "Naruto Hoodie - Akatsuki Edition",
        description: "Stylish Akatsuki-themed hoodie with a unique design.",
        price: 1999,
        image: [p_image_22],
        category: "Unisex",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 23,
        name: "Naruto Headband",
        description: "Classic Naruto headband with the Hidden Leaf Village symbol.",
        price: 399,
        image: [p_image_23],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 24,
        name: "Naruto Socks (Unisex)",
        description: "Comfortable and stylish socks with Naruto prints, perfect for all-day wear.",
        price: 299,
        image: [p_image_24],
        category: "Unisex",
        subCategory: "Bottomwear",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 25,
        name: "Naruto Socks (Unisex) - Team 7 Edition",
        description: "Stylish socks featuring Team 7 designs, perfect for fans.",
        price: 299,
        image: [p_image_25],
        category: "Unisex",
        subCategory: "Bottomwear",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 26,
        name: "Naruto Cap (Men) - Uchiha Edition",
        description: "Exclusive Uchiha design cap for men, a must-have for Naruto fans.",
        price: 499,
        image: [p_image_26],
        category: "Men",
        subCategory: "Accessories",
        sizes: ["M", "L", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 27,
        name: "Naruto Cap (Unisex) - Hokage Edition",
        description: "Stylish Hokage-themed cap, perfect for both men and women.",
        price: 549,
        image: [p_image_27],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: ["One Size"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 28,
        name: "Naruto Keychain - Hidden Leaf Symbol",
        description: "Classic Naruto keychain with the iconic Hidden Leaf Village symbol.",
        price: 199,
        image: [p_image_28],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 29,
        name: "Naruto Keychain - Akatsuki Cloud",
        description: "Keychain featuring the infamous Akatsuki cloud symbol for true fans.",
        price: 249,
        image: [p_image_29],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: false
    },
    {
        _id: 30,
        name: "Naruto Keychain - Sharingan Eye",
        description: "Unique keychain with the powerful Sharingan eye design.",
        price: 249,
        image: [p_image_30],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 31,
        name: "Naruto Diary - Hidden Leaf Edition",
        description: "Keep your thoughts safe with this Naruto-themed Hidden Leaf diary.",
        price: 399,
        image: [p_image_31],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: true
    },
    {
        _id: 32,
        name: "Naruto Diary - Akatsuki Edition",
        description: "A sleek and stylish diary with Akatsuki-themed cover design.",
        price: 429,
        image: [p_image_32],
        category: "Unisex",
        subCategory: "Accessories",
        sizes: [],
        date: new Date(),
        bestseller: false
    }
];

export default products;
