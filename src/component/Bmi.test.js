
import { render, screen, unmountComponentAtNode, act, fireEvent, within, getNodeText } from '@testing-library/react';
import Bmi from './Bmi';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = render(<Bmi />)
});

afterEach(() => {
  // cleanup on exiting
  container = null;

});

function getrandomNumber() {
  return Math.floor(Math.random() * 10000);
}

test('check bmi functional working', () => {
  const onChange = jest.fn();

  const massValue = getrandomNumber();
  const height = getrandomNumber();
  
  const outputValue = (massValue / (height*height) );


  const massInputElement = container.getByLabelText('mass-input')
  fireEvent.change(massInputElement, { target: { value: massValue } })

  const heightInputElement = container.getByLabelText('height-input')
  fireEvent.change(heightInputElement, { target: { value: height } })

  const bmiButtonElement = container.getByLabelText('bmi-button')
  const bmiOutputElement = container.getByLabelText('bmi-output')

  fireEvent.click(bmiButtonElement)

  const output = getNodeText(bmiOutputElement)

  expect(output).toEqual(outputValue.toString())

  console.log("outputs", output, outputValue.toString())


});
