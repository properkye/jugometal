'use client';

import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";

interface AddToCartBtnProps {
  _id: number;
  name: string;
  price: number;
  image: string;
}

const AddToCartBtn = ({ _id, name, price, image }: AddToCartBtnProps) => {
  const { addToCart } = useCart();
  const router = useRouter()

  const handleClick = () => {
    addToCart({
      _id,
      name,
      qty: 1,
      priceData: { price },
      image,
    });
    router.push('/cart')
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-2 px-4 border border-black mt-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
    >
      Dodajte u korpu
    </button>
  );
};

export default AddToCartBtn;
