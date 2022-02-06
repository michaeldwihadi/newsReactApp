import { useState, useEffect } from 'react'

import Container from './components/Container'
import NewsList from './components/NewsList'
import Navbar from './components/Navbar'
import { getNews } from './services/getNews'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true)
      const res = await getNews()
      console.log(res);
      if(!res){
        setLoading(false)
        setError(false)
        return
      }
      setLoading(false)
      setArticles(res.articles)
    }
    fetchTechNews();
  }, [])
  return (
    <>
      <Navbar/>
      <Container>
        <NewsList articles={articles}/>
      </Container>
    </>
  );
}

export default App;
