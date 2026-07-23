import React from "react";
import HeroSection from "@/components/HeroSection";
import ArticleGrid from "@/components/ArticleGrid";
import Newsletter from "@/components/Newsletter";
import CategorySlider from "@/components/CategorySlider";
import VideoGrid from "@/components/VideoGrid";
import { ARTICLES } from "@/data/posts";

export default function Home() {
  const heroArticle = ARTICLES[0];
  const latestArticles = ARTICLES.slice(1, 4);
  const twoColArticles = ARTICLES.slice(3, 5);
  const beautyArticles = ARTICLES.filter((a) => a.category.toLowerCase() === "beauty");
  const videoArticles = ARTICLES.filter((a) => a.category.toLowerCase() === "video");

  return (
    <div className="space-y-0">
      {/* 1. Main Featured Hero Story */}
      <HeroSection article={heroArticle} />

      {/* 2. Latest Articles (3 Column Grid) */}
      <ArticleGrid
        title="Latest Articles"
        subtitle="Fresh from the blog"
        articles={latestArticles}
        columns={3}
        hasBackground={true}
      />

      {/* 3. Interactive Newsletter Banner */}
      <Newsletter />

      {/* 4. Highlighted Story Spotlights (2 Column Grid) */}
      <ArticleGrid
        title="Collection Spotlights"
        subtitle="Fashion & Style Looks"
        articles={twoColArticles}
        columns={2}
      />

      {/* 5. Beauty Category Horizontal Slider */}
      <CategorySlider
        categoryTitle="Beauty & Skin Care"
        articles={beautyArticles}
      />

      {/* 6. Video Highlights with Interactive Player */}
      <VideoGrid videos={videoArticles} />
    </div>
  );
}
