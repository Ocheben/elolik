/* eslint-disable import/prefer-default-export */
export const APIS = {
  baseUrl: 'http://ec2-18-191-222-23.us-east-2.compute.amazonaws.com',
  register: {
    method: 'POST',
    url: '/api/auth/register'
  },
  login: {
    method: 'POST',
    url: '/api/auth/login'
  },
  filterProducts: {
    method: 'GET',
    path: '/api/customers/products/filter/items'
  },
  postBid: {
    method: 'POST',
    path: '/api/customers/products/bids/make'
  },
  getCart: {
    method: 'GET',
    path: '/api/customers/cart/'
  },
  addToCart: {
    method: 'POST',
    path: '/api/customers/cart/add'
  },
  deleteItem: {
    method: 'DELETE',
    path: '/api/customers/cart/delete/'
  },
  updateItem: {
    method: 'PUT',
    path: '/api/customers/cart/setcount'
  },
};

export const toastDefault = {
  buttonText: 'Okay',
  duration: 4000,
  position: 'top'
};
