import {AffectPair} from '../main/AffectPair';
import '../App.css';

import {Container, Button, Col, Row} from 'react-bootstrap';

import angry from '../assets/angry.png';
import bored from '../assets/bored.png';
import confused from '../assets/confused.png';
import surprised from '../assets/surprise.png';
import close from '../assets/close.png';

// props needs to include reportEmotion
    // function that takes a string that represents and emotion
    // post-condition: component is moved to confirmation state
// props needs to include cancelAction
    //function takes no parameters
    //post-condition: state is changed
export const SelfReport = props => {


    return(
        <Container>
            <Row className="mt-2">
                <AffectPair data-testid={"angry"} emotion={"angry"} image={angry} reportEmotion={props.reportEmotion}/>
            </Row>
            <Row className="mt-2">
                <AffectPair emotion={"bored"} image={bored} reportEmotion={props.reportEmotion}/>
            </Row>
            <Row className="mt-2">
                <AffectPair emotion={"confused"} image={confused} reportEmotion={props.reportEmotion}/>
            </Row>
            <Row className="mt-2">
                <AffectPair emotion={"surprised"} image={surprised} reportEmotion={props.reportEmotion}/>
            </Row>
            <Row className="mt-2" noGutters> 
                <Col lg={{span: 1, offset:11}}>
                    <Button className={"closeButton"} data-testid={"cancelButton"} variant="dark" onClick={props.cancelAction}>
                        <img className={"closeButtonImage"} src={close} alt={"Close"}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}