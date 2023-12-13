import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('Default');

  // main products
  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'https://fakestoreapi.com/products'
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  // categories

  useEffect(() => {
    const fetchCategories = async () => {
    const catUrl = 'https://fakestoreapi.com/products/categories'
        const response = await fetch(catUrl)
      const catData = await response.json()
      console.log(catData)
      setCategoryFilter(catData)
    }
    fetchCategories()
  }, [])


  const filterProducts = (category) => {
    setCategoryFilter(category);
  };

  const sortProducts = (criteria) => {
    setSortCriteria(criteria);
  };

  const filteredProducts = products.filter((product) => {
    return categoryFilter === 'All' ? true : product.category === categoryFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortCriteria) {
      case 'PriceLowToHigh':
        return a.price - b.price;
      case 'PriceHighToLow':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return <ProductContext.Provider value={{ products, categoryFilter, sortCriteria, filterProducts, sortProducts, sortedProducts, }}>
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
