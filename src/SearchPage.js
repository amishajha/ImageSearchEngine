import React, { useState } from 'react'
import "./Searchpage.css"
import axios from "axios"
function SearchPage() {

    const [photos,setphoto]=useState("");
    const [clientId,setClientId]=useState("DL3N7lAqfkiiWCGnaO8NjuYWuJMFyPrfIEmopdJynhM");
    const [result,setresult]=useState([]);
    
      function handleChange(event){
        event.preventDefault();
      setphoto(event.target.value);
      }
    
      function handleSubmit(event){
        event.preventDefault();
    console.log(photos);
    const url="https://api.unsplash.com/search/photos?page=1&query="+photos+"&client_id="+clientId
    axios.get(url).then(response=>{
  
      setresult(response.data.results);
    });
      }
    
    return (

      <div className="page">
        <div className="app">
            <div className="input-group">
<input type="text" onChange={handleChange}  className="form-control" placeholder="Search for photos" name="photos" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>
<div className="input-group-append">


</div>
<button  onClick={handleSubmit} className="btn btn-dark btn" type="submit" ><i className="fa fa-search"></i></button>






</div>

<ul>
  <li>
  <div className="image">
{result.map(photo=>(
        
<img src={photo.urls.small}/>
  
      ))}
      </div>
  </li>
  
</ul>
</div>
        
    )
}

export default SearchPage


