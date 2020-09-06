import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HeaderIndex from "../../lib/header";
import FooterIndex from "../../lib/footer";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import SidebarIndex from "../../lib/sidebar";
import DetailIndex from "../details/detail";
import { fetchLaunches } from "../../redux/actions";

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  return (
    <React.Fragment>
      <HeaderIndex />
      <Container fluid>
        <Row>
          <Col sm={3}>
            <SidebarIndex />
          </Col>
          <Col sm={9}>
            <DetailIndex />
          </Col>
        </Row>
      </Container>
      <FooterIndex />
    </React.Fragment>
  );
};

export default DashBoard;
