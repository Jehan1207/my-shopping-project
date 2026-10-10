
import React, { useState } from "react";
import "./App.css";

function App() {
  
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 1499,
    oldPrice: 2999,
    rating: 4.3,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=contain"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 14999,
    oldPrice: 18999,
    rating: 4.5,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=contain"
  },
  {
    id: 3,
    name: "Laptop",
    price: 45999,
    oldPrice: 55999,
    rating: 4.4,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=contain"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 1999,
    oldPrice: 3999,
    rating: 4.1,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=contain"
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 1299,
    oldPrice: 2499,
    rating: 4.2,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=contain"
  },
  {
    id: 6,
    name: "Travel Backpack",
    price: 899,
    oldPrice: 1599,
    rating: 4.0,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=contain"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 1799,
    oldPrice: 2999,
    rating: 4.3,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400&fit=contain"
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 699,
    oldPrice: 1299,
    rating: 4.1,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=400&fit=contain"
  }
];



  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    setMessage(`${product.name} added to cart!`);
  };

  const updateQuantity = (id, amount) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="amazon-app">

      {/* TOP NAVBAR */}
      <header className="top-navbar">
        <a className="brand" href="#home">
          Shop<span>Zone</span>
          <small> .in</small>
        </a>

        <button
          className="delivery"
          onClick={() => alert("Delivery location: India")}
        >
          <small>Deliver to</small>
          <strong>📍 India</strong>
        </button>

        <div className="search-box">
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Select category"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>

          <input
            type="text"
            placeholder="Search ShopZone.in"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button
            className="search-button"
            onClick={() => {
              document.getElementById("products").scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            🔍
          </button>
        </div>

        <button
          className="nav-link"
          onClick={() => alert("Welcome to ShopZone!")}
        >
          <small>Hello, sign in</small>
          <strong>Account & Lists</strong>
        </button>

        <button
          className="nav-link orders"
          onClick={() => alert("Your demo orders will appear here.")}
        >
          <small>Returns</small>
          <strong>& Orders</strong>
        </button>

        <button
          className="cart-link"
          onClick={() => setShowCart(!showCart)}
        >
          <span className="cart-emoji">🛒</span>
          <span className="cart-number">{cartCount}</span>
          <strong>Cart</strong>
        </button>
      </header>

      {/* CATEGORY NAVIGATION */}
      <nav className="sub-navbar">
        <button onClick={() => setCategory("All")}>☰ All</button>
        <button onClick={() => setCategory("Electronics")}>
          Electronics
        </button>
        <button onClick={() => setCategory("Fashion")}>
          Fashion
        </button>
        <button onClick={() => setCategory("All")}>
          Today's Deals
        </button>
        <button onClick={() => setCategory("All")}>
          Best Sellers
        </button>
        <button onClick={() => setCategory("All")}>
          Customer Service
        </button>
      </nav>

      {/* HERO BANNER */}
      <section className="hero-banner" id="home">
        <div className="hero-content">
          <p>GREAT DEALS • EVERY DAY</p>
          <h1>Discover amazing deals</h1>
          <h2>Shop your favourites in one place.</h2>
          <button
            onClick={() =>
              document.getElementById("products").scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Shop now →
          </button>
        </div>

        <div className="hero-art">
          <span>🎧</span>
          <span>⌚</span>
          <span>📱</span>
          <span>👟</span>
        </div>
      </section>

      <main className="content" id="products">

        {message && (
          <div className="success-message">
            <span>✓ {message}</span>
            <button onClick={() => setMessage("")}>✕</button>
          </div>
        )}

        {/* CART PANEL */}
        {showCart && (
          <section className="cart-panel">
            <div className="cart-heading">
              <h2>Your Shopping Cart</h2>
              <button onClick={() => setShowCart(false)}>✕</button>
            </div>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-product-info">
                      <strong>{item.name}</strong>
                      <p>₹{item.price.toLocaleString("en-IN")}</p>
                    </div>

                    <div className="quantity-control">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <h3>
                  Subtotal ({cartCount} items): ₹
                  {totalPrice.toLocaleString("en-IN")}
                </h3>

                <button
                  className="checkout-button"
                  onClick={() =>
                    alert(
                      "Demo checkout\nTotal: ₹" +
                      totalPrice.toLocaleString("en-IN") +
                      "\nNo real order or payment has been placed."
                    )
                  }
                >
                  Proceed to Buy
                </button>
              </>
            )}
          </section>
        )}

        {/* PRODUCTS */}
        <div className="product-heading">
          <div>
            <h2>Today's Deals</h2>
            <p>Explore products picked for you</p>
          </div>
          <span>{filteredProducts.length} results</span>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="deal-badge">Deal</span>
              </div>

              <div className="product-details">
                <h3>{product.name}</h3>

                <p className="stars">
                  ★★★★☆ <span>{product.rating}</span>
                </p>

                <div className="price-row">
                  <span className="rupee">₹</span>
                  <strong>
                    {product.price.toLocaleString("en-IN")}
                  </strong>
                </div>

                <p className="old-price">
                  M.R.P.:{" "}
                  <s>
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </s>
                </p>

                <p className="delivery-info">
                  FREE delivery on eligible orders
                </p>

                <button
                  className="add-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                <button
                  className="buy-button"
                  onClick={() => {
                    addToCart(product);
                    setShowCart(true);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-results">
            <h2>No products found</h2>
            <p>Try a different search or category.</p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          Back to top ↑
        </button>

        <div className="footer-content">
          <div>
            <h3>Get to Know Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h3>Make Money with Us</h3>
            <p>Sell on ShopZone</p>
            <p>Advertise Your Products</p>
          </div>

          <div>
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Help Center</p>
          </div>
        </div>

        <div className="footer-bottom">
          <h2>ShopZone.in</h2>
          <p>© 2026 ShopZone — React shopping demo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

