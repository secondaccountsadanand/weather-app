import React, { useState } from 'react';
import axios from 'axios';


export default function Home() {
    const [msg, setMsg] = useState('');
    const [serverResponse, setServerResponse] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

 

    let submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.url}`, {
                msg
            });
            setServerResponse(response.data);
            setIsSubmitted(true);
        } catch (e) {
            console.log(e);
        }
    }
 
    return (
    <div class="container">
    <form class="form-horizontal" onSubmit={submit}>
      <h3 class="title">Weather Info...</h3>
      <div class="form-group">
        <input type="text" name="text" class="form-control" placeholder="Enter City Name" onChange={(e) => { setMsg(e.target.value) }}></input>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary"></input>
    </form>
    
    {isSubmitted && (
      <div className="response-container">
        <h1>{serverResponse.name}</h1>
        
        <h1>{ Math.floor(parseInt(serverResponse.main.temp) -272.15)} C</h1>
        {serverResponse.weather[0] && (
            <img src={`https://openweathermap.org/img/wn/${serverResponse.weather[0].icon}.png`} alt="Weather Icon" />
        )}
        <h5>WindSpeed: <b>{serverResponse.wind.speed}</b></h5>
        <h5>Humidity: <b>{serverResponse.main.humidity}</b></h5>
        <p>description: <b>{serverResponse.weather[0].description}</b></p>
      </div>
    )}
    </div> 
     
    );
}