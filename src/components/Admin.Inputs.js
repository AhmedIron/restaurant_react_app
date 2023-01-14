import NavBar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import * as yup from "yup";

const AdminInputs = () => {
  const [food_image_link, setFood_image_link] = useState();
  const [food_ingredients, setFood_ingredients] = useState();
  const [food_name, setFood_name] = useState();
  const [price, setPrice] = useState();
  const [food_image, setFood_image] = useState();
  const [choose, set_choose] = useState(false);
  const [choosz, set_choosz] = useState(false);
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [thired, setthired] = useState(false);


  const onSubmiting = async (e) => {
    const userSchema = yup.object().shape({
      food_name: yup.string().required("required"),

      food_ingredients: yup.string().required("required"),

      price: yup.number().required("required"),
    });

    const creatUser = {
      food_name: food_name,
      food_ingredients: food_ingredients,
      price: price,
      food_image: food_image,
      food_image_link: food_image_link,
    };

    console.log(creatUser);

    const isValid = await userSchema.isValid(creatUser);

    e.preventDefault();

    
    if (isValid) {
      const data = new FormData();
      data.set("food_image_link", food_image_link);
      data.set("food_name", food_name);
      data.set("food_ingredients", food_ingredients);
      data.set("price", price);
      data.append("food_image", food_image);
      await axios({
        method: "post",
        url: "http://localhost:8000/api/products",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      window.location.reload(true);
    } else {
      setthired(true);
    }
  };
  return (
    <>
      <NavBar />

      <Container style={{ minHeight: "40vh" }}>
        <div style={{ marginTop: "211px" }}>
          <div style={{ marginBottom: "15px", textAlign: "-webkit-center" }}>
            <p className="title1">ADD Products</p>
          </div>
          <form onSubmit={onSubmiting}>
            <InputGroup size="lg">
              <InputGroup.Text
                style={{ width: "150px", backgroundColor:"#0e699f", color:"white", fontSize:"smaller" }}
                id="inputGroup-sizing-lg"
                name="food_name"
              >
                Food-Name
              </InputGroup.Text>
              <Form.Control
                style={{ border: "2px solid rgb(25, 135, 84)", backgroundColor:"black", color:"white", fontSize:"smaller" }}
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="food_name"
                onChange={(e) => {
                  setFood_name(e.target.value);
                  setfirst(e.target.value);
                }}
              />
            </InputGroup>

            <label style={{fontSize:"smaller"}} className={first <= 0 ? "showreq" : "hidereq"}>
              Required 1 or more letters
            </label>

            <InputGroup size="lg" style={{ marginTop: "20px" }}>
              <InputGroup.Text
                style={{ width: "150px", backgroundColor:"#0e699f", color:"white", fontSize:"smaller" }}
                id="inputGroup-sizing-lg"
              >
                Food_Ingredients
              </InputGroup.Text>
              <Form.Control
                style={{ border: "2px solid rgb(25, 135, 84)", backgroundColor:"black", color:"white", fontSize:"smaller" }}
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="food_ingredients"
                onChange={(e) => {
                  setFood_ingredients(e.target.value);
                  setSecond(e.target.value);
                }}
              />
            </InputGroup>
            <label style={{fontSize:"smaller"}} className={second <= 0 ? "showreq" : "hidereq"}>
              Required 1 or more letters
            </label>

            <InputGroup size="lg" style={{ marginTop: "20px" }}>
              <InputGroup.Text
                style={{ width: "150px", backgroundColor:"#0e699f", color:"white", fontSize:"smaller" }}
                id="inputGroup-sizing-lg"
              >
                Food-Price $
              </InputGroup.Text>
              <Form.Control
                style={{ border: "2px solid rgb(25, 135, 84)", backgroundColor:"black", color:"white", fontSize:"smaller" }}
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </InputGroup>
            <label style={{fontSize:"smaller"}} className={thired ? "showreq" : "hidereq"}>
              Required Only Numbers
            </label>

            <div className="upLoadImage">
              <Button
                style={{
                  border: "2px solid rgb(25, 135, 84)",
                  fontSize: "30px",
                  color: "rgb(148 216 255)",
                  fontSize:"20px"
                }}
                className="upLoad"
                variant="outline-primary"
                onClick={() => {
                  set_choose(!choose);
                }}
              >
                LINK-IMAGE
              </Button>
              <Button
                style={{
                  border: "2px solid rgb(25, 135, 84)",
                  fontSize: "30px",
                  color: "rgb(148 216 255)",
                  fontSize:"20px"
                }}
                className="upLoad"
                variant="outline-primary"
                onClick={() => {
                  set_choosz(!choosz);
                }}
              >
                UPLOAD-IMAGE
              </Button>
            </div>

            <div className={choosz ? "linkShow" : "linkHide"}>
              <InputGroup
                name="food_image"
                size="lg"
                style={{ marginTop: "20px" }}
              >
                <InputGroup.Text
                  style={{ width: "150px", backgroundColor:"rgb(14, 105, 159)", color:"white", fontSize:"smaller" }}
                  id="inputGroup-sizing-lg"
                  name="food_image_upload"
                >
                  Food_Image
                </InputGroup.Text>
                <Form.Control
                  style={{ border: "2px solid green", fontSize:"smaller" }}
                  aria-label="smaller"
                  aria-describedby="inputGroup-sizing-sm"
                  type="file"
                  name="food_image_upload"
                  onChange={(e) => {
                    setFood_image(e.target.files[0]);
                  }}
                />
              </InputGroup>
            </div>

            <div className={choose ? "linkShow" : "linkHide"}>
              <InputGroup
                name="food_image_link"
                size="lg"
                style={{ marginTop: "20px", fontSize:"smaller" }}
              >
                <InputGroup.Text
                  style={{ width: "150px", backgroundColor:"rgb(14, 105, 159)", color:"white", fontSize:"small" }}
                  id="inputGroup-sizing-lg"
                  className="linkHide"
                >
                  Food_Image_link
                </InputGroup.Text>
                <Form.Control
                  className="linkHide"
                  style={{ border: "2px solid green", color:"white", fontSize:"smaller" }}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="food_image_link"
                  onChange={(e) => {
                    setFood_image_link(e.target.value);
                  }}
                />
              </InputGroup>
            </div>

            <input style={{ color: "white" }} type="submit" className="sub" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default AdminInputs;
