import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

type ProductType = {
  name: string;
  price: number;
  description: string;
  image: string | string[];
  discount?: number;
  discountType?: string;
  reviews?: {
    user: string;
    rating: number;
    comment: string;
  }[];
};

type DescriptionProps = {
  open: boolean;
  onClose: () => void;
  product: ProductType | null;
};

const DescriptionModal: React.FC<DescriptionProps> = ({ open, onClose, product }) => {
  const images: string[] = product
    ? Array.isArray(product.image)
      ? product.image
      : [product.image]
    : [];

  const [reviews, setReviews] = useState(product?.reviews || []);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);

  if (!open || !product) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.trim() || !comment.trim()) return;
    setReviews([
      ...reviews,
      {
        user,
        rating,
        comment,
      },
    ]);
    setUser("");
    setComment("");
    setRating(5);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{product.name}</DialogTitle>
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              style={{ lineHeight: "1", width: "2rem", height: "2rem" }}
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </DialogClose>
        </DialogHeader>
        {/* Carousel */}
        <div className="max-w mb-4">
          <Carousel>
            <CarouselPrevious />
            {images.map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="w-48 h-48 object-cover rounded border mx-auto"
                />
              </CarouselItem>
            ))}
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mb-2 text-base text-gray-700 text-center">{product.description}</div>
        <div className="flex items-center gap-2 mb-2 justify-center">
          {product.discount ? (
            <>
              <span className="text-lg font-bold text-red-600">
                ₵{(product.price * (1 - product.discount / 100)).toFixed(2)}
              </span>
              <span className="line-through text-gray-400">
                ₵{product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold">₵{product.price.toFixed(2)}</span>
          )}
          {product.discountType && (
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
              {product.discount}% {product.discountType}
            </span>
          )}
        </div>
        {/* Reviews */}
        <div className="w-full mt-4">
          <h3 className="font-semibold mb-2 text-sm">Reviews</h3>
          {reviews && reviews.length > 0 ? (
            <ul className="space-y-2 max-h-32 overflow-y-auto">
              {reviews.map((review, idx) => (
                <li key={idx} className="border-b pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs">{review.user}</span>
                    <span className="text-yellow-500 text-xs">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">{review.comment}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-xs text-gray-400">No reviews yet.</div>
          )}
          {/* Add Review Form */}
          <form onSubmit={handleAddReview} className="mt-4 space-y-2">
            <div>
              <Label htmlFor="review-user" className="text-xs">Your name</Label>
              <Input
                id="review-user"
                type="text"
                placeholder="Your name"
                className="w-full border rounded px-2 py-1 text-xs"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                maxLength={30}
                required
              />
            </div>
            <div>
              <Label htmlFor="review-comment" className="text-xs">Your review</Label>
              <Textarea
                id="review-comment"
                placeholder="Write your review..."
                className="w-full border rounded px-2 py-1 text-xs"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={200}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="review-rating" className="text-xs">Rating:</Label>
              <select
                id="review-rating"
                className="border rounded px-1 py-0.5 text-xs"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
            >
              Add Review
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DescriptionModal;