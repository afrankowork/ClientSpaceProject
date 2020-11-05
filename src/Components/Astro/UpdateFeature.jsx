import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Input, Label, Modal } from "reactstrap";


const UpdateFeature = (props) => {
     
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(props.name);
  const [type, setType] = useState("planet");
  const [description, setDescription] = useState("");
  const [userNotes, setUserNotes] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const update = (e) => {
     e.preventDefault();
 
     const url = `https://ajaaspaceserver.herokuapp.com/feature/${props.id}`;
     
 
     console.log(props.token);
 
     fetch(url, {
       method: "PUT",
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
 
         },
       }),
     })
       .then((res) => {
        props.getFeatures();
        setIsOpen(false);
       })
       .catch(console.log);
   };
     
     return(
          <>
          <Button color="success" onClick={toggle}>
          Update
          </Button>
      
      <Modal isOpen={isOpen}>
        <Form onSubmit={update} className="modal-form">
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
          <Button color="warning" onClick={toggle}>
            Cancel
          </Button>
          <Button style={{ marginLeft: "1em" }} color="success" type="submit" >
            Update
          </Button>
        </Form>
      </Modal>
          </>
     );
}

export default UpdateFeature;