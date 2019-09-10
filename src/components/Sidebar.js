import React, { useState } from 'react';
import { Link } from "@reach/router";
import { slide as Menu } from "react-burger-menu";
import styled from 'styled-components';

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



export default props => {
  
  return (
    <SideMenu>
      <Menu {...props}>

        <Link className="menu-item" to="/home" onClick={() => this.setState({menuOpen: false})}>
          Home
        </Link>
        
        <Link className="menu-item" to="/about" onClick={() => this.setState({menuOpen: false})}>
          About
        </Link>

        <Link className="menu-item" to="/centered-div" onClick={() => this.setState({menuOpen: false})}>
          Centered Div
        </Link>

        <Link className="menu-item" to="/form-sample" onClick={() => this.setState({menuOpen: false})}>
          Form Sample
        </Link>

        <Link className="menu-item" to="/reactstrap-form" onClick={() => this.setState({menuOpen: false})}>
          Reactstrap Form
        </Link>

        <Link className="menu-item" to="/react-final-form" onClick={() => this.setState({menuOpen: false})}>
          React Final Form
        </Link>

      </Menu>
    </SideMenu>

  );
};