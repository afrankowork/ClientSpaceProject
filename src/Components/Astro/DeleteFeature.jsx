import React from "react";
import { Button } from "reactstrap";

const DeleteFeature = (props) => {
  const deleteCurrentFeature = () => {
    let token = props.token;
    let id = props.id;
    let url = `http://localhost:3500/feature/${id}`;

    fetch(url, {
      method: "DELETE",
      headers: new Headers({
        Authorization: token,
      }),
    })
      .then((res) => {
        console.log(res, "fetching updated results...");
      })
      .catch(console.log);
  };

  return <Button onClick={deleteCurrentFeature}>Delete</Button>;
};

export default DeleteFeature;
