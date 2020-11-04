import React from "react";
import { Button } from "reactstrap";
import ViewAllFeatures from './ViewAllFeatures';
// import stars from "./stars";

export default function Astro(props) {
  return (
    <>
      {/* {stars} */}
      <div className="astro">
        <Button onClick={() => props.changeView("nasa-photo")}>
          Nasa Photo of the Day
        </Button>
      </div>
      <ViewAllFeatures token={props.token} />
    </>
  );
}
