import React from 'react';
import { Card, Space } from 'antd';
const Cards = () => (
  <Space direction="vertical" size={16} className='flex justify-center items-center'> 
    <Card 
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
       
    }}
  
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    {/* <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
        marginTop:500
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card> */}
  </Space>
);
export default Cards;