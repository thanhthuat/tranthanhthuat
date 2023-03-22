import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import provinceJson from '../../../api/data/tinh_tp.json' assert { type: 'json' };
import dictrictJson from '../../../api/data/quan_huyen.json' assert { type: 'json' };

const formatDataProv = (value, option) => {
  const data = value[option]?.path
  ;

  return data;
};
const Item = ({ item }) => {
  return (
    <div>
      <Container className='item-home'>
        <Row>
          <Col xs={3}>
            <img className='item-home__img' src={item?.thumbnail} />
          </Col>
          <Col xs={9} className='item-home__content'>
            <Row>
              <Col xs={12}>
                <h5>{item?.title}</h5>{' '}
              </Col>
              <Col xs={12}>
                <h5 className='price'>{item?.price} VND/tháng</h5>
              </Col>
              <Col xs={12}>
                <div>
                  <p>
                    {' '}
                    Diện tích {item.area}m2  {' '}
                    <span className='area'>
                     
                      Khu vuc {formatDataProv(dictrictJson, item.district)} 
                     
                    </span>{' '}
                  </p>{' '}
                </div>{' '}
              </Col>
              <Col xs={12}>
                <p>{item?.content}</p>{' '}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Item;
