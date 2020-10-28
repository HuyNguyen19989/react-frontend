import React from 'react';
import Crl from './carousel_1'
import { Container, Row, Col } from 'reactstrap';
import '../scss/sec_main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRainbow } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sec  = (props) => {
  return (
    <Container>
      <Row  className='back-color-sec'>
        <Col md='4' sm='6' xs='12' className='bder'>
          <Crl>

          </Crl>
        </Col>
        <Col md='4' sm='6' xs='12' className='w bder'>
          <Row>
          <Col sm='6' xs='12' >
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' >
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' >
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' >
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' >
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          <Col sm='6' xs='12' >
            <a>Truyện Siêu Nhân Mập</a>
            <div>12222 người truy cập</div>
            <p> &#9830; Vinh danh Minh Chủ <br/> Thể loại
            </p>
          </Col>
          </Row>
        </Col>
        <Col md='4' sm='12' xs='12' className='bder pad-12'>
          <h2>Người Đọc Đề Cử<br/></h2>
          <ul className='list-group'>
            <li className='list-item'>
            <Row>
              <div className='sameline' >
                <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
              </div>
              <div className='sameline'>
                <a>Con  heo</a>
              <div>
                Lượt  view: 00000
              </div>
                <p>
                  Thể Loại: chung <br/>
                  Tác giả:
                </p>
              </div>
              <div className='sameline left'>
                <img src={require('../image/op.png')} className='hinhnho' />
              </div>
            </Row>
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'>
                    <Link to='/detail'><a>HAHAHAH</a></Link>
                  </p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
                </div>
              </div>           
            </li>
            <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='w-list-item sameline'>
                  <p className='clear-1'><a>HAHAHAH</a></p>
                  <p className='left-3'>1111</p>
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