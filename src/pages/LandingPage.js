import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Example from '../components/Nav';
import Sec from '../components/sec_one';
import '../scss/landingpage.scss'
import Sectwo from '../components/sec_two';


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
            <Sec>
            </Sec>
          </section>
          <section>
            <Sectwo>
              
            </Sectwo>

          </section>
        </main>
       </div>
      );
    }
  }

export default LandingPage;

