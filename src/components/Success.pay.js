import { Container, Alert } from "react-bootstrap"
import NavBar from "./Navbar"
import { useState, useEffect } from "react"


const SuccessPay = () => {

    const [onOff, setOnOff] = useState(false)
    const [onOff1, setOnOff1] = useState(false)
    const [onOff2, setOnOff2] = useState(false)


    useEffect(() => {

        setTimeout(() => {
            setOnOff(true)
        }, 2000);

        setTimeout(() => {
            setOnOff1(true)
        }, 4000);

        setTimeout(() => {
            setOnOff2(true)
        }, 6000);

    }, [])

    return(
        <>
        <NavBar />
        <Container style={{textAlign:"center", height:"100vh", marginTop:"200px"}}>
            <Alert style={{textAlign:"center", marginTop:"10vh" , backgroundColor:"rgb(39 159 39)", color:"whitesmoke"}} variant="success">
                <Alert.Heading >Thanks For Your buying!!!!</Alert.Heading>
            </Alert>
                {/* <img src="delivery.jpg" alt="..." /> */}

                <div className="MainSteps">
                <div className="successCard">
                    <div className="steps">
                        {
                            onOff ? (<div style={{fontSize:"50px", backgroundColor:"rgb(39, 33, 33)"}}>&#10004;</div>) : (<></>)
                        }
                    </div>  
                    <img className="successLogo" src="cooking.jpg" alt="" />         
                </div>   

                    <div className="successCard">
                    <div className="steps">
                        {
                            onOff1 ? (<div style={{fontSize:"50px", backgroundColor:"rgb(39, 33, 33)"}}>&#10004;</div>) : (<></>)
                        }
                    </div>  
                    <img className="successLogo" src="cooking1.jpg" alt="" />         
                </div>   

                <div className="successCard">
                    <div className="steps">
                        {
                            onOff2 ? (<div style={{fontSize:"50px", backgroundColor:"rgb(39, 33, 33)"}}>&#10004;</div>) : (<></>)
                        }
                    </div>  
                    <img className="successLogo" src="cooking2.png" alt="" />         
                </div>   
                            
                </div>

        </Container>
        </>
    )
}

export default SuccessPay