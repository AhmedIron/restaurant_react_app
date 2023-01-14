import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Cart from "./Cart";

const Category = ({ size, warning }) => {
  const [show, setShow] = useState(false);
  const accessTokenObj = JSON.parse(localStorage.getItem("login"));
  return (
    <Row>
      <Col sm="12">
        <div className="btns">
          <button
            className="btnz"
            onClick={() => {
              setShow(!show);
            }}
          >
            <img style={{ width: "30px" }} src="map.png" alt="..." />
          </button>
          <div className={show ? "mapShow" : "mapHide"}>
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3583114404587!2d31.095232015324143!3d29.969130929081064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f26ebc6c1db%3A0x40ed7a862d173c41!2sBarista!5e0!3m2!1sen!2seg!4v1671249219995!5m2!1sen!2seg"
              style={{ border: "0", height: "100%", width: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {accessTokenObj ? (
            <>
              <Link
                className={
                  accessTokenObj.name.user.user_name != "dodo"
                    ? "hideAdmin"
                    : "ShowAdmin"
                }
                style={{ textDecoration: "none" }}
                to="/inputs"
              >
                <button
                  style={{ backgroundColor: "#0079bf", color: "white" }}
                  className="btnz"
                >
                  Admin
                </button>
              </Link>
              <Cart warning={warning} size={size} />
              <Logout />
            </>
          ) : (
            <div>
              <Link style={{ textDecoration: "none" }} to="/signup">
                <button className="btnz">Signup</button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <button className="btnz">login</button>
              </Link>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Category;
