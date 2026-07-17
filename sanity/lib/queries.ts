import { groq } from 'next-sanity';

export const newsQuery = groq`*[_type == "news"] | order(date desc) {
  _id,
  title,
  summary,
  category,
  date,
  "imageUrl": image.asset->url
}`;

export const communitiesQuery = groq`*[_type == "community"] | order(_createdAt asc) {
  _id,
  name,
  description,
  meetings,
  icon
}`;

export const retreatQuery = groq`*[_type == "retreat"] | order(_updatedAt desc)[0] {
  _id,
  name,
  open,
  targetDate,
  formsLink,
  dateDescription,
  locationDescription,
  minAge,
  maxAge
}`;

export const socialLinksQuery = groq`*[_type == "social"] | order(_createdAt asc) {
  _id,
  platform,
  url,
  title,
  subtitle
}`;

export const saintsQuery = groq`*[_type == "saint"] | order(_createdAt asc) {
  _id,
  name,
  title,
  shortDescription,
  fullBiography,
  connectionToCharism,
  "imageUrl": image.asset->url
}`;
