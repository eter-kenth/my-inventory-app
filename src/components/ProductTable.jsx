import React from 'react';

function ProductTable({ product }) {
  return (
    <tr className=" bg-white">
      <td className="px-4 py-2 text-gray-800 text-center">{product.name}</td>
      <td className="px-4 py-2 text-gray-600 text-center">{product.category}</td>
      <td className="px-4 py-2 text-gray-800 text-center">${product.price}</td>
      <td className="px-4 py-2 text-gray-800 text-center">{product.stock}</td> {/* Nueva columna de Stock */}
      <td className="px-4 py-2 text-center">
        <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
          Add to Order
        </button>
      </td>
    </tr>
  );
}

export default ProductTable;




