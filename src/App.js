import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import MainLayout from './components/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import * as S from "./styles/common";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>

      </MainLayout>
    </>
  );
}

export default App;
