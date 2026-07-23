import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/posts";
import ArticleGrid from "@/components/ArticleGrid";
import Newsletter from "@/components/Newsletter";
import { ArrowLeft, Clock, Share2, Tag, Bookmark } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  ).slice(0, 3);

  return (
    <article className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2D5C7]/60">
          <Link
            href="/"
            className="inline-flex items-center text-xs uppercase tracking-widest text-[#6B5E57] hover:text-[#AE5238] transition-colors group"
          >
            <ArrowLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs uppercase tracking-widest font-semibold text-[#AE5238]">
            {article.category} {article.subcategory ? `· ${article.subcategory}` : ""}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#231C19] leading-[1.15] mb-6">
          {article.title}
        </h1>

        {/* Metadata & Author Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-y border-[#E2D5C7] mb-8 gap-4">
          <div className="flex items-center space-x-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-[#E2D5C7]"
            />
            <div>
              <span className="block text-xs font-semibold text-[#231C19]">
                {article.author.name}
              </span>
              <span className="flex items-center text-xs text-[#6B5E57] mt-0.5">
                <Clock size={12} className="mr-1 text-[#AE5238]" />
                {article.date} · {article.readTime}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-[#231C19]">
            <button
              className="p-2 rounded-full border border-[#E2D5C7] hover:bg-[#E3D8C6] hover:text-[#AE5238] transition-colors"
              aria-label="Share article"
            >
              <Share2 size={16} />
            </button>
            <button
              className="p-2 rounded-full border border-[#E2D5C7] hover:bg-[#E3D8C6] hover:text-[#AE5238] transition-colors"
              aria-label="Save story"
            >
              <Bookmark size={16} />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="rounded-sm overflow-hidden bg-[#E3D8C6] aspect-[16/10] mb-10 border border-[#E2D5C7] shadow-md">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none text-[#231C19] font-light leading-relaxed space-y-6 
            prose-headings:font-serif prose-headings:font-light prose-headings:text-[#231C19]
            prose-p:text-[#382E2B] prose-blockquote:border-l-[#AE5238] prose-blockquote:bg-[#F4ECE1] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-serif"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-[#E2D5C7] flex items-center space-x-3 flex-wrap gap-2">
          <Tag size={16} className="text-[#AE5238]" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#E3D8C6]/50 text-xs uppercase tracking-wider text-[#231C19] rounded-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-6 bg-[#F4ECE1] rounded-sm border border-[#E2D5C7] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#AE5238]"
          />
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#AE5238]">
              Written By
            </span>
            <h3 className="font-serif text-xl font-normal text-[#231C19]">
              {article.author.name}
            </h3>
            <p className="text-xs text-[#6B5E57] mt-1 font-light leading-relaxed">
              Global fashion influencer, beauty entrepreneur, and founder of the Camila Coelho Collection. Sharing daily inspirations, trends, and lifestyle tips.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <ArticleGrid
            title="More Stories You Might Like"
            articles={relatedArticles}
            columns={3}
            viewAllLink=""
            hasBackground={true}
          />
        </div>
      )}

      <div className="mt-12">
        <Newsletter />
      </div>
    </article>
  );
}
