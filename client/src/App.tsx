import React from 'react';
import { startMirage } from './server-mock';
import withData from './withDataHOC';
import TreeComponent from "./TreeComponent";

if (process.env.NODE_ENV === 'development') {
  startMirage();
}

const AppTree = withData(TreeComponent);

function App() {
  return <AppTree/>
}

export default App
