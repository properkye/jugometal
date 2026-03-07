"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Početna", href: "/" },
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Decode URL and format label
    let label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    // Custom labels for known routes
    const customLabels: Record<string, string> = {
      "traktori": "Traktori",
      "rezervni-delovi": "Rezervni Delovi",
      "prikljucne-masine": "Priključne Mašine",
      "imt": "IMT",
      "solis": "Solis",
      "john-deere": "John Deere",
      "yto": "YTO",
      "mahindra": "Mahindra",
      "carraro": "Carraro",
      "belarus": "Belarus",
      "zetor": "Zetor",
      "traktorski-delovi": "Traktorski Delovi",
      "delovi-za-prikljucne-masine": "Delovi za Priključne Mašine",
      "ostalo": "Ostalo",
      "o-nama": "O Nama",
      "kontakt": "Kontakt",
      "servis": "Servis",
      "subvencije": "Subvencije",
      "akcije": "Akcije",
      "cart": "Korpa",
    };

    if (customLabels[segment]) {
      label = customLabels[segment];
    }

    // Don't add last segment as clickable (current page)
    if (index === pathSegments.length - 1) {
      breadcrumbs.push({ label, href: "" });
    } else {
      breadcrumbs.push({ label, href: currentPath });
    }
  });

  return (
    <nav aria-label="breadcrumb" className="wrapper py-4">
      <ol className="flex flex-wrap gap-2 text-sm text-gray-600">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-[#1a472a] hover:underline transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>

      {/* Schema.org Breadcrumb structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs
              .filter((crumb) => crumb.href)
              .map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.label,
                item: `https://jugometal.co.rs${crumb.href}`,
              })),
          }),
        }}
      />
    </nav>
  );
};

export default Breadcrumbs;
