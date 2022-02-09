import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Container from './components/Container';
import NewsList from './components/NewsList';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Error from './components/Error';

import { getNews } from './services/getNews';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams()
  const DEFAULT_SEARCH_QUERY = 'Metaverse';
  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);
      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY
      });
      if(!res){
        setLoading(false);
        setError(false);
        return;
      }
      setLoading(false);
      setArticles(res.articles);
    }
    fetchTechNews();
  }, [id]);
  return (
    <>
      <Navbar/>
      <Container>
        {loading && <Loading/>}
        {error && <Error/>}
        {(!loading && !error && articles.length > 0) && (
          <NewsList articles={articles}/>
        )}
      </Container>
    </>
  );
}

export default App;
