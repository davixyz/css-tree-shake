import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/button';
import { Text } from './components/text';

const App = () => (
  <main>
    <Button>Hello Button</Button>
    <Text>Hello Text</Text>
  </main>
);

ReactDOM.render(<App />, document.getElementById('app'));