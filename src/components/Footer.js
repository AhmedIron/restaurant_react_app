const Footer = () => {
    return(

    <footer className="foooter" style={{backgroundcolor: '#deded5'}}>
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="mb-3" style={{letterspacing: "2px color: #818963"}}>BEST FOOD</h5>
          <p style={{maxWidth: "350px"}}>
            Authentic FOOD made from original recipes and prepared with fresh 100% Halal ingredients.
          The Original Taste To The International cuisine.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{letterspacing: "2px color: #818963"}}>Our links</h5>
          <ul className="list-unstyled mb-0 links">
            <li className="mb-1">
              <a href="#!" style={{color: "#4f4f4f"}}><img alt="..." src="/icons8-facebook-48.png"></img></a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{color: "#4f4f4f"}}><img alt="..." src="/icons8-whatsapp-48.png"></img></a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{color: "#4f4f4f"}}><img alt="..." src="/icons8-twitter-48.png"></img></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-1" style={{letterspacing: "2px; color: #818963"}}>opening hours</h5>
          <table className="table" style={{color: "#4f4f4f border-color: #666"}}>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
      © 2022 Copyright :
      <a href="https://github.com/AhmedIron"><h4 style={{textDecorationLine: "underLine" , color: "deepskyblue"}}>Ahmed-Khedr</h4></a>
    </div>
  </footer>
  
    )
}

export default Footer