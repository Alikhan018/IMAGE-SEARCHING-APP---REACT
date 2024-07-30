import { useState } from 'react';
import './App.css';
import getImages from './apis/api';
import SearchBar from './components/SearchBar';
import Images from './components/Images';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async (keyword) => {
    const imageResults = await getImages(keyword);
    setImages(imageResults.results);
  };

  return (
    <div>
      <SearchBar handleSubmit={fetchImages} />
      {
        images.length > 0 &&
        images.map(image => (
          <Images image={image} key={image.id} />
        ))
      }
    </div>
  );
}

export default App;
