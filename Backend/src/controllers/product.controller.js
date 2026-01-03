let ProductModel = require("../models/products.model");
const mongoose = require("mongoose");

let create = async (req, res) => {
  try {
    const { name, brand, category, price, image, rating, inStock } = req.body;

    if (
      !name ||
      !brand ||
      !category ||
      !price ||
      !image ||
      !rating ||
      !inStock
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let product = await ProductModel.create({
      name,
      brand,
      category,
      price,
      image,
      rating,
      inStock,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({
      message: "Something went wrong while creating the product",
      error: error.message,
    });
  }
};

let getAll = async (req, res) => {
  try {
    let products = await ProductModel.find();
    return res.status(200).json({
      message: "All products",
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "Something went wrong while fetching products",
      error: error.message,
    });
  }
};

let deleteOne = async (req, res) => {
  try {
    let productId = req.params.id;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    let deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({
      message: "Something went wrong while deleting product",
      error: error.message,
    });
  }
};

let updateProduct = async (req, res) => {
  try {
    let productId = req.params.id;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const { name, brand, category, price, image, rating, inStock } = req.body;

    // Check if at least one field is present
    if (
      !name &&
      !brand &&
      !category &&
      !price &&
      !image &&
      !rating &&
      !inStock
    ) {
      return res.status(400).json({
        message: "At least one field is required to update",
      });
    }

    let updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      { name, brand, category, price, image, rating, inStock },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      message: "Something went wrong while updating product",
      error: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  deleteOne,
  updateProduct
};
