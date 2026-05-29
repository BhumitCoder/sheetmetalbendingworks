import BlogPage from "@/components/site/BlogPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublicBlogsFromFirestore } from "@/lib/firestore/publicBlogsServer";
import {
  buildMetadata,
  createBlogJsonLd,
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "Sheet Metal Laser Cutting Blog & Guides | CNC Plasma Cutting & Plate Bending Tips | Balaji Engineering Works";
const description =
  "Read sheet metal laser cutting guides, CNC plasma cutting tips, plate bending insights, plate rolling articles, and fabrication knowledge from Balaji Engineering Works in Surat.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/blog",
  keywords: [
    "Balaji Engineering Works blog",
    "sheet metal fabrication blog",
    "laser cutting guides",
    "steel bending articles",
    "industrial fabrication insights",
  ],
});

export default async function Page() {
  const posts = await getPublicBlogsFromFirestore();
  const schemas = [
    createWebPageJsonLd({
      title,
      description,
      path: "/blog",
      type: "CollectionPage",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
    createBlogJsonLd(posts),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <BlogPage />
    </>
  );
}
