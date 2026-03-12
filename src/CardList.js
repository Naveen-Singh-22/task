import React, { useContext } from 'react';
import { PostContext } from './PostContext';
import Card from './Card';

const CARDS_PER_PAGE = 6;

const CardList = () => {
  const { posts, setPosts, loading, page, setPage } = useContext(PostContext);

  
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const currentCards = posts.slice(startIdx, startIdx + CARDS_PER_PAGE);
  const totalPages = Math.ceil(posts.length / CARDS_PER_PAGE);

  const handleRemove = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
    // If current page has less than 6 cards, try to fill from next page
    if (currentCards.length < CARDS_PER_PAGE && startIdx + CARDS_PER_PAGE < newPosts.length) {
      setPage(page);
    }
  };

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100vw', height: '100vh',
        background: '#f5f8fa',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '2rem', color: '#888', zIndex: 1000
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        minHeight: '320px'
      }}>
        {currentCards.map((post, idx) => (
          <Card key={post.id} post={post} onRemove={handleRemove} index={idx} />
        ))}
      </div>
      <div style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            border: 'none',
            background: '#eaeaea',
            fontWeight: 'bold',
            cursor: page === 1 ? 'not-allowed' : 'pointer'
          }}
        >&lt;</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            style={{
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              border: 'none',
              background: page === idx + 1 ? '#b3d4fc' : '#eaeaea',
              fontWeight: page === idx + 1 ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            border: 'none',
            background: '#eaeaea',
            fontWeight: 'bold',
            cursor: page === totalPages ? 'not-allowed' : 'pointer'
          }}
        >&gt;</button>
      </div>
    </div>
  );
};

export default CardList;