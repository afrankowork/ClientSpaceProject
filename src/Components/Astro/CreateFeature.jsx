import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal } from "reactstrap";

const CreateFeature = (props) => {
  /*  
    ! EXAMPLE
  
    <CreateFeature
      distance={5}
      ascension={37}
      declination={20}
      alt={45}
      azi={271}
      name="Sun"
      token={token}
    />
  
  */

  const [isOpen, setIsOpen] = useState(true);

  const [name, setName] = useState(props.name);
  const [type, setType] = useState("planet");
  const [description, setDescription] = useState("");
  const [userNotes, setUserNotes] = useState("");

  const distance = props.distance;
  const ascension = props.ascension;
  const declination = props.declination;
  const alt = props.alt;
  const azi = props.azi;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const create = (e) => {
    e.preventDefault();
    // const url = "https://ajaaspaceserver.herokuapp.com/feature";
    const url = "http://localhost:3500/feature";

    fetch(url, {
      method: "POST",
      headers: new Headers({
        Authorization: props.token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        feature: {
          feature_name: name,
          feature_type: type,
          description: description,
          user_notes: userNotes,

          distance: distance,
          ascension: ascension,
          declination: declination,
          alt: alt,
          azi: azi,
        },
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);
  };

  return (
    <Modal isOpen={isOpen}>
      <Form onSubmit={create} className="modal-form">
        <h3>Save Feature</h3>
        <FormGroup>
          <Label htmlFor="name">Feature Name</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            value={name}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="type">Type</Label>
          <Input
            onChange={(e) => setType(e.target.value)}
            id="type"
            type="select"
            value={type}
          >
            <option value="planet">Planet</option>
            <option value="constellation">Constellation</option>
            <option value="star">Star</option>
            <option value="other">Other</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            id="description"
            value={description}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="notes">Notes</Label>
          <Input
            type="textarea"
            id="notes"
            value={userNotes}
            onChange={(e) => setUserNotes(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <h4>Other Data</h4>
          <ul className="other-data">
            <li>Distance: {distance}</li>
            <li>Ascension: {ascension}</li>
            <li>Declination: {declination}</li>
            <li>Altitude: {alt}</li>
            <li>Azimuth: {azi}</li>
          </ul>
        </FormGroup>
        <Button color="warning" onClick={toggle}>
          Cancel
        </Button>
        <Button style={{ marginLeft: "1em" }} color="success" type="submit">
          Save
        </Button>
      </Form>
    </Modal>
  );
};

export default CreateFeature;
