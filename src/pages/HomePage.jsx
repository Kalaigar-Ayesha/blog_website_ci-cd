import React from 'react';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';

const HomePage = () => {
  return (
    <div>
      <Header 
        title="DevOps & CI/CD Blog"
        subtitle="Master Modern Development Operations"
        description="Explore best practices, strategies, and insights into DevOps, CI/CD pipelines, Infrastructure as Code, and containerization technologies."
      />
      <div className="blog-list-container">
        <div className="section-title">
          <h2>Latest Articles</h2>
          <div className="title-underline"></div>
        </div>
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
