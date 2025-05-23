import mdx from "@next/mdx";

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

const nextConfig = {
    pageExtensions: ["ts", "tsx", "md", "mdx"],

    // Add this to log during build
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
};

console.log("Next.js Config Loaded:", nextConfig);
export default withMDX(nextConfig);