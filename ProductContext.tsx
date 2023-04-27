import { createContext, useContext, useState } from "react";
import { Product } from "./ProductList";

type ProductContextType = {
  selectedProducts: Product[];
  selectProduct: (product: Product) => void;
  clearSelectedProducts: () => void;
};

export const ProductContext = createContext<ProductContextType>({
  selectedProducts: [],
  selectProduct: () => {},
  clearSelectedProducts: () => {},
});

export const useProductContext = () => useContext(ProductContext);

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const selectProduct = (product: Product) => {
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
  };

  const clearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, selectProduct, clearSelectedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
