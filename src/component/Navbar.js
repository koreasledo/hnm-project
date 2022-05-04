import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성', 
    'Divided', 
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    "Sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const search = (event) => {
    if(event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="close-btn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        { authenticate ? (
          <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <span className="login" onClick={() => setAuthenticate(false)}>로그아웃</span>
          </div>
        ) : (
          <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <span className="login" onClick={() => navigate("/login")}>로그인</span>
          </div>
        )}
      </div>

      <div className='nav-section'>
        <Link to="/">
          <img className='logo' width={100} src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg' />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu,index)=>
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          )}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='제품 검색' onKeyPress={(event)=> search(event)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar