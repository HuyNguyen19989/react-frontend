import React from 'react';
import Crl from './carousel_1'
import { Container, Row, Col } from 'reactstrap';
import '../scss/sec_one.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Sec  = (props) => {
  return (
    <Container>
      <Row>
        <Col md='4' sm='6' xs='12' className='bder'>
          
          <Crl></Crl>
        </Col>
        <Col md='4' sm='6' xs='12' className='w bder'>
          <Row>
          <Col sm='6' xs='12' className='sm-item'>
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' className='sm-item'>
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' className='sm-item'>
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' className='sm-item'>
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' className='sm-item'>
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' className='sm-item'>
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          </Row>
        </Col>
        <Col md='4' sm='12' xs='12' className=' bder'>
          <h2>Người Đọc Đề Cử<br/></h2>
          <div >
            <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Sec;