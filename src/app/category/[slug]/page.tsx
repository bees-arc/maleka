import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, CATEGORIES } from "@/data/posts";
import ArticleGrid from "@/components/ArticleGrid";
import Newsletter from "@/components/Newsletter";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const currentCategory = CATEGORIES.find((c) => c.slug === slug);
  if (!currentCategory) {
    notFound();
  }

  const categoryArticles = ARTICLES.filter(
    (a) => a.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-xs uppercase tracking-widest text-[#6B5E57] hover:text-[#AE5238] transition-colors mb-6 group"
        >
          <ArrowLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="pb-8 border-b border-[#E2D5C7]">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold"
            style={{ color: currentCategory.color }}
          >
            Category Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#231C19] mt-2">
            {currentCategory.name}
          </h1>
          <p className="text-sm text-[#6B5E57] max-w-lg mt-2 font-light">
            Explore stories, inspiration, and recommendations under {currentCategory.name}.
          </p>
        </div>
      </div>

      {categoryArticles.length > 0 ? (
        <ArticleGrid
          title={`${currentCategory.name} Stories`}
          articles={categoryArticles}
          columns={3}
          viewAllLink=""
        />
      ) : (
        <div className="max-w-7xl mx-auto px-4 text-center py-16 text-[#6B5E57]">
          <p className="font-serif text-2xl">More stories in {currentCategory.name} coming soon!</p>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-[#AE5238] text-white text-xs uppercase tracking-widest rounded-sm"
          >
            Explore Homepage
          </Link>
        </div>
      )}

      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
}
