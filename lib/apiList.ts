export const authAPIList = {
  signup: "/user",
  login: "/login",
  getUser: "/user",
};

export const productAPIList = {
  getProducts: "/products",
  searchProduct: "/products/search",
};

export const cartAPIList = {
  addToCart: "/cart",
  clearCart: "/clear-cart",
};

export const pageRoute = {
  home: "/",
  product: "/products",
  cart: "/cart",
};

export const orderRoute = {
  order: "/order",
  getOrderDetails: "/order-details",
};

export const paymentRoute = {
  createPayment: "/payment/create-order",
  verifyPayment: "/payment/verify-payment",
};
