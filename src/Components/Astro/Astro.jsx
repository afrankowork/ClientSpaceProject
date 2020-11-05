import React from "react";

import {
  Button
} from "reactstrap";
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
              <div className="col"><Button id="nasabutton" onClick={() => props.changeView("nasa-photo")}><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="space-shuttle" class="svg-inline--fa fa-space-shuttle fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M448 168C208 168 240 32 96.003 32H80c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v144c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64h16.003C240 480 208 344 448 344c106.039 0 192-39.399 192-88s-85.961-88-192-88zm-152 0H166.495c-11.973-5.241-25.014-8-38.495-8V67.183C187.971 80.409 219.668 148.917 296 168zM127.046 320H64v-48h48c17.673 0 32-7.163 32-16s-14.327-16-32-16H64v-48h64c35.629 0 64.458 29.114 63.994 64.85-.456 35.171-29.775 63.15-64.948 63.15zM64 96c0-19.851 10.359-32 16-32h16v96H64V96zm0 320v-64h32v96H80c-5.641 0-16-12.149-16-32zm64 28.817v-92.829c13.196-.126 26.009-2.869 37.816-7.989H296c-76.327 19.083-108.024 87.591-168 100.818zM448 312H205.781c24.716-33.856 23.823-79.277.215-112H448c41.469 0 88 0 128 24v64c-40 24-86.45 24-128 24zm40.014-16c-4.426 0-8.014-3.582-8.014-8v-64c0-4.418 3.588-8 8.014-8 31.998 0 31.965 80 0 80z"></path></svg><br/>Nasa Photo of the Day </Button></div>

            {/* YOUR PHOTOS MODULE */}
              <div className="col"><div className="row"><Button id="picturelog" onClick={() => props.changeView("image-upload")}><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="image-polaroid" class="svg-inline--fa fa-image-polaroid fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 400H48v-64h352zm0-112h-16l-97.07-121c-7.46-9.31-22.4-9.31-29.86 0l-63.38 79-33.05-45.78c-7.92-11-25.36-11-33.28 0L64 320H48V80h352zM144 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32z"></path></svg><br/>YOUR PHOTOS</Button></div></div>
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
