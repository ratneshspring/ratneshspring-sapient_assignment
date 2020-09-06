import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap'
export default class Index extends Component {
      render(){
          return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">SpaceX Launch Programs</Navbar.Brand>
            </Navbar>
          )
      }
  }