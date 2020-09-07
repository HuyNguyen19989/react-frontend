import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Example from '../components/Nav';

class LandingPage extends React.Component {
    render() {
      return (
       <Container>
           <Row>
               <Col xl="12">
                   <Example>
               
                   </Example>
               </Col>  
           </Row>   
       </Container>
      );
    }
  }

export default LandingPage;