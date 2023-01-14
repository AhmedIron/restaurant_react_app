import { Link } from "react-router-dom"

const Logout = () => {
    function logout (){
        const accessTokenObj = localStorage.clear("login");
        console.log(accessTokenObj);
    }
    

    return(

        <Link style={{ textDecoration: "none"}} to="/login"><button className="btnz" onClick={()=>{
            logout()
        }}>Logout</button></Link>

    )
}

export default Logout