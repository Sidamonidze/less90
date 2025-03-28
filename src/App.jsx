import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.rating > 3 && <span className="best-seller">Best Seller</span>}
          {!product.stock && <span className="out-of-stock">Out of Stock</span>}
        </div>
      ))}
    </div>
  );
}

export default App;
