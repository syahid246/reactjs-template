import React from 'react';
import logo from '../../assets/img/logo.svg';
import {
  App, AppHeader, AppLogo, AppLink,
} from './styled';

export default function Home() {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  );
}
