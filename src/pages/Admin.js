import AdminInputs from "../components/Admin.Inputs"
import AdminDelete from "../components/Admin.Delete";
import Button from 'react-bootstrap/Button';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Onloading from "../components/onLoading";


function Admin() {
    const [AdminDelet, setAdminDelet] = useState(false)
    const [AdminAdd, setAdminAdd] = useState(false)

  return (
    <div>
      <Onloading />
      <NavBar />

      <Container>
        <div className="AdminButtons">
      <Button style={{marginTop: "200px", width:"30%", height:"120px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}} variant="success"

      onClick={()=>{
        setAdminAdd(!AdminAdd)
      }}>ADD Products</Button>

      <Button style={{marginTop: "200px", width:"30%", height:"120px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}} variant="danger" 
        onClick={()=>{
        setAdminDelet(!AdminDelet)
      }}>Delete Products</Button>
      </div>
      </Container>

      
      <div className={AdminAdd ? "InputShow" : "InputHide"}>
      <AdminInputs />
      </div>

      <div className={AdminDelet ? "DeleteShow" : "DeleteHide"}>
      <AdminDelete />
      </div>

      <Footer />
    </div>
  );
}

export default Admin