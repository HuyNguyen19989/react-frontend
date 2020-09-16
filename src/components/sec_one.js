import React from 'react';
import Crl from './carousel_1'
import { Container, Row, Col } from 'reactstrap';
import '../scss/sec_one.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRainbow } from '@fortawesome/free-solid-svg-icons'

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
          <ul className='list-group'>
            <li className='list-item'>
            <Row>
          <div className='sameline' >
            <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
          </div>
          <div className='sameline'>
            <a>Con Cu bị Méo</a>
            <div>
              Lượt  view: 00000
            </div>
            <p>
              Thể Loại: cu bự <br/>
              Tác giả:
            </p>
          </div>
          <div className='sameline left'>
            <img src={require('../image/cuto.png')} className='hinhnho' />
          </div>
          </Row>
            </li>
            <li className='list-item'>
              <div>
              <div className='left-2' >
                <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
              </div>
              <div className='sameline' >
                <h5><a>HAHAHAH</a></h5>
                <div className='left-3'>1111</div>
              </div>
              

              </div>           
            </li>
          </ul>
          
        </Col>
      </Row>
    </Container>
  )
}
export default Sec;