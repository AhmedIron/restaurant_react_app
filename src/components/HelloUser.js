
const HelloUser = () => {
    const accessTokenObj = JSON.parse(localStorage.getItem("login"));

    

    return(

        <div className="helloUser">

        <p style={{margin: "0px", color:"rgb(128 138 127)"}} className={accessTokenObj ? "showWelcome":"hideWelcome"}> 
      {accessTokenObj ? (
        <span>Welcome : {accessTokenObj.name.user.user_name}</span>
      ) : (
        <span></span>
      )}      
      </p>

      </div>

    )
}

export default HelloUser