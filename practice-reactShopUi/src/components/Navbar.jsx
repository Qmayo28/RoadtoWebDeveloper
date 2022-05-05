import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined, Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import '../app.scss';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  text-decoration: none;
  list-style: none;
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
  z-index: 2;
`;

const MenuItem = styled.div`
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
  z-index: 1;

  &:hover {
    background-color: teal;
    border: 10px;
    border-radius: 5px 5px 5px 5px;
    color: white;
  }
`;

const Dropdown = styled.button`
  padding: 5px;
  background: #fff;
  border-radius: 5px 5px 5px 5px;
  font-weight: bold;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: teal;
  }
`;

const Span = styled.span`
  width: 900px;
  user-select: none;
  margin: 100px auto;
  position: relative;
`;

const DropdownContent = styled.div`
position: absolute;
Top: 110%;
left: 0;
padding: 10px;
background: #fff
box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
font-weight: 500;
color: #333;
width: 95%;
transition: all 1s ease;

`;

const DropdownItem = styled.li`
  width: 150px;
  padding: 10px;
  margin-left: -50px;
  list-style: none;
  border: 10px;
  transition: all 1s ease;

  background-color: teal;

  display: flex;
  justify-content: center;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const MyVisibility = styled(Menu)({
  '&:hover': {
    color: 'white',
  },
});

const Navlinks = styled.link`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setIsActive(false);
    } else {
      setIsActive(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={'/'}>
            <Logo style={{ textDecoration: 'none' }}>LAMA.</Logo>
          </Link>
        </Center>
        <>
          <Right>
            <MenuItem>
              <Span>
                <Dropdown
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <MyVisibility />

                  {isActive && (
                    <DropdownContent>
                      <DropdownItem onClick={() => setSelected(false)}>
                        <a
                          style={{ textDecoration: 'none', color: 'white' }}
                          href="#Categories"
                        >
                          Categories
                        </a>
                      </DropdownItem>
                      <DropdownItem onClick={() => setSelected(false)}>
                        <a
                          style={{
                            textDecoration: 'none',
                            color: 'white',
                          }}
                          href="#Product"
                        >
                          Products
                        </a>
                      </DropdownItem>
                      <DropdownItem onClick={() => setSelected(false)}>
                        <a
                          style={{ textDecoration: 'none', color: 'white' }}
                          className="hover"
                          href="#Newsletter"
                        >
                          NewsLetter
                        </a>
                      </DropdownItem>
                    </DropdownContent>
                  )}
                </Dropdown>
              </Span>
            </MenuItem>
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
