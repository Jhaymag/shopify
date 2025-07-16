import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Product() {
  // Example product data
  const [product] = useState({
    name: "Sample Product",
    price: 49.99,
    description: "This is a sample product description. It highlights the features and benefits of the product.",
    image: "https://via.placeholder.com/400x300?text=Product+Image",
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-700 mb-2">{product.description}</p>
            <div className="text-xl font-semibold mb-4">₵{product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}