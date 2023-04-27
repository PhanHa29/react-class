import React, { useState, useContext } from 'react';
import './ProductList.css'
import { products } from './Data';
import { ProductContext } from './ProductContext';

type Product = {
  name: string;
  description: string;
  price: number;
  liked: boolean;
};

type ProductListProps = {
  products: Product[];
};

function ProductList(props: ProductListProps) {
  const { selectProduct } = useContext(ProductContext);
  const [products, setProducts] = useState(props.products);
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [totalPrice, settotalPrice] = useState('');
  const [showLikedProducts, setShowLikedProducts] = useState(false);

  function handleLikeClick(index: number) {
    const newProducts = [...products];
    newProducts[index].liked = !newProducts[index].liked;
    setProducts(newProducts);

    const newLikedProducts = newProducts.filter(products => products.liked);
    setLikedProducts(newLikedProducts);

    const likedProducts = newProducts.filter(product => product.liked);
    const totalPrice = likedProducts.reduce((total, product) => total + product.price, 0);
    settotalPrice(totalPrice ? `${totalPrice}`: '');

    selectProduct(newProducts[index]);
  }

  function handleHideProductsClick() {
    setShowLikedProducts(true);
  }

  function handlePaymentClick() {
    setLikedProducts([]);
    settotalPrice('');
    setShowLikedProducts(false);
    const newProducts = products.map((product) => ({ ...product, liked: false }));
    setProducts(newProducts);
  }

  return (
    <div id="mainmenu">
      <div>
        <h1>Wild Restaurant Menu</h1>
        {showLikedProducts ? (
          <div id="choice">
            <h2>Your Choice</h2>
            <ul>
              {likedProducts.map((product, index) => (
                <li key={index}>{product.name} - {product.price} EUR</li>
              ))}
              <p>Total Price: {totalPrice} EUR</p>
              <button onClick={handlePaymentClick}>Thanh Toán</button>
            </ul>
          </div>
        ) : (
          <>
            {products.map((product, index) => (
              <div key={index}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price} EUR</p>
                <button onClick={() => handleLikeClick(index)}>
                  {product.liked ? 'Unlike' : 'Like'}
                </button>
              </div>
            ))}
            {likedProducts.length > 0 && (
              <button onClick={handleHideProductsClick}>Chọn</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
