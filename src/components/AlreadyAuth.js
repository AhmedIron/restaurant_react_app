import { Navigate } from "react-router-dom";

const AlreadyAuth = ({children}) => {

    const accessTokenObj = JSON.parse(localStorage.getItem("login"));
    if(accessTokenObj){
        return <Navigate to="/" />
    }

    return  children;
}

export default AlreadyAuth