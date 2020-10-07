import React from 'react';
import Crl from './carousel_1'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRainbow } from '@fortawesome/free-solid-svg-icons'
import '../scss/sec_detail.scss'
import Theloai from './the_loai';
import { Button } from 'reactstrap';
import Tab from './tab';
import Crltwo from './carousel_2';


const Secdetail  = (props) => {
  return (
    <Container>
      <Col xl='12'className='back-color-sec-detail'>
        <div className='p-detail '>
          <Row>
            <div className='shadow'>
              <img src={require('../image/op.png')} className='hinh-detail' />
            </div>
            <div className='p-detail-left'>
              <div className='m-bot'>
                <h2>One Piece</h2>
              </div>
              <div className='sameline-detail m-bot'>
                <Theloai>
                </Theloai>
                <Theloai>
                </Theloai>
              </div>
              <ul className='sameline-detail m-bot'>
                <li className='m-right'>
                  <div>
                    <h5>111</h5>
                  </div>
                  <div>
                    chapter
                  </div>
                </li>
                <li className='m-right'>
                  <div>
                    <h5>111k</h5>
                  </div>
                  <div>
                    Lượt xem
                  </div>
                </li>
                <li className='m-right'>
                  <div>
                    <h5>111</h5>
                  </div>
                  <div>
                    Lượt thích
                  </div>
                </li>
              </ul>
              <div className='sameline-detail'>
                <div  >
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className='wandh'>1</FontAwesomeIcon>
                </div>
                <div className='center-text-detail'>
                  5/5
                </div>             
              </div>
              <div className='sameline-detail'>
                <Button color="primary" className='m-right button-size'>Đọc Tiếp</Button>
                <Button color="warning" className='m-right button-size'>Bookmarks</Button>{' '}
              </div>
            </div>
          </Row>
         </div>
         <div >
           <Row>
           <Col xl='8'>
             <Tab>

             </Tab>
           </Col>
           <Col xl='4'>
             <Crltwo>

             </Crltwo>
             <h4 className='bder-bot'>Cùng thể loại<br/></h4>
             <ul className='list-group'>
              <li className='list-item'>
              <div className='display-list-item'>
                <div className='shadow'>
                  <img src={require('../image/titan.png')} className='hinh-nho-2' />
                </div>
                <div className='w-list-item-2 sameline'>
                  <p className='clear-1'>
                      <a>HAHAHAH</a><br/>
                      Chương 1
                  </p>
                  <p className='left-3'>Xem tiếp</p>
                </div>
              </div>           
              </li>
              <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <img src={require('../image/titan.png')} className='hinh-nho-2' />
                </div>
                <div className='w-list-item-2 sameline'>
                  <p className='clear-1'>
                      <a>HAHAHAH</a><br/>
                      Chương 1
                  </p>
                  <p className='left-3'>Xem tiếp</p>
                </div>
              </div>           
              </li>
              <li className='list-item'>
              <div className='display-list-item'>
                <div >
                  <img src={require('../image/titan.png')} className='hinh-nho-2' />
                </div>
                <div className='w-list-item-2 sameline'>
                  <p className='clear-1'>
                      <a>HAHAHAH</a><br/>
                      Chương 1
                  </p>
                  <p className='left-3'>Xem tiếp</p>
                </div>
              </div>           
              </li>
            </ul>

           </Col>

           </Row>
           
         </div>
      </Col>

    </Container>
  )
}
  export default Secdetail;