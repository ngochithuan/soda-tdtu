import { useState } from 'react';

import './PostCard.css';

const PREVIEW_LENGTH = 400;

const dateFormatter = new Intl.DateTimeFormat('vi-VN', {
  dateStyle: 'long',
  timeStyle: 'short',
  timeZone: 'Asia/Ho_Chi_Minh',
});

function formatRelativeTime(date) {
  const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
  if (minutes < 1) return 'Vừa xong';
  if (minutes < 60) return `${minutes} phút`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} giờ`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} ngày`;
  return dateFormatter.format(date);
}

function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  const date = new Date(post.timestamp);
  const name = post.user?.name || 'Không rõ';
  const text = post.text || '';
  const isLong = text.length > PREVIEW_LENGTH;
  const shownText = isLong && !expanded ? `${text.slice(0, PREVIEW_LENGTH)}…` : text;

  return (
    <article className="post-card">
      <header className="post-header">
        <div className="post-avatar">{name.charAt(0)}</div>
        <div>
          <a className="post-author" href={post.user?.profileUrl} target="_blank" rel="noreferrer">
            {name}
          </a>
          <a className="post-time" href={post.url} target="_blank" rel="noreferrer" title={dateFormatter.format(date)}>
            {formatRelativeTime(date)}
          </a>
        </div>
      </header>

      {text ? (
        <p className="post-text">
          {shownText}
          {isLong && (
            <button className="post-toggle" onClick={() => setExpanded(!expanded)}>
              {expanded ? ' Ẩn bớt' : ' Xem thêm'}
            </button>
          )}
        </p>
      ) : (
        <p className="post-text post-empty">Bài viết không có nội dung chữ.</p>
      )}

      <footer className="post-footer">
        <a href={post.url} target="_blank" rel="noreferrer">Xem trên Facebook</a>
      </footer>
    </article>
  );
}

export default PostCard;
