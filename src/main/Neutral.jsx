import feedback from "../assets/neutral-icon.png";
// import '../App.css';

import {Container, Button, Col, Row} from 'react-bootstrap';

export const Neutral = props => {

    const buttonClicked = (e) => {
        props.triggerSelfReport();
    }

    return(
        <Container>
            <Row noGutters>
                <Col lg={{ span: 1, offset: 11}}>
                    <Button variant="dark" onClick={buttonClicked}>
                        <img src={feedback} alt={"Report Your Emotion"}></img>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}