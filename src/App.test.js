import { render, screen, unmountComponentAtNode, act, fireEvent, within, getNodeText } from '@testing-library/react';
import App from './App';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = render(<App />)
});

afterEach(() => {
  // cleanup on exiting
  container = null;

});

function getrandomNumber() {
  return Math.floor(Math.random() * 10000);
}

test("praveen",() =>{
  
})
test("pra",() =>{
  
})

