import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'mock_data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(jsonData);

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>SSG 文章列表</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`} style={{ color: 'purple' }}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
