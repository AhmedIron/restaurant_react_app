import { Container, Col, Row, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const Cards = ({ data }) => {

  
  const cart = useContext(CartContext)
  console.log(cart.items);

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

  const [searchTerm, setSearchTerm] = useState("");

  

  return (
    <div>
      {screenSize.dynamicWidth < 768 ? (
        <Container style={{ minWidth: "-webkit-fill-available" }}>
          <Row style={{ marginTop: "15px", border:"black" }}>
            <div style={{ marginBottom: "-18", textAlign: "-webkit-center" }}>
              <p className="title1">ALL MEALS</p>
            </div>
            <Col sm="12">
              <Form.Control
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                type="search"
                placeholder="Search ... "
                className="me-2 inputSearch border-danger"
                style={{ zIndex: "5", marginTop: "10px", backgroundColor:"black", color:"white" }}
              />
              {data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.food_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item, key) => {
                  const productQuantity = cart.getProductQuantity(item.id)
                  return (
                    <Card
                      key={key}
                      style={{ marginTop: "10px", border:"black", backgroundColor:"rgb(33, 28, 28)" }}
                      className="d-flex flex-row"
                    >
                      {item.food_image_upload !== null ? (
                        <div style={{ width: "200px", height: "150px", borderRadius:"15px" }}>
                          <Card.Img
                            style={{ width: "200px", height: "150px", borderRadius:"15px" }}
                            variant="top"
                            src={`http://localhost:8000/${item.food_image_upload}`}
                          />
                        </div>
                      ) : (
                        <div style={{ width: "200px", height: "150px", borderRadius:"15px" }}>
                          <Card.Img
                            style={{ width: "200px", height: "150px", borderRadius:"15px" }}
                            variant="top"
                            src={item.food_image_link}
                          />
                        </div>
                      )}
                      <Card.Body style={{ fontSize: "6px" , backgroundColor:"rgb(33, 28, 28)" }}>
                        <Card.Title>{item.food_name}</Card.Title>
                        <Card.Text style={{ fontSize: "10px" }}>
                          {item.food_ingredients}
                        </Card.Text>
                        <h3 style={{ fontSize: "12px" }}>
                          Price : {item.price}$
                        </h3>


                        {
                          productQuantity > 0 ?
                          <>
                          <Form as={Row}>
                            <Form.Label column="true" sd="6" style={{fontSize:"13px"}}> In Cart : {productQuantity} </Form.Label>
                            <Col sm="6">
                              <Button sm="6" onClick={() => cart.addOneToCart(item.id)} style={{backgroundColor:"#3fca00", borderStyle:"hidden", color:"black", width:"35px", marginRight:"3px"}}>+</Button>
                              <Button sm="6" onClick={() => cart.removeOneFromCart(item.id)} style={{backgroundColor:"whiteSmoke", borderStyle:"hidden", color:"black", width:"35px"}}>-</Button>
                            </Col>
                          </Form>
                          <Button variant="danger" onClick={() => cart.deleteFromCart(item.id)} className="my-2">Remove All</Button>
                          </>
                          :
                          <Button
                          style={{ width: "100%", fontWeight: "bold" }}
                          variant="outline-danger"
                          onClick={() => 
                            cart.addOneToCart(item.id)
                          }
                        >
                          + ADD TO CART
                        </Button>
                        }
                      </Card.Body>
                    </Card>
                  );
                })}
            </Col>
          </Row>
        </Container>
      ) : (
        //stoooooppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
        <Container className="con">
          <Row lg={12}>
            <div style={{ marginBottom: "-18", textAlign: "-webkit-center" }}>
            {/* <div className="line"></div> */}
              <p className="title1">ALL MEALS</p>
            </div>
            <Form.Control
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              type="search"
              placeholder="Search ... "
              className="me-2 inputSearch border-danger"
              style={{ zIndex: "5", marginTop: "10px", backgroundColor:"black", color:"white" }}
            />
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.food_name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                const productQuantity = cart.getProductQuantity(item.id)

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
                        backgroundColor:"#211c1c",
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
                        />
                      ) : (
                        <Card.Img
                          className="cardImage"
                          variant="top"
                          src={item.food_image_link}
                        />
                      )}
                      <Card.Body>
                        <Card.Title>{item.food_name}</Card.Title>
                        <Card.Text>{item.food_ingredients}</Card.Text>
                        <h4 style={{ fontSize: "18px" }}>
                          Price : {item.price}$
                        </h4>


                        {
                          productQuantity > 0 ?
                          <>
                          <Form as={Row}>
                            <Form.Label column="true" sd="6" > In Cart : {productQuantity} </Form.Label>
                            <Col sm="6">
                              <Button sm="6" onClick={() => cart.addOneToCart(item.id)} style={{backgroundColor:"#3fca00", borderStyle:"hidden", color:"black", width:"35px", marginRight:"3px"}}>+</Button>
                              <Button sm="6" onClick={() => cart.removeOneFromCart(item.id)} style={{backgroundColor:"whiteSmoke", borderStyle:"hidden", color:"black", width:"35px"}}>-</Button>
                            </Col>
                          </Form>
                          <Button variant="danger" onClick={() => cart.deleteFromCart(item.id)} className="my-2">Remove All</Button>
                          </>
                          :
                          <Button
                          style={{ width: "100%", fontWeight: "bold" }}
                          variant="outline-danger"
                          onClick={() => 
                            cart.addOneToCart(item.id)
                          }
                        >
                          + ADD TO CART
                        </Button>
                        }
                        
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Cards;
