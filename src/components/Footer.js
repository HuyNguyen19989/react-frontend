import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import '../scss/landingpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faUpload, faEnvelope, faPhone  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <section className='footer'>
          <Container>
            <Row className='footer-1'>
              <Col sm='4' className='fooer-block'>
                <div className='footer-header'>
                  <h6>Giới thiệu</h6>
                </div>
                <div>
                  <p className='footer-content'>
                  Swallows là website đọc truyện online cập nhật liên tục và nhanh nhất các truyện tiên hiệp, 
                  kiếm hiệp, huyền ảo được các thành viên liên tục đóng góp rất nhiều truyện hay và nổi bậte
                  </p>
                </div>
              </Col>
              <Col sm='4' className='footer-block'>
                <div className='footer-header'>
                  <h6>Links</h6>
                </div>
                <ul>
                  <li>
                    <div className='footer-icon-content'>
                      <FontAwesomeIcon className='block-list-icon' icon={faExclamationTriangle}></FontAwesomeIcon>
                      <p className='footer-content'>
                        Privacy         
                      </p>          
                    </div>
                  </li>
                  <li>
                    <div className='footer-icon-content'>
                      <FontAwesomeIcon className='block-list-icon' icon={faUpload}></FontAwesomeIcon>
                      <p className='footer-content'>
                        FQA         
                      </p>          
                    </div>
                  </li>
                </ul>
              </Col>
              <Col sm='4' className='fooer-block'>
                <div className='footer-header'>
                  <h6>Liên hệ quảng cáo</h6>
                </div>
                <ul>
                  <li>
                    <div className='footer-icon-content'>
                      <FontAwesomeIcon className='block-list-icon' icon={faEnvelope}></FontAwesomeIcon>
                      <p className='footer-content'>
                        Mail        
                      </p>          
                    </div>
                  </li>
                  <li>
                    <div className='footer-icon-content'>
                      <FontAwesomeIcon className='block-list-icon' icon={faPhone}></FontAwesomeIcon>
                      <p className='footer-content'>
                        Phone
                      </p>          
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
    )
}
export default Footer;