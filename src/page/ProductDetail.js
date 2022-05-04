import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/koreasledo/hnm-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=> {
    getProductDetail();
  },[]);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col className='product-main-info'>
          <div className='product-info'>{product?.title}</div>
          <div className='product-info'>₩{product?.price}</div>
          <div className='choice'>{product?.choice == true? "Conscious Choice" : ""}</div>
          <div className='new-product'>{product?.new == true? "신제품": ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item)=> (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail