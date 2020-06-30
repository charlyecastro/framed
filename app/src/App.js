import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ImgCard from './components/imgCard.js'

function App() {
  const [imgBanner, setImgBanner] = useState('');
  const [imgList, setimgList] = useState([]);

  useEffect(() => {
    Axios.defaults.headers.common['Authorization'] = `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    fetchImgList()
    fetchImgBanner()

  }, []);

  const fetchImgList = (() => {
    Axios.get("https://api.unsplash.com/photos/")
      .then(res => {
        // console.log(res)
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

  const fetchImgBanner = (() => {
    Axios.get("https://api.unsplash.com/photos/random")
      .then(res => {
        // console.log(res)
        return res.data
      })
      .catch(err => {
        console.log(err);
      })
      .then(data => {
        setImgBanner(data)
        // console.log(data)
      })
  });

  return (
    <div className="App ">
      <header className="App-header">
        <nav className ="">
          <menu>
          <a href ="/">Framed</a>
          <ul>
            <li><a href ="/">about</a></li>
            <li><a href ="/">follow</a ></li>
            <li><a href ="/">contact</a></li>
          </ul>
          </menu>
        </nav>
        <div className="banner" style= {{backgroundImage: (!imgBanner ? "" :`url(${imgBanner.urls.regular})`)}}>
          <div className="overlay">
            <div className = "content container" >
            <h1>The coolest pics framed by the coolest people</h1>
            <div className= "input-group">
            <input type="text" id="img" name="img" placeholder="Search for some pics"/>
            <button type="submit"><FontAwesomeIcon icon={faSearch} size='2x' /></button>
            </div>
            <div className="button-row">
              <button>New</button>
              <button>Popular</button>
              <button>Random</button>
            </div>
            </div>
            
           
          </div>
        </div>
        <div className="gallery container">
          {!imgList ?
            "loading..."
            :
            imgList.map(img => {
              return <ImgCard img = {img.urls.small} key={img.id} alt = {img.alt_description} description = {img.description} username = {img.user.username} likes = {img.likes}/>
            })}
        </div>

      </header>
    </div>
  );
}

export default App;
