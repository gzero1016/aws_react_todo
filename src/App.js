import './App.css';
import { Reset } from 'styled-reset';
import MainLayout from './components/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import * as S from "./styles/common";
import { Route, Routes } from 'react-router-dom';
import Today from './pages/Today/Today';
import { useState } from 'react';
import Calendar from './pages/Calendar/Calendar';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <Routes>
          <Route path="/today" element={ <Today />} />
          <Route path="/upcoming" />
          <Route path="/calendar" element={ <Calendar /> } />
          <Route path="/stickwall" />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
