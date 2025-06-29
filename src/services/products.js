import { ProductsCollection } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findOne({ _id: productId });
  return product;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return payload;
};

export const updateProduct = async (payload) => {};

export const deleteProduct = async () => {};
