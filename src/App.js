import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import NewsList from './components/NewsList';
import './App.css'


function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {

    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=b2b7c60d979c4d02b6039e2760427a94`;

      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    }

    getNews();
  }, [category]);

  return (
    <>
      <Header title='Noticias' />
      <div>
        <Form setCategory={setCategory} />
        <NewsList news={news} />
      </div>
    </>
  );
}

export default App;
