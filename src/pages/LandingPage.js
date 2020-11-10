import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Example from '../components/Nav';
import Sec from '../components/sec_one';
import '../scss/landingpage.scss'
import Sectwo from '../components/sec_two';

import Footer from '../components/Footer';


class LandingPage extends React.Component {
    render() {
      return (
       <div   >
      <div>
              <Container>
                <Row>
                  <Col xl="12">
                    <Example>
               
                    </Example>
                  </Col>  
                </Row>   
              </Container>
      </div>
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
        <Footer/>
        
       </div>
      );
    }
  }

export default LandingPage;

