import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        });
    }, 5000); // 5 seconds loading
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, loading, page, setPage }}>
      {children}
    </PostContext.Provider>
  );
};
