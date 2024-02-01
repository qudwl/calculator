import { create } from 'zustand';
import { calculatePostFix, infixToPostFix } from './calculate';

type Store = {
  equation: string;
  addNum: (num: number) => void;
  addOperator: (operator: string) => void;
  deleteLast: () => void;
  addPower: (num: number) => void;
  solve: () => void;
  clear: () => void;
  makeDenom: () => void;
};

export const useStore = create<Store>()((set) => ({
  equation: '0',
  addNum: (num) =>
    set((state) => {
      if (state.equation === '0') {
        return { equation: num.toString() };
      }
      if (state.equation.length < 45) {
        return { equation: state.equation + num.toString() };
      } else {
        return { equation: state.equation };
      }
    }),
  deleteLast: () =>
    set((state) => {
      if (state.equation.length === 1) {
        return { equation: '0' };
      } else if (state.equation.slice(-1) === ')') {
        const index = state.equation.lastIndexOf('');
        return { equation: state.equation.slice(state.equation.indexOf('('), -1) };
      }
      return { equation: state.equation.slice(0, -1) };
    }),
  addOperator: (operator) =>
    set((state) => {
      const lastChar = state.equation.slice(-1);
      let numbers = /\d+/;
      if (numbers.test(lastChar) && state.equation.length < 45) {
        return { equation: state.equation + operator };
      } else {
        return { equation: state.equation.slice(0, -1) + operator };
      }
    }),
  addPower: (num) =>
    set((state) => {
      if (/\d+/.test(state.equation.slice(-1)) || /[)]/.test(state.equation.slice(-1))) {
        return { equation: '(' + state.equation + ')^' + num.toString() };
      } else {
        return { equation: state.equation };
      }
    }),
  solve: () =>
    set((state) => {
      return { equation: calculatePostFix(infixToPostFix(state.equation)) };
    }),
  clear: () => set({ equation: '0' }),
  makeDenom: () =>
    set((state) => {
      if (/\d+/.test(state.equation.slice(-1)) || /[)]/.test(state.equation.slice(-1))) {
        return { equation: state.equation + '1/(' };
      } else {
        return { equation: state.equation };
      }
    }),
}));
