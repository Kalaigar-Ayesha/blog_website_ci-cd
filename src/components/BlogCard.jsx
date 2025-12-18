import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  const handleReadMore = (e) => {
    e.stopPropagation();
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div className="blog-card" onClick={handleCardClick}>
      <div className="blog-card-accent" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-description">{blog.description}</p>
        <div className="blog-card-footer">
          <span className="blog-card-category">{blog.category}</span>
          <button className="read-more" onClick={handleReadMore}>
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
