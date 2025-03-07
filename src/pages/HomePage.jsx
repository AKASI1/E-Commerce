import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { categories, sliderItems, popularProducts } from "@/dummydata";

import Button from "@/components/Button";
import Container from "@/components/Container";
import CategoryList from "@/ui/CategoryList";
import ProductList from "@/ui/ProductList";
import Newsletter from "@/ui/Newsletter";
// import Slider from "@/ui/Slider";
import api from "../api";
import { CartContext, UserContext } from "@/App";
import Carousel from "../components/Carousel";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const { cartDispatch } = useContext(CartContext);

  const addToCart = async (product, quantity = 1) => {
    if (user) {
      const resp = await api.addProductsToCart([
        { productID: product._id, quantity },
      ]);
      if (resp.status === "ok") {
        cartDispatch({
          type: "ADD_PRODUCTS",
          payload: [{ ...product, quantity }],
        });
      }
    } else {
      cartDispatch({
        type: "ADD_PRODUCTS",
        payload: [{ ...product, quantity }],
      });
    }
  };

  return (
    <main>
      <section>
        <Carousel slides={sliderItems} />
      </section>

      <Container heading="الفئات الأكثر شهرة">
        <CategoryList categories={categories} />
      </Container>

      <Container heading="الأصناف الأكثر مبيعاً">
        <ProductList
          products={[...popularProducts]}
          onAddToCart={addToCart}
        />

        <Link to="/products" className="flex justify-center">
          <Button className="text-lg mt-6" link>
            اعرض المزيد <ChevronRight className="ml-2" />
          </Button>
        </Link>
      </Container>

      <section className="my-20">
        <Newsletter />
      </section>
    </main>
  );
}
