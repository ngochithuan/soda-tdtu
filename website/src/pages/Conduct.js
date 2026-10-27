import { useEffect, useState } from 'react';

import PostCard from '../components/PostCard';

function Conduct() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/avalible_posts.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        // Newest first
        const sorted = [...data].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setPosts(sorted);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Không tải được bài viết ({error}).</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </div>
  );
}

export default Conduct;
