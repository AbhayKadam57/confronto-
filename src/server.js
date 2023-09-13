const data = [
  {
    id: "1",
    brand: "Samsung",
    model: "Samsung Galaxy F04",
    rearcamera: "13MP",
    frontCamera: "2Mp",
    screens: "6.5 inch FHD ",
    storage: "64GB",
    os: "Android",
    cost: "9000",
    img: "../samsungF04.png",
  },
  {
    id: "2",
    brand: "Apple",
    model: "I-phone 14 pro Max",
    rearcamera: "48MP",
    frontCamera: "12Mp",
    screens: "6.7 inch FHD ",
    storage: "128GB",
    os: "ios 16",
    cost: "127000",
    img: "../iphone.png",
  },
  {
    id: "3",
    brand: "Xiomi",
    model: "Xiaomi Poco C55",
    rearcamera: "50MP",
    frontCamera: "5Mp",
    screens: "6.5 inch FHD ",
    storage: "64GB",
    os: "Android",
    cost: "19000",
    img: "../redmi.png",
  },
  {
    id: "4",
    brand: "Honor",
    model: "Honor X5",
    rearcamera: "8MP",
    frontCamera: "5Mp",
    screens: "6.5 inch FHD ",
    storage: "64GB",
    os: "Android",
    cost: "13000",
    img: "../honor.png",
  },
  {
    id: "5",
    brand: "Oppo",
    model: "Oppo A56s",
    rearcamera: "13MP",
    frontCamera: "2Mp",
    screens: "6.5 inch FHD ",
    storage: "64GB",
    os: "Android",
    cost: "14000",
    img: "../oppo.png",
  },
  {
    id: "6",
    brand: "RealMe",
    model: "RealMe 10s",
    rearcamera: "13MP",
    frontCamera: "2Mp",
    screens: "6.5 inch FHD ",
    storage: "64GB",
    os: "Android",
    cost: "29000",
    img: "../realme.png",
  },
  {
    id: "7",
    brand: "Oneplus",
    model: "Oneplus Nord 2T",
    rearcamera: "50MP",
    frontCamera: "32Mp",
    screens: "6.5 inch FHD ",
    storage: "64GB",
    os: "Android",
    cost: "39000",
    img: "../oneplus.png",
  },
];

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const getSingleProduct = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let product = data.filter((item, id) => item.id === productId);

      resolve({ ...product[0] });
    }, 400);
  });
};
