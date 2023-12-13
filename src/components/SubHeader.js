import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { SidebarContext } from "../contexts/SidebarContext";

const SubHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { categoryFilter, filterProducts, sortProducts, sortCriteria } =
    useContext(ProductContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div   className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed top-16 w-full z-10 transition-all`}
    >
      <div className="flex items-center justify-around container mx-auto">
        <div>
          <div>
            <label className="mr-2">Category:</label>
            <select
              className="px-2 py-1 border border-gray-400 rounded"
              onChange={(e) => filterProducts(e.target.value)}
              value={categoryFilter}
            >
              <option value="All">All</option>
              <option value="Electronics">{categoryFilter}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mr-2">Sort by:</label>
          <select
            className="px-2 py-1 border border-gray-400 rounded"
            onChange={(e) => sortProducts(e.target.value)}
            value={sortCriteria}
          >
            <option value="Default">Default</option>
            <option value="PriceLowToHigh">Price - Low to High</option>
            <option value="PriceHighToLow">Price - High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
