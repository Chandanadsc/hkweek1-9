import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ x: window.innerWidth, y: window.innerHeight });

  const handleMouseMove = () => {
    setWindowSize({ x: window.innerWidth, y:  window.innerHeight});
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

function App() {
  const windowSize = useWindowSize();

  return (
    <>
      Window dimensions: {windowSize.x} {windowSize.y}
    </>
  )
}

export default App