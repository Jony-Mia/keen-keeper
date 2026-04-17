/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'www.gtechme.com',
        port: '',
        pathname: '/wp-content/uploads/2025/05/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};
// https:////wp-content/uploads/2025/05/Soft-404-Errors-What-They-Are-Why-They-Hurt-SEO-and-How-to-Fix-Them-image.jpg
export default nextConfig;
