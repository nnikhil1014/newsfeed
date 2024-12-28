import { useState, useEffect } from 'react'
import './App.css'
import  Card  from './components/Card.jsx'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  const [newsfeed, setNewsfeed] = useState([]);

  const fetchnews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`)
    const data = await response.json();
    console.log(data)

    return data.articles.slice(0,4).map((article) => ({
      author: article.author,
      title: article.title,
      description: article.description,
      content: article.content,
      image: article.urlToImage,
  }))
  // console.log(newdata)

  }

  useEffect(() => {
    const loadNews = async() => {
      const article = await fetchnews();
      setNewsfeed(article);
    };
    loadNews();
  }, [])

  const readMoreClick = (article) => {
    navigate(`/article/${article.author}`, {state: {...article}});
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading Section */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <span className="material-icons text-blue-500 mr-2"></span>
          Trending News
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Use the Card component 4 times */}
        {newsfeed.map((article, index) => (
          <Card 
          key={index}
          article={article} 
          onReadMore={() => readMoreClick(article)} // Pass the function
        //   author={article.author} 
        //   title={article.title} 
        //   description={article.description} 
        //   content={article.content} 
        //   image={article.image}
          />
        ))}
      </div>
    </div>
  );

}

export default HomePage
