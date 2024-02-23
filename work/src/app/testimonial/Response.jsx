
"use client"
import React, { useState } from 'react';
import './styles.css'; // Import CSS file for styling

const Response= () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    review: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name.trim() !== '' && formData.review.trim() !== '') {
      setReviews([...reviews, formData]);
      setFormData({
        name: '',
        image: '',
        review: ''
      });
    }
  };

  return (
    <div className="review-container">
      <h1>Customer Reviews</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
          <label htmlFor="image">Your Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {formData.image && (
            <img className="preview-image" src={formData.image} alt="Preview" />
          )}
          <label htmlFor="review">Your Review:</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleInputChange}
            placeholder="Write your review here..."
            rows={5}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="reviews-list">
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <div className="review">
                  {review.image && <img src={review.image} alt={review.name} />}
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Response;
