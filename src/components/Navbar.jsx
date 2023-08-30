import React from 'react';
import Input from './Input';
import Notification from '../assets/svgs/Notification';
import BasilSearchSolid from '../assets/svgs/SearchIcon';
import Text from './Text';
const customStyles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: '10px',
    background: "#FFF",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
  },
  leftSide: {
    flex: 1,
    textAlign: 'left'
  },
  centerSide: {
    flex: 2,
    textAlign: 'center',
    display: 'flex',
 
  },
  rightSide: {
    flex: 1,
    textAlign: 'right',
    display: 'flex',
    justifyContent:'flex-end',
    gap:"20px",
    alignItems: 'center', 
  },
  bellIcon:{

  },
  Image:{
border:"1px solid black",
borderRadius:"50px",
  },
  searchIcon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  inputField: {
    flex: 1,
  },
};


const Navbar = () => {
  return (
    <div style={customStyles.navContainer}>
      <div style={customStyles.leftSide}>
        <Text  type={"h1"} label={"LOGO"} />
      </div>
      <div style={customStyles.centerSide}>
  <div style={customStyles.searchIcon}><BasilSearchSolid/></div>
        <div style={customStyles.inputField}><Input type={"text"} placeholder={"Search for people, document and more"} styleClass={"search__input"}  />
 </div>
     </div>
      <div style={customStyles.rightSide}>
        <div style={customStyles.bellIcon}><Notification/></div>
        <div style={customStyles.Image}><img src='/photos/avatar.jpg' alt='' width={"100%"} height={"50px"}
        style={{borderRadius:"50px"}}/></div>
      </div>
    </div>
  );
};

export default Navbar;