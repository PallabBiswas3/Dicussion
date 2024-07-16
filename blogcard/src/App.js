import React, { useEffect, useState } from 'react';
import './App.css';

const BlogCard = ({ title, description, imageUrl, date, alt }) => (
  <div className={`blog-card ${alt ? 'alt' : ''}`}>
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imageUrl})` }}></div>
    </div>
    <div className="description">
      <span className='details'>
        <h1>{title}</h1>
        <p>{description}</p>
      </span>
      <p className="read-more">
        <span className='date'>Date: {date}</span>
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
);

const App = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('/blogData.json')
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error('Error fetching the blog data:', error));
  }, []);

  return (
    <div className="container">
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          subtitle={blog.subtitle}
          description={blog.description}
          imageUrl={blog.imageUrl}
          date={blog.date}
          alt={blog.alt}
        />
      ))}
    </div>
  );
};

export default App;
