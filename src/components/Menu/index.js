import React from 'react';
import { bool } from 'prop-types'
import { StyledMenu } from './styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
    <a href="/">
        <span role="img" aria-label="about us"></span>
        Início
      </a>
      <a href="/">
        <span role="img" aria-label="about us"></span>
        Quem somos
      </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Serviços
        </a>
        <a href="/">
        <span role="img" aria-label="price"></span>
        Portfólio
        </a>
      <a href="/">
        <span role="img" aria-label="price"></span>
        Preços
        </a>
      
        <a href="/">
        <span role="img" aria-label="contact"></span>
        Contato
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;