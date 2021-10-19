import React from "react";

const Logo = () => {
  return (
    <div>
      Logo
    </div>
  );
}

const Menu = () => {
  return (
    <div>
      <ul style={{ display: 'flex', gap: '0 10px', margin: 0 }}>
        <li style={{ display: 'inline-block' }}>MenuItem</li>
        <li style={{ display: 'inline-block' }}>MenuItem</li>
        <li style={{ display: 'inline-block' }}>MenuItem</li>
        <li style={{ display: 'inline-block' }}>MenuItem</li>
      </ul>
    </div>
  )
}

const User = () => {
  return (
    <div>
      <button>User</button>
    </div>
  )
}

const Header = () => {
  return (
    <header style={{ padding: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Logo />
      <Menu />
      <User />
    </header>
  );
}

export default Header;