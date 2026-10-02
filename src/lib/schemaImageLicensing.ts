/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://r-789game.com.pk";

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: "R789",
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: "© R789. All rights reserved.",
  creditText: "R789",
} as const;
