import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import DeleteFeature from "./DeleteFeature";
import UpdateFeature from "./UpdateFeature";

const ViewSavedFeatures = (props) => {
  const [features, setFeatures] = useState([]);

  const getFeatures = () => {
    let token = props.token;
    let url = "https://ajaaspaceserver.herokuapp.com/feature";

    fetch(url, {
      headers: new Headers({
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then(setFeatures);
  };

  useEffect(getFeatures, []);

  const update = () => {};

  return features.length > 0 ? (
    <>
      <h1 id="viewHeader">Your Features</h1>
      <div className="saveFeatureContainer">
        {features.map((feature) => {
          return (
            <div className="all-features">
              <Card id="card-style">
                <CardBody>
                  <CardTitle id="card-title-style">
                    {feature.feature_name}
                  </CardTitle>
                  <hr />
                  <CardText id="card-text-style">
                    <ul>
                      <li>Type: {feature.feature_type}</li>
                      {feature.description ? (
                        <li>Description: {feature.description}</li>
                      ) : null}
                      {feature.user_notes ? (
                        <li>Notes: {feature.user_notes}</li>
                      ) : null}
                    </ul>
                    <DeleteFeature
                      getFeatures={getFeatures}
                      token={props.token}
                      id={feature.id}
                    />
                    <UpdateFeature
                      name={feature.feature_name}
                      description={feature.description}
                      notes={feature.user_notes}
                      type={feature.feature_type}
                      getFeatures={getFeatures}
                      token={props.token}
                      id={feature.id}
                    />
                  </CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <div className="saveFeatureContainer">
      <h1 className="no-features">nothing saved</h1>
    </div>
  );
};

export default ViewSavedFeatures;

{
  /* <DeleteFeature getFeatures={getFeatures} token={props.token} id={feature.id} />; */
}
