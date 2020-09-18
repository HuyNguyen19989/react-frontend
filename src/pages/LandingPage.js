import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Example from '../components/Nav';
import Sec from '../components/sec_one';
import '../scss/landingpage.scss'


class LandingPage extends React.Component {
    render() {
      return (
       <div   >
        <Container>
          <Row>
               <Col xl="12">
                   <Example>
               
                   </Example>
               </Col>  
          </Row>   
        </Container>
        <main className="au-main">
          <section >
            <div id='back-color-1'>
            <Sec>
            </Sec>
            </div>
          </section>
        </main>
       </div>
      );
    }
  }

export default LandingPage;

