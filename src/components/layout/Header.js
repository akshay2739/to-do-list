import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>Akshay's TODO</h1>
    </header>
  )
}

const headerStyle = {
  background: 'black',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;