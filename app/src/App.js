import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Axios from 'axios';

function App() {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    Axios.defaults.headers.common['Authorization'] = `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    Axios.get("https://api.unsplash.com/photos/")
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => {
        console.log(err);
      })
      .then(data => {
        setImgData(data)
        console.log(data)
      })

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!imgData ? 
        "loading..." 
        :
        imgData.map(img => { 
          return <img id = {img.id} src = {img.urls.small} /> 
         }) }
         
    
      </header>
    </div>
  );
}

export default App;
