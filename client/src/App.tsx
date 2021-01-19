import React from 'react';
import withData from './withDataHOC';
import Tree from './Tree';

const AppTree = withData(Tree);

function App() {
  return <AppTree/>
}

export default App
