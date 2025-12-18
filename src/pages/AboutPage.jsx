import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div>
      <Header 
        title="About DevOps Blog"
        subtitle="Learn More About Us"
        description="Discover our mission and vision for helping teams master modern development operations."
      />
      <div className="about-container">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At DevOps Blog, our mission is to empower development and operations teams with the knowledge and best 
            practices needed to succeed in today's fast-paced software delivery landscape. We believe in making DevOps 
            accessible, practical, and engaging for everyone from beginners to advanced practitioners.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Cover</h2>
          <div className="about-features">
            <div className="feature">
              <h3>CI/CD Pipelines</h3>
              <p>Learn how to build, test, and deploy software efficiently with continuous integration and delivery practices.</p>
            </div>
            <div className="feature">
              <h3>Infrastructure as Code</h3>
              <p>Master IaC tools like Terraform and CloudFormation to manage cloud resources with code and version control.</p>
            </div>
            <div className="feature">
              <h3>Containerization</h3>
              <p>Explore Docker and container orchestration to ensure consistency across your development and production environments.</p>
            </div>
            <div className="feature">
              <h3>Monitoring & Logging</h3>
              <p>Implement observability solutions to track, monitor, and troubleshoot your applications in real-time.</p>
            </div>
            <div className="feature">
              <h3>DevOps Culture</h3>
              <p>Understand the cultural and organizational changes needed to implement DevOps successfully in your teams.</p>
            </div>
            <div className="feature">
              <h3>Best Practices</h3>
              <p>Gain insights from industry experts and proven methodologies for scaling DevOps across organizations.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            <strong>🎯 Practical Expertise:</strong> All our articles are written by experienced DevOps engineers who have 
            solved real-world problems in production environments.
          </p>
          <p>
            <strong>📈 Current & Relevant:</strong> We continuously update our content to reflect the latest trends, tools, 
            and best practices in the DevOps ecosystem.
          </p>
          <p>
            <strong>🤝 Community-Focused:</strong> We believe in learning together. Our community of practitioners shares 
            experiences and helps each other grow.
          </p>
          <p>
            <strong>💡 Beginner-Friendly:</strong> Whether you're just starting your DevOps journey or looking to deepen 
            your expertise, we have content for every skill level.
          </p>
        </div>

        <div className="about-section">
          <h2>Get In Touch</h2>
          <p>
            Have questions, feedback, or article suggestions? We'd love to hear from you! Connect with us on social media 
            or reach out through our contact form. Let's grow the DevOps community together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
