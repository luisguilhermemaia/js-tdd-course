/* eslint-env node, mocha */
/*
Desafio FizzBuzz
Escreva uma lib que receba um número e:
Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
Se não for múltiplo de nada, retorna o número
 */

import { expect } from 'chai';
import fizzbuzz from '../src/main';

describe('fizbuzz ', () => {
  it('Should print `Fizz` when divisible by 3  ', () => {
    expect(fizzbuzz(9)).to.be.equal('Fizz');
  });

  it('Should divisible by 5 prints `Buzz`', () => {
    expect(fizzbuzz(10)).to.be.equal('Buzz');
  });

  it('Should divisible by 3 and by 5 prints `FizzBuzz`', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should divisible by anything prints the number', () => {
    expect(fizzbuzz(7)).to.be.equal(7);
  });
});
