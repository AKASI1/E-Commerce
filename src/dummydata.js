import category1 from "./images/4000-8.jpg";
import category2 from "./images/500-3 copy.jpg";
import category3 from "./images/113.jpg";
import product1 from "./images/products/113.jpg";
import product2 from "./images/products/2003-3 copy.jpg";
import product3 from "./images/products/2007.jpg";
import product4 from "./images/products/241.jpg";
import product5 from "./images/products/3000-2.jpg";
import product6 from "./images/products/3001-3 copy.jpg";
import product7 from "./images/products/603-6.jpg";

export const sliderItems = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/7973302/pexels-photo-7973302.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "FORMAL WEAR",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "TOO ABSTRACT",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export const categories = [
  {
    id: 1,
    image: category1,
    title: "كوليشن رمضان",
  },
  {
    id: 2,
    image: category2,
    title: "موديلات تناسب جمالك و أناقتك",
  },
  {
    id: 3,
    image: category3,
    title: "اقوى مجموعة اسدالات وملابس المحجبات",
  },
];

export const popularProducts = [
  {
    id: 1,
    image: product1,
    name: " دريس حريمي🔷 كود:- 3003",
    price: '٣٩٩',
  },
  {
    id: 2,
    image: product2,
    name: "Angela Natural Tee",
    price: '٣٥٩',
  },
  {
    id: 3,
    image: product3,
    name: "Double Match Heavy Cotton Shirt",
    price: '٣٢٩',
  },
  {
    id: 4,
    image: product4,
    name: "Cotton Dress",
    price: '٣٨٩',
  },
  {
    id: 5,
    image: product5,
    name: "Noissue X Creatsy Tote Bag",
    price: '٣٤٩',
  },
  {
    id: 6,
    image: product6,
    name: "Rocket Vintage Chill Cap",
    price: '٣٤٩',
  },
  {
    id: 7,
    image: product7,
    name: "White Leather high-top Sneakers",
    price: '٣٩٩',
  },
];

export const dummyOrderStatus = [
  "جاري التأكيد",
  "قيد التحميل",
  "بالطريق",
  "تم التوصيل",
];

export const dummyOrders = [0, 3, 6]
  .map((num) => ({
    products: [...popularProducts].splice(num, 3).map((p) => ({
      product: p,
      quantity: Math.floor(Math.random() * 3 + 1),
    })),
  }))
  .map((order, i) => ({
    ...order,
    id: i,
    amount: order.products.reduce(
      (sum, p) => sum + p.product.price * p.quantity,
      0
    ),
    address: "221b Baker St, London NW1 6XE, UK",
    status:
      dummyOrderStatus[Math.floor(Math.random() * dummyOrderStatus.length)],
  }));
