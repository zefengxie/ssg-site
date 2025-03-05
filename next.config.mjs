/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 让 Next.js 生成静态 HTML
  images: {
    unoptimized: true,  // 避免 <Image> 组件报错
  }
};

export default nextConfig;
