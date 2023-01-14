import { Navigate } from "react-router-dom";

const AlreadyAdmin = ({children}) => {

    const accessTokenObj = JSON.parse(localStorage.getItem("login"));

    if(accessTokenObj.name.user.user_name != "dodo"){
        return <Navigate to="/" />
    }
    return  children;
}

export default AlreadyAdmin