import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import CreateFeature from "./CreateFeature";

const ViewAllFeatures = (props) => {
  const [featureList, setFeatureList] = useState([]);

  const [lat, setLatitude] = useState("");
  const [lon, setLongitude] = useState("");
  const [adjustedTime, setTime] = useState("");

  useEffect(() => {
    const showPosition = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    var elevation = 50;
    var now = new Date();
    var year = now.getUTCFullYear();
    var month = pad(now.getUTCMonth() + 1);
    var day = pad(now.getUTCDate());
    var hrs = pad(now.getUTCHours());
    var min = pad(now.getUTCMinutes());
    var sec = pad(now.getUTCSeconds());
    var currentTime = `${hrs}:${min}:${sec}`;

    function pad(num) {
      if (num < 10) {
        let n = num.toString();
        return n.padStart(2, "0");
      } else {
        return num;
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

      let url = `https://api.astronomyapi.com/api/v2/bodies/positions?latitude=${lat}&longitude=${lon}&elevation=${elevation}&from_date=${year}-${month}-${day}&to_date=${year}-${month}-${day}&time=${currentTime}`;

      fetch(url, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Basic OTFjZTQzN2YtNTZkMC00NWNjLTkwYTItZWVkMWZhYzI2MjQzOjNjYjU4NTIxNjQ1MmI2ZWJhZmMxN2JkYmY0YjE0OWNhMDQ3YTVlMzU5ZGQ3ZGQyOGQ4ZWY3OTZhYmI5MTEzZWZhOWI4ZjljNGFhMWM4NmE0YjFkNDAzZDc0MGI3Mjc5OTU2ODc1ZDE3MjZiNjA2MzEyODI2YjFjN2JmNzAxNjc2ZTdlMDU3M2ZjNGRiYTllODU0YzlkY2EwYzQ4YWM1Y2MxYTI5ZmM2YWM1OGJiYjZmM2EyNWI4ZGUxYjFjNzRmYTRhNzRhOTYxODQ2NzdiYmYwMzczOTQ4ODU5MDU0ODBl",
        }),
      })
        .then((res) => res.json())
        .then((logData) => {
          setFeatureList(logData.data.table.rows);
          console.log(logData.data.table.rows);
        });
    }
  }, [lat, lon]);

  const inSky = (num) => {
    return num > 10 ? "yes" : "no";
  };

  const featureRetriever = () => {
    return featureList.map((feature, index) => {
      return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>
                {feature.entry.name}
                {adjustedTime}
              </CardTitle>
              <CardText>
                <ul>
                  <li>
                    Declination:{" "}
                    {feature.cells[0].position.equatorial.declination.degrees}
                  </li>
                  <li>
                    Right Ascension:{" "}
                    {feature.cells[0].position.equatorial.rightAscension.hours}
                  </li>
                  <li>
                    Currently in sky:{" "}
                    {inSky(
                      feature.cells[0].position.horizonal.altitude.degrees
                    )}
                  </li>
                </ul>
                <CreateFeature
                  declination={
                    feature.cells[0].position.equatorial.declination.degrees
                  }
                  ascension={
                    feature.cells[0].position.equatorial.rightAscension.hours
                  }
                  distance={feature.cells[0].distance.fromEarth.km}
                  name={feature.entry.name}
                  azi={feature.cells[0].position.horizonal.azimuth.degrees}
                  alt={feature.cells[0].position.horizonal.altitude.degrees}
                  token={props.token}
                />
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

  return (
    <h1>
      View All Features
      {featureRetriever()}
    </h1>
  );
};

export default ViewAllFeatures;

// Extra stuff:
// hard-coded: https://api.astronomyapi.com/api/v2/bodies/positions?latitude=39&longitude=-89&elevation=50&from_date=2020-11-03&to_date=2020-11-03&time=15:07:00

//'Authorization': 'Basic NzUzOTE0ZjAtZTVjZi00YmJmLWI3ZDctMDIyN2U0NDY0NjFjOjI2MjQwYWRlMTk1MTk5ODk5OWMxYjhiYmM3ZWFlMjJkNTc3YjhlZDFmMTY2YTI5ZTM1ODA2MWEzOTM0OWJjZTc1NDhlZmE2NDIzZDI0NWU1OTdlYmM2MTBkMDYwN2IxM2QxYzM0N2I4MjlkMDU1ZDE3YjliNzFkYmVkMGY1MWIwNmY3ZDljYmU4NmE4NTU5M2JiZmFkMjdhNjcxMGEzZWVkZTE4YzU4ZDE3OTIxZTEyNzY2MWM0NDM2NzViNzY2ZGQzNWE0MGQzZDI2OGFlZTJmOGQ3Y2YzYWFmM2M5YmZk'
