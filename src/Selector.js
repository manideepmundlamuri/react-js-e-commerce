// // ProductSelector.js
// import React, { useState } from 'react';

// const ProductSelector = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const products = [
//     { id: 1, category: 'Electronics', brand: 'Samsung' },
//     { id: 2, category: 'Electronics', brand: 'Sony' },
//     { id: 3, category: 'Clothing', brand: 'Nike' },
//     { id: 4, category: 'Clothing', brand: 'Adidas' },
//     { id: 5, category: 'Shoes', brand: 'Puma' },
//   ];

//   // Get unique categories from the products array
//   const categories = [...new Set(products.map((product) => product.category))];
//   return (
//     <div>
//       <h2>Product Selector</h2>

//       {/* Category Select Box */}
//       <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//         <option value="">Select a category</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>

//       {/* Brand Select Box */}
//       {selectedCategory && (
//         <div>
//           <h3>Select a brand</h3>
//           <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
//             <option value="">Select a brand</option>
//             {products
//               .filter((product) => product.category === selectedCategory)
//               .map((product) => (
//                 <option key={product.brand} value={product.brand}>
//                   {product.brand}
//                 </option>
//               ))}
//           </select>
//         </div>
//       )}

//       {/* Display selected category and brand */}
//       {selectedCategory && selectedBrand && (
//         <div>
//           <h3>Selected Product</h3>
//           <p>Category: {selectedCategory}</p>
//           <p>Brand: {selectedBrand}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductSelector;

// ProductSelector.js
import React, { useState } from 'react';

const ProductSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const products = [
    { id: 1, category: 'Electronics', brand: 'Samsung', price: 500 },
    { id: 2, category: 'Electronics', brand: 'Apple', price: 1000 },
    { id: 3, category: 'Clothing', brand: 'Nike', price: 50 },
    { id: 4, category: 'Clothing', brand: 'Adidas', price: 70 },
    { id: 5, category: 'Furniture', brand: 'IKEA', price: 200 },
    { id: 6, category: 'Furniture', brand: 'Ashley', price: 300 },
  ];

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const brands = selectedCategory
    ? Array.from(new Set(products.filter((product) => product.category === selectedCategory).map((product) => product.brand)))
    : [];

  return (
    <div>
      <h2>Product Selector</h2>

      <div>
        <label>Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div>
          <label>Brand:</label>
          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCategory && selectedBrand && (
        <div>
          <h3>Product Details</h3>
          {products
            .filter((product) => product.category === selectedCategory && product.brand === selectedBrand)
            .map((selectedProduct) => (
              <div key={selectedProduct.id}>
                <p>Category: {selectedProduct.category}</p>
                <p>Brand: {selectedProduct.brand}</p>
                <p>Price: {selectedProduct.price}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductSelector;
