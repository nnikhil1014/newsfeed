import React from 'react';
import { useLocation } from 'react-router-dom';

const FullPage = () => {
  // Retrieve the article data from the location state
  const location = useLocation();
  const article = location.state;

  // Handle cases where article data is not available
  if (!article) {
    return <div className="min-h-screen p-8 text-center">No article data found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{article.title}</h1>
        <p className="text-xl text-gray-600 mt-2">By {article.author}</p>
      </div>

      {/* Article Image Section */}
      {article.image && (
        <div className="flex justify-center mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Article Content Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <p className="text-gray-700 mb-6">{article.description}</p>
        <div className="text-gray-800 text-lg">
          {article.content}
        </div>
      </div>


      {/* Back to News Button */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          onClick={() => window.history.back()}
        >
          Back to News
        </button>
      </div>
    </div>
  );
};

export default FullPage;
