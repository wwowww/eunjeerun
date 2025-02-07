import { useState, useEffect } from 'react';
import SlidePage from './components/templates/SlidePage/SlidePage';
import Loading from './components/templates/Loading/Loading';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {isLoading && <Loading />}
      <SlidePage />
    </>
  )
}

export default App
