import { useState } from 'react'
import './App.css'
import './index.css'
import ProductList from './ProductList'
import { products } from './Data'
// import UserForm from './UserForm'

function App() {
  return (
    <div>
      <ProductList products={products} />
    {/* <UserForm /> */}
    </div>
    
  )
}

export default App
