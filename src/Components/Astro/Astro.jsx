import React from "react";
import { Button } from 'reactstrap';
//import stars from "./stars";


export default function Astro(props) {
  return (
    <>
    <div className="astro">
      <Button id="nasabutton" onClick={() => props.changeView('nasa-photo')}>Nasa Photo of the Day</Button>
    </div>
    <div>
      <Button id="picturelog" onClick={() => props.changeView('output', 'imageTitle', 'progress-bar')}>Your Photos</Button>
    </div>
    </>
  );
}



