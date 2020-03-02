import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Axios from 'axios';

function App() {
  const [imgBanner, setImgBanner] = useState('');
  const [imgList, setimgList] = useState([]);

  useEffect(() => {
    Axios.defaults.headers.common['Authorization'] = `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    fetchImgList()
    fetchImgBanner()

  }, []);

  const fetchImgList = ( () => {
    Axios.get("https://api.unsplash.com/photos/")
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err);
    })
    .then(data => {
      setimgList(data)
      console.log(data)
    })
  });

  const fetchImgBanner = ( () => {
    Axios.get("https://api.unsplash.com/photos/random")
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err);
    })
    .then(data => {
      setImgBanner(data)
      console.log(data)
    })
  });

  return (
    <div className="App container">
      <header className="App-header">
        <div className = "banner">
      {!imgBanner ? 
        "loading..." 
        : <img src = {imgBanner.urls.regular} alt ={imgBanner.alt_description}/>
      }
      </div>
        <div className = "gallery">
        {!imgList ? 
        "loading..." 
        :
        imgList.map(img => { 
          return <img key = {img.id} src = {img.urls.small} alt = {img.alt_description}/> 
         }) }
         </div>
    
      </header>
    </div>
  );
}

export default App;
