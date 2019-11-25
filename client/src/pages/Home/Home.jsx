import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../../utils/Stores/User';
import Beat from '../../utils/Stores/Beat';
import DrumCall from "../../components/DrumCall/DrumCall";

export default function () {
    User.refreshOnLoad();
    // we eagerly load beats here so when the user switches pages it will appear faster. 
    Beat.refreshOnLoad();
    const [{user}] = User.useContext();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>
                        Welcome{" "}
                        <span className="member-name">
                            {user.email}
                        </span>
                        <DrumCall/>
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}
