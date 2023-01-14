import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Down from "./down";
import Button from "react-bootstrap/Button";

const AdminDelete = () => {
  const [personsData, changedData] = useState([]);
  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/api/products", {
        method: "GET",
      })
        .then((data) => data.json())
        .then((persons) => {
          changedData(persons.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Screen Size
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  //   const onsub = async () => {
  //     await fetch(`http://localhost:8000/api/products/${personsData.id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     window.location.reload(true)
  //   };

  return (
    <div>
      {screenSize.dynamicWidth < 768 ? (
        <Container style={{ minWidth: "-webkit-fill-available" }}>
          <Row style={{ marginTop: "15px" }}>
            <div
              style={{
                marginBottom: "-18",
                textAlign: "-webkit-center",
                marginTop: "100px",
              }}
            >
              <p className="title1">DELETE PRODUCTS</p>
            </div>
            <Col sm="12">
              {personsData.length ? (
                personsData.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      style={{ marginTop: "10px", backgroundColor:"black" }}
                      className="d-flex flex-row"
                    >
                      {item.food_image_upload !== null ? (
                        <div style={{ width: "250px", height: "200px" }}>
                          <Card.Img
                            style={{ width: "250px", height: "200px" }}
                            variant="top"
                            src={`http://localhost:8000/${item.food_image_upload}`}
                            // src={item.food_image}
                          />
                        </div>
                      ) : (
                        <div style={{ width: "250px", height: "200px" }}>
                          <Card.Img
                            style={{ width: "250px", height: "200px" }}
                            variant="top"
                            // src={`http://localhost:8000/${item.food_image}`}
                            src={item.food_image_link}
                          />
                        </div>
                      )}
                      <Card.Body style={{ fontSize: "12px" }}>
                        <Card.Title>{item.food_name}</Card.Title>
                        <Card.Text style={{ fontSize: "14px" }}>
                          {item.food_ingredients}
                        </Card.Text>
                        <h3 style={{ fontSize: "18px" }}>
                          Price : {item.price}$
                        </h3>
                        <Button
                          style={{ width: "100%", fontWeight: "bold" }}
                          variant="outline-danger"
                          onClick={async () => {
                            await fetch(
                              `http://localhost:8000/api/products/${item.id}`,
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-type":
                                    "application/json; charset=UTF-8",
                                },
                              }
                            );
                            window.location.reload(true);
                          }}
                        >
                          - Delete
                        </Button>
                        <Button
                          style={{
                            width: "100%",
                            fontWeight: "bold",
                            marginTop: "5px",
                          }}
                          variant="outline-success"
                        >
                          Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })
              ) : (
                <p>nooooooooooooo</p>
              )}
            </Col>
          </Row>
        </Container>
      ) : (





        //stooooop






        <Container className="con">
          <Row lg={12}>
            <div
              style={{
                marginBottom: "-18",
                textAlign: "-webkit-center",
                marginTop: "80px",
              }}
            >
              <p className="title1">DELETE PRODUCTS</p>
            </div>
            {personsData.length ? (
              personsData.map((item) => {
                return (
                  <Col
                    key={item.id}
                    className="cardz"
                    xl={3}
                    lg={4}
                    md={6}
                    sm={12}
                  >
                    <Card
                      style={{
                        backgroundColor:"black",
                        width: "15rem",
                        marginTop: "20px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                      }}
                    >
                      {item.food_image_upload !== null ? (
                        <Card.Img
                          className="cardImage"
                          variant="top"
                          src={`http://localhost:8000/${item.food_image_upload}`}
                          // src={item.food_image}
                        />
                      ) : (
                        <Card.Img
                          className="cardImage"
                          variant="top"
                          // src={`http://localhost:8000/${item.food_image}`}
                          src={item.food_image_link}
                        />
                      )}
                      {/* <Card.Img
                  className="cardImage"
                  variant="top"
                  // src={`http://localhost:8000/${item.food_image}`}
                  src={item.food_image_link}
                  /> */}

                      <Card.Body>
                        <Card.Title>{item.food_name}</Card.Title>
                        <Card.Text>{item.food_ingredients}</Card.Text>
                        <h4 style={{ fontSize: "18px" }}>
                          Price : {item.price}$
                        </h4>
                        <h5 style={{ fontSize: "18px" }}>ID : {item.id}</h5>
                        <Button
                          style={{ width: "100%", fontWeight: "bold" }}
                          variant="outline-danger"
                          onClick={async () => {
                            const accessTokenObj = JSON.parse(localStorage.getItem("login"));
                            console.log(accessTokenObj.token);
                            await fetch(
                              `http://localhost:8000/api/products/${item.id}`,
                              {
                                method: "DELETE",
                                headers: {
                                  
                                  "Content-type":
                                    "application/json; charset=UTF-8",
                                    //send token 18/12/2022 8:00 am
                                    'Authorization':`Bearer ${accessTokenObj.token}`
                                },
                              }
                            );
                            window.location.reload(false);
                            console.log(accessTokenObj.token);
                          }}
                        >
                          - Delete
                        </Button>
                        <Button
                          style={{
                            width: "100%",
                            fontWeight: "bold",
                            marginTop: "5px",
                          }}
                          variant="outline-success"
                        >
                          Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Down />
            )}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default AdminDelete;
