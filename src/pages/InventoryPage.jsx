import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import useProductSearch from '../hooks/useProductSearch';
import Header2 from '../components/Header2';    

function InventoryPage() {
  const [query, setQuery] = useState('');
  const products = useProductSearch(query);

  return (
    <>
    <Header2/>
    <div className="flex flex-col">
      <SearchBar onSearch={setQuery} />
      <ProductList products={products} />
    </div>
    </>
    
  );
}

export default InventoryPage;
