import React from "react";

import { Button } from "reactstrap";
import ViewAllFeatures from "./ViewAllFeatures";

import DeleteFeature from "./DeleteFeature";
import Weather from './Weather';
import NasaPhoto from './NasaPhoto';


export default function Astro(props) {
  return (
    <>
      <div className="astro">

        {/* MAIN CONTAINER */}
        <div className="container">
          <div className="row">

            {/* WEATHER API MODULE */}
              <div className="col"><Weather /></div>

            {/* NASA PHOTO OF THE DAY MODULE */}
              <div className="col"><Button id="nasabutton" onClick={() => props.changeView("nasa-photo")}>Nasa Photo of the Day</Button></div>

            {/* YOUR PHOTOS MODULE */}
              <div className="col"><div className="row"><Button id="picturelog" onClick={() => props.changeView("image-upload")}>YOUR PHOTOS</Button></div></div>
          </div>

          {/* SPACER */}
          <div className="row"><hr /></div>

          {/* SKY FEATURES COMPONENT */}
          <div className="row"><div className="col"><ViewAllFeatures token={props.token} /></div></div>
        </div>
      </div>

      <div>

      </div>
    </>
  );
}
