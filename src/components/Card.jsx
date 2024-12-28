import React from "react";

const Card = ({article, onReadMore }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={article.image}
        alt="News"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {article.description}
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded shadow-sm hover:bg-blue-600 focus:outline-none"
        onClick={onReadMore}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
