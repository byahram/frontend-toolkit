const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID || "asdfasdfasdf";
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  const name = "FrontKit.";
  const copyright = "Ahram Kim";
  const defaultTitle = "Frontend Toolkit";
  const defaultDescription =
    "A collection of resources for frontend developers, covering UI components, animations, performance optimization, and development tips.";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
