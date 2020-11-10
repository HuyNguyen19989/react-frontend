import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Example from '../components/Nav';
import Secdetail from '../components/sec_detail';

import Footer from '../components/Footer';


class Contentpage extends React.Component {
    render() {
      return (
         <div>
           {this.props.toggle === true?
           <div>
             <Container>
               dc roisssssssssssssssssssssssssssssssssssssssssss
             </Container>
           </div>

           : null

           }
         </div>
      )
    }
}
export default Contentpage;