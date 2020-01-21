import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Navbar
} from 'reactstrap';


import Slider from '../Slider/Slider';

const Example = (props) => {
  return (
    <div>
      <div className="slider">
      <Slider style={{height: "10vh"}}/>
      </div>
   </div>
   
  );
};

export default Example;