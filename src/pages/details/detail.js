import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const DetailIndex = () => {
  const { data } = useSelector((state) => state);

  const SatelliteSection = ({ item}) => {
    return (
      <Card className="satelliteCardClass">
        <Card.Img
          variant="top"
          src={item.links.mission_patch_small}
          className="satelliteCardImageClass"
          key={item.flight_number}
        />
        <Card.Body>
        <Card.Title>{item.mission_name} # {item.flight_number} </Card.Title>
          <p>
            <b>Name :</b> {item.mission_name}
          </p>
          <p>
            <b>Mission Ids :</b>
          </p>
          <ul>
            { item.mission_id.map( (tt)=> <li>{tt}</li>) }
          </ul>
          <p>
            <b>Launch Year :</b> {item.launch_year}
          </p>
          <p>
            <b>Successful Launch :</b> {item.launch_success? 'true':'false'}
          </p>
          <p>
            <b>Successful Landing :</b> {item.rocket.first_stage.cores[0].land_success ? item.rocket.first_stage.cores[0].land_success : 'false'}
          </p>
        </Card.Body>
      </Card>
    );
  };

  if (data)
    return (
      <CardColumns>
        {data.map((item) => (
          <SatelliteSection item={item} />
        ))}
      </CardColumns>
    );

  return false;
};

export default DetailIndex;
