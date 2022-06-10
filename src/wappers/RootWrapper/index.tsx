import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '~/pages/HomePage';
import PrivateProvider from '../PrivateProvider';

export default function RootWrapper() {
  return (
    <Routes>
      <Route path="/*" element={<PrivateProvider />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
