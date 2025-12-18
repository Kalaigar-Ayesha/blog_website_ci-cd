import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { blogs } from '../data/blogs';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <Header title="Article Not Found" subtitle="The article you're looking for doesn't exist." description="" />
        <div className="blog-detail-container">
          <button className="back-button" onClick={() => navigate('/')}>← Back to Articles</button>
        </div>
      </div>
    );
  }

  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div>
      <Header title={blog.title} subtitle={blog.category} description="" />
      <div className="blog-detail-container">
        <button className="back-button-top" onClick={() => navigate('/')}>← Back to Articles</button>
        <div className="detail-content">
          <div className="detail-header">
            <h1 id="detail-title">{blog.title}</h1>
            <div className="detail-meta">
              <p className="reading-time">{readingTime} min read</p>
            </div>
          </div>
          <div className="detail-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
          <button className="back-button" onClick={() => navigate('/')}>← Back to Articles</button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
