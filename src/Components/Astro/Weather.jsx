import React, {useState} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

let icon;

const Weather = (props) => {
    
    const [icon_url, setIcon] = useState('');
    const [descrip, setDescrip] = useState('');
    const [subtitle, setSub] = useState('');
    const [vis, setVis] = useState('');
    const [clouds, setClouds] = useState('');
    
    


    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.7684&lon=-86.1581&exclude=hourly,daily&appid=70d415361464c75295b5f22c9849e8c3&units=imperial'
    
    fetch(url).then((res) => res.json())
    .then((data) => formatWeather(data));

    const formatWeather = (data) => {
         icon = data.current.weather[0].icon;
         setDescrip(data.current.weather[0].main);
         setSub(data.current.feels_like);
         setVis(data.current.visibility);
         setClouds(data.current.clouds);
         
         
         setIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`)
         

       

        
    }


    return (
        
            
            <div id="cardContainer">

                <Card id="cardOutline">
                    <CardText>Current Weather: </CardText>
                    <CardText>
                        {clouds <50 ? <p>Low Cloud Coverage makes for great pictures!</p> : <p>Not ideal circumstances for such a professional as yourself</p>}
                    </CardText>
                   <CardImg  id="weatherImg" src={icon_url} />
                   <CardBody>
                       <CardTitle>
                           Status: {descrip}
                       </CardTitle>
                       <CardSubtitle>
                            Feels Like: {subtitle}°
                       </CardSubtitle>
                        <CardText>
                            Visibility Distance(m): {vis} 
                            <br/>
                            Cloud Percentage: {clouds}%
                        </CardText>
                   </CardBody>
                   </Card>

            </div>
        
    )
}

export default Weather;