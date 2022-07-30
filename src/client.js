import sanityClient from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";



export const client = sanityClient({
  projectId: import.meta.env.VITE_REACT_APP__SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-06-21",
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP__SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}