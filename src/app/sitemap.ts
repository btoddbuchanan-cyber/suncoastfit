import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suncoastfit.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/pilates`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/personal-training`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/walker-to-runner`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
