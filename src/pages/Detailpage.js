import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Example from '../components/Nav';
import Secdetail from '../components/sec_detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faUpload, faEnvelope, faPhone  } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';


class Detailpage extends React.Component {
    render() {
      return (
          <div> 
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
              <section className='au-main'>
                  <Secdetail>

                  </Secdetail>               
              </section>
              <Footer/>
          </div>
      )
    }
}
export default Detailpage;