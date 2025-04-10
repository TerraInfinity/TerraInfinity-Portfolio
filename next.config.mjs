import mdx from "@next/mdx";

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

const nextConfig = {
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    output: 'export',
    images: {
        unoptimized: true, // Disable image optimization for static exports
    },
    // Add this to log during build
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
};

console.log("Next.js Config Loaded:", nextConfig);
export default withMDX(nextConfig);