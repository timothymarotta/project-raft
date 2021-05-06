import '../App.css';
import {Container, Button, Col, Row} from 'react-bootstrap';

export const AffectPair = props => {

    const buttonClicked = (e) => {
        props.reportEmotion(props.emotion);
    }

    return (
        <Container>
            <Row noGutters>
                <Col lg={{ span: 3, offset: 8}}>
                    <p className={"affectText"}>I'm feeling {props.emotion}</p>
                </Col>
                <Col lg={1}>
                    <Button className={"affectButton"} variant="dark" onClick={buttonClicked}>
                        <img className={"affectButtonImage"} src={props.image} alt={props.emotion}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}