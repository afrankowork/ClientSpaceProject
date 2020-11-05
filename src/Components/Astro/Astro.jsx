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
        <div className="container">
        <div className="row">
            <div className="col"><Weather /></div>
            <div className="col">
              <Button id="nasabutton" onClick={() => props.changeView("nasa-photo")}>
                Nasa Photo of the Day
              </Button>
            </div>
            <div className="col">
              <div className="row">
                <Button
                  id="picturelog"
                  onClick={() =>
                    props.changeView("image-upload")
                  }
                >
                Your Photos
              </Button>
              </div>
            </div>
          </div>
          <div className="row"><hr /></div>
          <div className="row">
            <div className="col"><ViewAllFeatures token={props.token} /></div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </>
  );
}
