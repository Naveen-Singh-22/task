import React from 'react';

const placeholderImages = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7fda65',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
  'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1'
];

const Card = ({ post, onRemove, index }) => (
  <div style={{
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    borderRadius: '12px',
    background: '#fff',
    padding: '18px',
    width: '260px',
    margin: '10px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
    <button
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: 'red',
        fontSize: '22px',
        cursor: 'pointer'
      }}
      onClick={() => onRemove(post.id)}
      aria-label="Remove"
    >
      ×
    </button>
    <div>
      <h4 style={{ margin: '0 0 8px 0', fontWeight: '600', fontSize: '1.1rem' }}>
        {post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title}
      </h4>
      <div style={{ color: '#888', fontSize: '0.95rem', marginBottom: '8px' }}>
        {post.body.length > 40 ? post.body.slice(0, 40) + '...' : post.body}
      </div>
      <div style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '8px' }}>
        Mon, 21 Dec 2020 14:57 GMT
      </div>
      <img
        src={placeholderImages[index % placeholderImages.length]}
        alt="card"
        style={{
          width: '100%',
          height: '90px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
    </div>
  </div>
);

export default Card;