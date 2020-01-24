import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 1',
    
    key: '1'
  },
  {
    src: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 2',
  
    key: '2'
  },
  {
    src: 'https://images.pexels.com/photos/2556700/pexels-photo-2556700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Slide 3',
   
    
    key: '3'
  }
];

const Slide = () => <UncontrolledCarousel items={items} />;

export default Slide;