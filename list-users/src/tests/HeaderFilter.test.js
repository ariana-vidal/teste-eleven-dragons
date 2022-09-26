import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


describe('Teste do componente HeaderFilter', () => {
  test('Teste se página contém um heading h1 com o texto Usuários Cadastrados.', () => {
    render(<App />);

    const h1 = screen.getByRole('heading', {  name: /usuários cadastrados/i});
    expect(h1).toBeInTheDocument();
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

  test('Teste se página contém um botton cadastrar usuário.', () => {
    render(<App />);

    const button = screen.getByRole('button', {  name: /cadastrar usuário/i});
    expect(button).toBeInTheDocument();
  });

})