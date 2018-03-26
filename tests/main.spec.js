/* eslint-env node, mocha */
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc ', () => {
  describe('smoke tests', () => {
    it('deve existir o metodo soma', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('deve existir o metodo sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('deve existir o metodo mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

    it('deve existir o metodo div', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });
  });

  describe('Sum method', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub method', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult method', () => {
    it('should return 4 when `multi(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div method', () => {
    it('should return 1 when `div(2,2)`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return `Não é possivel divisao por zero`', () => {
      expect(div(2, 0)).to.be.equal('Não é possivel divisao por zero');
    });
  });
});
