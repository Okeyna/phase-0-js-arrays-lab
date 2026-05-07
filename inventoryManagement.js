// Write your code here
const products = ['Laptop', 'Phone', 'Headphones', 'Monitor'];

const logFirstProduct = () => {
  console.log(products[0]);
}

const addProduct = (productName) => {
  products.push(productName);
}

const updateProductName = (index, newName) => {
  products[index] = newName;
}

const removeLastProduct = () => {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
