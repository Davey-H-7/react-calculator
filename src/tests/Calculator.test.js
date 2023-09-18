import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers together', () => {
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4')
    const addbutton = container.getByTestId('operator-add')
    const equalsbutton = container.getByTestId('operator-equals')
    fireEvent.click(button1)
    fireEvent.click(addbutton)
    fireEvent.click(button4)
    fireEvent.click(equalsbutton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract one number from another', () => {
    const button7 = container.getByTestId('number7')
    const button4 = container.getByTestId('number4')
    const subtractButton = container.getByTestId('operator-subtract')
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(button7)
    fireEvent.click(subtractButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should multiply two numbers together', () =>{
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should concatenate multiple button clicks', () =>{
    const button2 = container.getByTestId('number2')
    const button5 = container.getByTestId('number5')
    fireEvent.click(button2)
    fireEvent.click(button5)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('25')
  })

  it('should divide one number by another', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const divideButton =container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should chain multiple operations together', () => {

    const button1 = container.getByTestId('number1')
    const button3 = container.getByTestId('number3')
    const button6 = container.getByTestId('number6')
    const addButton = container.getByTestId('operator-add')
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button6)
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('24')
  })

  it('should clear the running total without affecting the calculation', () =>{

    const button1 = container.getByTestId('number1')
    const button3 = container.getByTestId('number3')
    const button6 = container.getByTestId('number6')
    const addButton = container.getByTestId('operator-add')
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalsButton = container.getByTestId('operator-equals')
    const clearButton = container.getByTestId('clear')
    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button6)
    fireEvent.click(clearButton)
    fireEvent.click(button3)
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('12')
  })

})

