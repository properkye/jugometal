import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import FrontLayout from "@/components/layouts/FrontLayout";

export default async function Akcije() {
    return (
        <FrontLayout>
        <ProductsIntro s1T={'Početna'} s1L={'/'} s2T={'Akcija'} s2L={''} s3T={''}  />
        <ProductsContainer>
          {/* {products.map((product, i) => (
            <ProductBox key={i} product={product} url={`/${'traktori'}/${brand}`} />
          ))} */}
          <h1>Trenutno nemamo proizvoda na akciji.</h1>
        </ProductsContainer>
      </FrontLayout>
    )
}