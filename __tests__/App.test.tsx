// src/Calculator.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Calculator from '../src/calculator';

describe('Calculator', () => {
  it('menampilkan hasil yang benar untuk pertambahan', () => {
    const { getByText } = render(<Calculator />);
    
    fireEvent.press(getByText('1'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));

    expect(getByText('3')).toBeTruthy();
  });

  it('menangani kesalahan', () => {
    const { getByText } = render(<Calculator />);
    
    fireEvent.press(getByText('1'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('='));

    expect(getByText('Error')).toBeTruthy();
  });

  it('menampilkan input dengan benar', () => {
    const { getByText } = render(<Calculator />);
    
    fireEvent.press(getByText('1'));
    fireEvent.press(getByText('2'));

    expect(getByText('12')).toBeTruthy();
  });
});