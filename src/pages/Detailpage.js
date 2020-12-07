import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Example from '../components/Nav';
import Secdetail from '../components/sec_detail';

import Footer from '../components/Footer';
import Au from './Au';


class Detailpage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
           toggle: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    })

  }
  render() {
      return (
          <div className="re"> 
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
                  <Secdetail handleClick={this.handleClick}>

                  </Secdetail>               
              </section>
              <Footer/>
              <div className= "fix">
              <Au toggle={this.state.toggle} />
              </div>
              
          </div>
      )
    }
}
export default Detailpage;