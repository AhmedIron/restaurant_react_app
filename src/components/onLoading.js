import CircleLoader from "react-spinners/CircleLoader";
import { useState, useEffect } from "react";


const Onloading = ()=> {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 1000);
      }, []);
    return(
        <div>

        {
            loading ? (
                <>

                    <div className="loading">
                <CircleLoader
                color={"red"}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            
            </div>
            </>
            ):(<></>)
        }
        
        
</div>
    )
}

export default Onloading