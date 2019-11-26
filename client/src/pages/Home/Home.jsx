import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Stores/User';
import Beat from '../../utils/Stores/Beat';
import DrumCall from "../../components/DrumCall/DrumCall";
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function () {
    User.refreshOnLoad();
    // we eagerly load beats here so when the user switches pages it will appear faster. 
    Beat.refreshOnLoad();
    const [{ user }] = User.useContext();

    return (
        <Fragment>
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="member-name">
                        Welcome{" "}
                        <span>
                            {user.email}
                        </span>
                    </div>
                </Col>
            </Row>
            <Jumbotron className="pad">
            <DrumCall />
            </Jumbotron>
        </Container>
        </Fragment>
    );
}
