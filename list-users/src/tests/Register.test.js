import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste da pagina Register', () => {
  test('Teste se página contém um button cadastrar.', () => {
    render(<App />);

    const button = screen.getByRole('button', {  name: /cadastrar/i});
    expect(button).toBeInTheDocument();
  });

  test('Teste se página contém um input do tipo text.', () => {
    render(<App />);

    const textBox = screen.getByRole('textbox');
    expect(textBox).toBeInTheDocument();
  });

  test('Teste se página contém um select.', () => {
    render(<App />);

    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeInTheDocument();
  });

  })