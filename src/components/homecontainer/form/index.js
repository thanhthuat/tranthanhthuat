import React, { useState } from 'react';
import Select from 'react-select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import provinceJson from '../../../api/data/tinh_tp.json' assert { type: 'json' };
import dictrictJson from '../../../api/data/quan_huyen.json' assert { type: 'json' };


const formatData = (vale) => {
  const data = Object.keys(vale).map((item) => {
    return { label: vale[item]?.name, value: vale[item]?.code };
  });
  return data;
};
const formatDataDict = (vale) => {
  const data = Object.keys(vale).map((item) => {
    return {
      label: vale[item]?.name,
      value: vale[item]?.code,
      parent_code: vale[item]?.parent_code,
    };
  });
  return data;
};
const optionsPrice = [
  { value: '0-1000000', label: 'Dưới 1 triệu' },
  { value: '1000000-2000000', label: '1 triệu -2 triệu' },
  { value: '2000000-3000000', label: '2 triệu -3 triệu' },
  { value: '3000000-5000000', label: '3 triệu -5 triệu' },
  { value: '5000000-7000000', label: '5 triệu -7 triệu' },
  { value: '7000000-10000000', label: '7 triệu -10 triệu' },
];

const optionsSquare = [
  { value: '0-20', label: 'Dưới 20 m2' },
  { value: '20-30', label: '20 m2 -30 m2' },
  { value: '30-50', label: '30 m2 -50 m2' },
  { value: '50-60', label: '50 m2 -60 m2' },
  { value: '60-70', label: '60 m2 -70 m2' },
  { value: '70-80', label: '70 m2 -80 m2' },
];
const provinceOption = formatData(provinceJson);
const FormSearch = ({ handleValueSearch }) => {
  const [province, setProvince] = useState(null);
  const [dictrict, setDictrict] = useState([]);
  const [dictrictValue, setDictrictValue] = useState(null);
  const [square, setSquare] = useState(null);
  const [price, setprice] = useState(null);

  const handleChangeProvince = (e) => {
    setProvince(e.value);
    setDictrict(formatDataDict(dictrictJson).filter((item) => item.parent_code === e.value));
  };
  const handleChangeDictrict = (e) => {
    setDictrictValue(e.value);
  };
  const handleChangeSquare = (e) => {
    setSquare(e.value);
  };
  const handleChangePrice = (e) => {
    setprice(e.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (!province && !dictrictValue && !square && !price) {
      return;
    }
    console.log("value")
    let obj = {
      province: province,
      dictrict: dictrictValue,
      square: square ?? '0-80' ,
      price: price ?? '0-10000000',
    };
    handleValueSearch(obj);
  };
  return (
    <div>
      <form style={{ marginTop: '100px' }} onSubmit={handleSearch}>
        <Container className='search-home'>
          <Row>
            <Col>
              {' '}
              <Select
                options={provinceOption}
                onChange={handleChangeProvince}
                placeholder='Chọn tỉnh thành'
              />
            </Col>
            <Col>
              {' '}
              <Select
                options={dictrict}
                placeholder='Chọn quận/huyện'
                onChange={handleChangeDictrict}
              />
            </Col>
            <Col>
              {' '}
              <Select
                options={optionsPrice}
                placeholder='Chọn mức giá'
                onChange={handleChangePrice}
              />
            </Col>
            <Col>
              <Select
                options={optionsSquare}
                placeholder='Chọn diện tích'
                onChange={handleChangeSquare}
              />
            </Col>
            <Col>
              <button type='submit' className='btn-submit'>
                Lọc tin
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default FormSearch;
