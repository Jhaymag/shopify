import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Cart from "./cart";
import DescriptionModal from "./description"; // Import the modal

type ProductType = {
  name: string;
  price: number;
  description: string;
  image: string;
  discount?: number;
  discountType?: string;
};

export default function Product() {
  const [products] = useState<ProductType[]>([
    {
      name: "Sample Product 1",
      price: 49.99,
      description: "This is a sample product description. It highlights the features and benefits of the product.",
      image: "https://via.placeholder.com/400x300?text=Product+1",
      discount: 20,
      discountType: "Christmas Discount",
    },
    {
      name: "Sample Product 2",
      price: 29.99,
      description: "Another product with a short description.",
      image: "https://via.placeholder.com/400x300?text=Product+2",
    },
    {
      name: "Sample Product 3",
      price: 99.99,
      description: "A third product with a different description.",
      image: "https://via.placeholder.com/400x300?text=Product+3",
      discount: 10,
    },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState<ProductType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [descOpen, setDescOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const handleAddToCart = (product: ProductType) => {
    setCart((prev) => [...prev, product]);
  };

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
    setDescOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {/* Cart Icon Button */}
      <div className="w-full flex justify-end items-center px-4 pt-2">
        <button
          className="relative"
          onClick={handleCartClick}
          aria-label="View cart"
        >
          {/* Cart SVG Icon */}
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 0 0 6.6 17h10.8a1 1 0 0 0 .95-1.3L17 13M7 13V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7"
            />
          </svg>
          {/* Notification badge */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cart.length}
            </span>
          )}
        </button>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center py-10 w-full">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <Card key={idx} className="w-64 h-auto shadow-md p-2 cursor-pointer">
              <CardHeader className="p-2 pb-0" onClick={() => handleProductClick(product)}>
                <div className="flex flex-col items-start">
                  {product.discount && (
                    <span className="mb-1 bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                      -{product.discount}% {product.discountType ? `(${product.discountType})` : ""}
                    </span>
                  )}
                  <CardTitle className="text-base font-semibold">{product.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-2" onClick={() => handleProductClick(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="text-gray-700 text-xs mb-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  {product.discount ? (
                    <>
                      <span className="text-base font-bold text-red-600">
                        ₵{(product.price * (1 - product.discount / 100)).toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₵{product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-base font-bold">₵{product.price.toFixed(2)}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-2 pt-0">
                <Button className="w-full h-8 text-xs" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Cart Modal */}
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} />
        {/* Description Modal */}
        <DescriptionModal open={descOpen} onClose={() => setDescOpen(false)} product={selectedProduct} />
      </main>
      <Footer />
    </div>
  );
}