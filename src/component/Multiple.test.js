
import { render, screen, unmountComponentAtNode, act, fireEvent, within, getNodeText } from '@testing-library/react';
import Multiple from './Multiple';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = render(<Multiple />)
});

afterEach(() => {
  // cleanup on exiting
  container = null;

});

function getrandomNumber() {
  return Math.floor(Math.random() * 10000);
}

test('check multiple functional working', () => {
  const onChange = jest.fn();

  const num1Value = getrandomNumber();
  const num2Value = getrandomNumber();
  const num3Value = getrandomNumber();
  const num4Value = getrandomNumber();
  const outputValue = (num1Value * num2Value *num3Value * num4Value);

  console.log("inputs", num1Value, num2Value , num3Value, num4Value)

  const num1InputElement = container.getByLabelText('num1-input')
  fireEvent.change(num1InputElement, { target: { value: num1Value } })

  const num2InputElement = container.getByLabelText('num2-input')
  fireEvent.change(num2InputElement, { target: { value: num2Value } })

  const num3InputElement = container.getByLabelText('num3-input')
  fireEvent.change(num3InputElement, { target: { value: num3Value } })

  const num4InputElement = container.getByLabelText('num4-input')
  fireEvent.change(num4InputElement, { target: { value: num4Value } })

  const multipleButtonElement = container.getByLabelText('multiple-button')
  const multipleOutputElement = container.getByLabelText('multiple-output')

  fireEvent.click(multipleButtonElement)

  const output = getNodeText(multipleOutputElement)

  expect(output).toEqual(outputValue.toString())

  console.log("outputs", output, outputValue.toString())


});
