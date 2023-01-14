import { Container, Alert } from "react-bootstrap"


const ErrorPay = () => {

    return(
        <Container>
            <Alert style={{textAlign:"center", marginTop:"30vh"}} variant="danger">
            <Alert.Heading >Oh snap! You got an error!</Alert.Heading>
        <p>
            Please Try Again 
        </p>
        </Alert>
        </Container>
    )
}

export default ErrorPay