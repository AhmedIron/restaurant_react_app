import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar"
import Cards from "../components/Cards";
import Slider from "../components/slider";
import Footer from "../components/Footer";
import Offer from "../components/Offer";
import Onloading from "../components/onLoading";
import Cart from "../components/Cart";
import { useState, useEffect } from "react";

function Home() {

    const [personsData, changedData] = useState([]);
    console.log(personsData);

    const fetchData = async () => {
      try{
        await fetch("http://localhost:8000/api/products", {
          method: "GET",
        })
          .then((data) => data.json())
          .then((persons) => {
            changedData(persons.data);
          });
      }catch (error){
        console.error(error)
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
    
    return (
      <div>
        
      <Onloading />
      <div className="CartFlow">
      <Cart />
      </div>
      

      <div>
        <NavBar />
        <Slider />
        <Offer />
        <Cards data={personsData} />
        <Footer />
      </div>
      </div>
    );
  }
  
  export default Home;