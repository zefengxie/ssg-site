import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'mock_data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(jsonData);

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }, // `id` 必须是字符串
  }));

  return { paths, fallback: false }; // `fallback: false` 只生成已有的页面
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'mock_data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(jsonData);

  const post = posts.find(p => p.id.toString() === params.id);

  return {
    props: { post },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>作者: {post.author}</p>
      <p>发布日期: {post.date}</p>
      <a href="/">返回首页</a>
    </div>
  );
}
