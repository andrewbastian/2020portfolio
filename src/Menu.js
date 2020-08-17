import React from 'react';
import { Text, MenuTrigger, Menu, ActionButton, Item } from '@adobe/react-spectrum';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
const NavMenu = () => {
    return (
  <MenuTrigger>
  <ActionButton width='25%' display="flex" alignSelf="center" marginStart='3%'
  ><ShowMenu/></ActionButton>
  <Menu 
  
  >

    <Item key="Home" textValue="Home">
      
      <Text>Home</Text>

    </Item>
    <Item key="About" textValue="About">
      
      <Text>About</Text>

    </Item>
    <Item key="Work" textValue="Work">
      
      <Text>Work</Text>

    </Item>
    <Item key="Contact" textValue="Contact">
      
      <Text>Contact</Text>

    </Item>
  </Menu>
</MenuTrigger>
    );
};


export default NavMenu;
