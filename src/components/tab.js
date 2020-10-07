import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../scss/tab.scss'
const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Giới Thiệu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Chương
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className='p-tab-1'>
              Lục Châu tỉnh lại sau giấc ngủ trở thành thế gian cường đại nhất già nhất ma đầu tổ sư gia, còn có chín cái tội ác chồng chất, uy chấn thiên hạ đồ đệ. Đại đồ đệ U Minh giáo giáo chủ thủ hạ ngàn vạn ma chúng, nhị đồ đệ Kiếm Ma một lời không hợp liền khai sát giới. . .<br/>

Không có một thân tu vi, như thế nào dạy dỗ đám này ác đồ?

Đại đồ đệ Vu Chính Hải: "Lão phu cả đời này đánh đâu thắng đó, ngoại trừ sư phụ lão nhân gia ông ta, ai cũng đừng nghĩ cưỡi trên đầu ta."

Thất đồ đệ Tư Vô Nhai: "Sư phụ không chết, chúng ta ăn ngủ không yên a!"<br/>

. . .<br/>

Cửu đồ đệ Diên Nhi: "Ta nhất định sẽ ghi nhớ sư phụ, làm người tốt."<br/>

✍✍Cảnh giới tu luyện:<br/>

- Thối Thể: Luyện nhục, đoán cốt, dịch cân<br/>

- Thông Huyền: Tâm hồn, khẩu khiếu, tị khiếu, nhãn khiếu, nhĩ khiếu<br/>

- Ngưng Thức: Luyện Khí Hóa Thần, Luyện Thần Hóa Hư, Luyện Hư Hóa Hải<br/>

- Phạn Hải: Nhâm mạch, Đốc mạch, hướng mạch, đới mạch, dương duy mạch, âm duy mạch, dương khiêu mạch, âm khiêu mạch<br/>

- Thần Đình: Tố Đạo, Ngự Đạo, Hóa Đạo<br/>

- Nguyên Thần: Đạo Nguyên, Hỗn Nguyên, Hợp Đạo<br/>

- Huyền Thiên.<br/>

✍✍ Vào Thông Huyền có thể ngưng tụ pháp thân:<br/>

- Thông Huyền đối ứng pháp thân: Thái Cực Sơ Thành<br/>

- Ngưng Thức cảnh: Lưỡng Nghi Hóa Sinh, Tam Hoa Tụ Đỉnh, Tứ Tượng Tung Hoành .<br/>

- Phạn Hải cảnh: Tứ Tượng Tung Hoành , Ngũ Khí Triều Nguyên, Lục Hào Ly Hợp, Thất Tinh Chuyển Hồn .<br/>

- Thần Đình cảnh: Thất Tinh Chuyển Hồn , Bát Pháp Vận Thông, Cửu Chuyển Âm Dương, Thập Phương Càn Khôn .<br/>

- Nguyên Thần kiếp cảnh: Bách Kiếp Động Minh, từ Bách Kiếp Động Minh bắt đầu nắm giữ dưới trướng kim liên, kim liên mỗi mở nhất diệp thực lực cao hơn một tầng, chung cửu diệp. Thập diệp liền tấn thăng Thiên Giới Lượn Quanh. <br/>

- Thiên Giới Lượn Quanh cấp tiếp theo, Vạn Lưu Chí Tôn.<br/>

              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col lg='12'>
              <ul className='list-group'>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                <li className='list-item'>
                  <div className='display-list-item'>                    
                    <div className='w-list-item sameline'>
                      <p className='clear-1'><a>Chương N</a></p>
                      <p className='left-3'>dd/mm/yy</p>
                    </div>
                   </div>           
                </li>
                
              </ul>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tab;