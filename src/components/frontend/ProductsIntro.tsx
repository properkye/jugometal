"use client";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductsIntroProps {
  s1T:string;
  s1L:string;
  s2T:string;
  s2L:string;
  s3T:string
}
const ProductsIntro:React.FC<ProductsIntroProps> = ({s1L, s2L, s1T,s2T, s3T}) => {
  return (
    <div className="border-t border-gray-300">
      <div className="wrapper py-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={s1L}>{s1T}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={s2L}>{s2T}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{s3T}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-[2rem] w-[60%] mt-4">
          Širok asortiman proizvoda prilagođenih potrebama modernog
          poljoprivrednika.
        </h1>
      </div>
    </div>
  );
};

export default ProductsIntro;
