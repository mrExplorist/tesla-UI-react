import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(cars);
  return (
    <Container>
      {/* // Because our logo will have a link thats why we are using a tag */}
      <a href="#">
        <img src="/images/logo.svg " alt="Tesla logo"></img>
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
      </RightMenu>
      {/********************** Creating a BURGERNAV ***********/}
      <BurgerNav show={burgerStatus}>
        {/* If you want to align something just wrap it  */}
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index} href="#">
              {car}
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance </a>
        </li>
        <li>
          <a href="#">PowerWall</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

// !The z-index property in CSS controls the vertical stacking order of elements that overlap. As in, which one appears as if it is physically closer to you. z-index only affects elements that have a position value other than static (the default).

const Container = styled.div`
  min-height: 60px;
  position: fixed; //The element is removed from the normal document flow, and no space is created for the element in the page layout
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 550;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

// An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

// A fixed element does not leave a gap in the page where it would normally have been located.

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255);
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.7s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
// Will Use UseState for closing the Custom Close
