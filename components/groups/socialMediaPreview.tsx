import { LOGO_URL, socialMediaMetaContent } from "@/utils/constants";
import Link from "next/link";

const SocialMediaPreview = () => {
  return (
    <>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={socialMediaMetaContent.title} />
      <meta
        property="og:description"
        content={socialMediaMetaContent.description}
      />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:url" content={socialMediaMetaContent.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={socialMediaMetaContent.title} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialMediaMetaContent.title} />
      <meta
        name="twitter:description"
        content={socialMediaMetaContent.description}
      />
      <meta name="twitter:image" content={LOGO_URL} />
      <meta name="twitter:site" content="@yourTwitterHandle" />
      <link rel="icon" href={LOGO_URL} sizes="any" />
      <Link rel="icon" href={LOGO_URL} type="image/svg+xml" />
      <Link rel="apple-touch-icon" href={LOGO_URL} />
      <Link rel="manifest" href="/site.webmanifest" />
    </>
  );
};

export default SocialMediaPreview;
