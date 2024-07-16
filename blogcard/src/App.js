import React from 'react';
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

const blogData = [
  {
    "title": "Learning to Code",
    "subtitle": "Opening a door to the future",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mattis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin semper nisi, vestibulum egestas mauris malesuada ac. Quisque ac aliquam mauris, at porttitor neque. Sed sit amet laoreet mauris. Aliquam laoreet interdum ante vitae rutrum.",
    "imageUrl": "/images_discussion/blak1.jpg",
    "date": "Jan 1, 2019"
  },
  {
    "title": "Mastering the Language",
    "subtitle": "Java is not the same as JavaScript",
    "description": "Phasellus faucibus facilisis sapien, sed interdum sapien placerat in. Aenean magna sapien, condimentum ut mattis ac, congue tempor eros. Integer vel sem a diam pretium pulvinar. Quisque diam erat, consequat at nunc nec, luctus hendrerit ex. Maecenas egestas libero felis, ac interdum ante gravida vitae. Donec efficitur lacus placerat, porttitor enim eu, mattis turpis. Etiam sed mollis nunc.",
    "imageUrl": "/images_discussion/Flare.jpg",
    "date": "Jan 1, 2019",
    "alt": true
  },
  {
    "title": "Learning to Code",
    "subtitle": "Opening a door to the future",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mattis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin semper nisi, vestibulum egestas mauris malesuada ac. Quisque ac aliquam mauris, at porttitor neque. Sed sit amet laoreet mauris. Aliquam laoreet interdum ante vitae rutrum.",
    "imageUrl": "/images_discussion/planet.jpg",
    "date": "Jan 1, 2019"
  },
  {
    "title": "Mastering the Language",
    "subtitle": "Java is not the same as JavaScript",
    "description": "Phasellus faucibus facilisis sapien, sed interdum sapien placerat in. Aenean magna sapien, condimentum ut mattis ac, congue tempor eros. Integer vel sem a diam pretium pulvinar. Quisque diam erat, consequat at nunc nec, luctus hendrerit ex. Maecenas egestas libero felis, ac interdum ante gravida vitae. Donec efficitur lacus placerat, porttitor enim eu, mattis turpis. Etiam sed mollis nunc.",
    "imageUrl": "/images_discussion/Meteor.webp",
    "date": "Jan 1, 2019",
    "alt": true
  }
];

const App = () => {
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
