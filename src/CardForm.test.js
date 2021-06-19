import { fireEvent, render, screen } from '@testing-library/react';
import faker from 'faker';
import CardForm from './CardForm';

describe('Form behavior', () => {
  let onSubmitMock;

  beforeEach(() => {
    onSubmitMock = jest.fn();
    render(<CardForm onSubmit={onSubmitMock} />);
  })

  test('should trigger onSubmit', () => {
    // given
    const creditCardNumber = faker.finance.creditCardNumber('mastercard').replace(/-/g, '');
    const expiryDate = faker.date.future();
    const expiryMonth = `${expiryDate.getMonth()}`.padStart(2, '0');
    const expriyYear = `${expiryDate.getFullYear()}`.substring(2);

    // when
    fireEvent.change(
      screen.getByPlaceholderText('Cardholder Name'),
      { target: { value: faker.name.firstName() + ' ' + faker.name.lastName() }}
    )
    fireEvent.change(
      screen.getByPlaceholderText('Card Number'),
      { target: { value: creditCardNumber }}
    )
    fireEvent.change(
      screen.getByPlaceholderText('CVC'),
      { target: { value: faker.finance.creditCardCVV() }}
    )
    fireEvent.change(
      screen.getByPlaceholderText('MMYY'),
      { target: { value: `${expiryMonth}${expriyYear}` }}
    )
    fireEvent.change(
      screen.getByPlaceholderText('Postal/Zip Code'),
      { target: { value: faker.address.zipCode() }}
    )
    submitForm();

    // then
    expectBeenSubmitted()
  });

  const submitForm = () => {
    fireEvent.click(screen.getByText('Validate'));
  }

  const expectBeenSubmitted = (shouldBeSubmitted = true) => {
    if(shouldBeSubmitted){
      expect(onSubmitMock).toHaveBeenCalled();
    } else {
      expect(onSubmitMock).not.toHaveBeenCalled();
    }
  }
})