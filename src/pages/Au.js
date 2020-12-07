import React from 'react';
import Contentpage from "./Aucontent"
class Au extends React.Component {
    render() {
      return (
       <div>
        {this.props.toggle === true? 
        <Contentpage/>
        :
        null
        }
       </div>
      );
    }
  }

export default Au;
