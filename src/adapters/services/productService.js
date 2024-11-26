const axios = require('axios');
const logger = require('../../utils/logger');

const productService = {
  fetchProductData: async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response.data.products;

      // Mapping products into the desired format
      const categorizedProducts = Object.values(
        products.reduce((categories, product) => {
          // Initialize category if it doesn't exist
          if (!categories[product.category]) {
            categories[product.category] = {
              categories: product.category,
              rows: []
            };
          }

          // Push product data to the category's rows
          categories[product.category].rows.push({
            title: product.title,
            description: product.description,
            price: product.price
          });

          return categories;
        }, {})
      );

      logger.info(categorizedProducts);
      return categorizedProducts;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
};

module.exports = productService;
