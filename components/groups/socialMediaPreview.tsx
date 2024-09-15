import { LOGO_URL, socialMediaMetaContent } from "@/utils/constants";

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
    </>
  );
};

export default SocialMediaPreview;
