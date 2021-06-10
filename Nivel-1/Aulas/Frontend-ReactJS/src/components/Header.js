import React from 'react';

const Header = ({ title, children }) => {
  return (<header>
    { title }

    { children }
    </header>);
}

export default Header;