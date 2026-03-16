import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suncoastfit.com";
  const lastModified = new Date();

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/walker-to-runner`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resources/guides`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/videos`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    ...blogEntries,
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
