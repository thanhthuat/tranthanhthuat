import React, { useEffect, useState } from 'react';
import dataJson from '../../api/data/data.json' assert { type: 'json' };
import Item from './item';
import FormSearch from './form';

const formatData = (vale, option) => {
  const data = Object.keys(vale)
    .map((item) => {
      return {
        title: vale[item]?.title,
        thumbnail: vale[item]?.thumbnail,
        price: vale[item]?.price,
        area: vale[item]?.area,
        city: vale[item]?.city,
        district: vale[item]?.district,
        content: vale[item]?.content,
      };
    })
    .filter((item) => {
      console.log(
        '--',
        +option?.square.split('-')[0],
        typeof item.area,
        +option?.square.split('-')[1]
      );
      if (
        +option?.square.split('-')[0] < +item.area &&
        +item.area <= +option?.square.split('-')[1] &&
        +option?.price.split('-')[0] < +item.price &&
        +item.price <= +option?.price.split('-')[1]
      ) {
        if (!option?.province) {
          return item;
        } else {
          if (!option?.district) {
            if (item.city == +option?.province) {
              return item;
            }
          } else {
            if (item.city == +option?.province && item.district == +option?.district) {
              return item;
            }
          }
        }
      }
    });
  console.log(data);
  return data;
};

const HomeLayout = () => {
  const [valueSearch, setValueSearch] = useState({});
  const [valueData, setValueData] = useState([]);

  useEffect(() => {
    let obj = { ...valueSearch };
    if (Object.keys(obj).length > 0) {
      setValueData(formatData(dataJson, obj));
    }

    return () => {};
  }, [valueSearch]);

  const handleValueSearch = (value) => {
    setValueSearch(value);
  };
  return (
    <div className='header'>
      <FormSearch handleValueSearch={handleValueSearch} />
      <div className='content'>
        {valueData.map((item, index) => {
          return <Item item={item} key={`index-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default HomeLayout;
