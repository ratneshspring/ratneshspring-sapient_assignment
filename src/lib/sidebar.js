import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
export default class Index extends Component {
  render() {
    const yearRange = [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ];
    let yearButton = yearRange.map((lebel) => {
      return (
        <this.GenrateButton
          href={`?launch_year=${lebel}`}
          varientName="success"
          buttonName={lebel}
        />
      );
    });
    return (
      <Card className="filterCard">
        <b>
          <h4 className="filterTitle">Filter</h4>
        </b>
        <center>
          <h4>Launch Year</h4>
          <hr className="lunchYear" />
        </center>
        <Row className="filterRow">{yearButton}</Row>
        <center>
          <h4>Successful Launch</h4>
          <hr style={{ width: "60%", marginTop: "-3px" }} />
        </center>
        <Row className="filterRow">
          <this.GenrateButton
            href="?launch_success=true"
            varientName="success"
            buttonName="True"
          />
          <this.GenrateButton
            href="?launch_success=false"
            varientName="success"
            buttonName="False"
          />
        </Row>
        <center>
          <h4>Successful Landing</h4>
          <hr style={{ width: "60%", marginTop: "-3px" }} />
        </center>
        <Row className="filterRow">
          <this.GenrateButton
            href="?lander_success=true"
            varientName="success"
            buttonName="True"
          />
          <this.GenrateButton
            href="?lander_success=false"
            varientName="success"
            buttonName="False"
          />
        </Row>
      </Card>
    );
  }
  GenrateButton(props) {
    let classname = "filterButton";
    return (
      <Button
        href={props.href}
        variant={props.varientName}
        className={classname}
        key={Math.floor(Math.random() * 1000)}
      >
        {props.buttonName}
      </Button>
    );
  }
}
