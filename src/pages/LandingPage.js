import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Example from '../components/Nav';
import ExampleMain from '../components/Main';

class LandingPage extends React.Component {
    render() {
      return (
       <Container className="tat-margin-cho-tao">
           <Example>
           </Example>
       </Container>
      );
    }
  }

export default LandingPage;