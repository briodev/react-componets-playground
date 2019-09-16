import React, { useState } from 'react';
import { Link } from "@reach/router";
import { slide as Menu } from 'react-burger-menu'
import styled from "styled-components"


import logo from '../images/logo/east-coast-granite-logo.png'

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #aaa;
  overflow: hidden;
  position: sticky;
  z-index: 1101;
  top: 0;
`
const Logo = styled.div`
  padding: .5em 1em;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: 1em;
  a {
    color: #f2f2f2;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
  }
  @media(max-width: 721px) {
    display: none;
  }
`
const HamburgerWrapper = styled.div`
  @media(min-width: 720px) {
    display: none;
  }
`
const SideMenu =  styled.div`

    /* Individual item */
    .bm-item {
      display: inline-block;

      /* Our sidebar item styling */
      text-decoration: none;
      margin-bottom: 10px;
      color: #d1d1d1;
      transition: color 0.2s;
    }

    /* Change color on hover */
    .bm-item:hover {
      color: white;
    }

    /* The rest copied directly from react-burger-menu docs */

    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      right: 36px;
      top: 36px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }

`

export default () => {

  const [menuState, setMenuOpen] = useState({menuOpen: false});

  const closeMenu = () => {
    setMenuOpen({menuOpen: false})
    console.log(menuState)
  }

  return (
    <>
        <TopNav>
            <Logo>
              <a href="#" className="logo">
                <img src={logo} alt="East Coast Granite Logo" width="150px" height="auto"/>
              </a>
            </Logo>
            <NavItems>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Products</a>
            </NavItems>
            <HamburgerWrapper>
              <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} isOpen={ menuState }>
                <Menu>

                  <Link className="menu-item" to="/" onClick={() => closeMenu() }>
                    Home
                  </Link>
                  
                  <Link className="menu-item" to="/about" onClick={() => closeMenu() }>
                    About
                  </Link>

                  <Link className="menu-item" to="/centered-div" onClick={() => closeMenu() }>
                    Centered Div
                  </Link>

                  <Link className="menu-item" to="/form-sample" onClick={() => closeMenu() }>
                    Form Sample
                  </Link>

                  <Link className="menu-item" to="/reactstrap-form" onClick={() => closeMenu() }>
                    Reactstrap Form
                  </Link>

                  <Link className="menu-item" to="/react-final-form" onClick={() => closeMenu() }>
                    React Final Form
                  </Link>

                </Menu>
              </SideMenu>
            </HamburgerWrapper>
        </TopNav>
    </>

)}