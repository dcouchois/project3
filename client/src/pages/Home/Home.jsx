import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Stores/User';
import Beat from '../../utils/Stores/Beat';
import DrumCall from "../../components/DrumCall/DrumCall";
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from "../../images/photo.jpeg";

export default function () {
    User.refreshOnLoad();
    // we eagerly load beats here so when the user switches pages it will appear faster. 
    Beat.refreshOnLoad();
    const [{ user }] = User.useContext();

    return (
        <Fragment>
            <img className="bg-image" src={logo} alt={logo} />
            <Container className="mt-5 top-display">
                <Row>
                    <Col sm={{ span: 9, offset: 3 }}>
                        <div className="member-name">
                            Welcome{" "}
                            <span>
                                {user.email}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Jumbotron className="pad">
                <DrumCall />
            </Jumbotron>
        </Fragment>
    );
}
