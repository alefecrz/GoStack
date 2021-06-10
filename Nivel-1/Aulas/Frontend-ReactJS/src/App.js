import React from 'react';

import Header from './components/Header';

const App = () => {
  return (<>
    <Header title="Menu 1">
      <ul>
        <li>Home</li>
        <li>Login</li>
      </ul>
    </Header>
    <Header title="Menu 2">
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Sair</li>
      </ul>
    </Header>
  </>);
}

export default App;