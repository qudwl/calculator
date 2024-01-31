import { create } from 'zustand';

type Store = {
  equation: string;
  addNum: (num: number) => void;
  deleteLast: () => void;
};

export const useStore = create<Store>()((set) => ({
  equation: '0',
  addNum: (num) =>
    set((state) => {
      if (state.equation === '0') {
        return { equation: num.toString() };
      }
      return { equation: state.equation + num.toString() };
    }),
  deleteLast: () =>
    set((state) => {
      if (state.equation.length === 1) {
        return { equation: '0' };
      }
      return { equation: state.equation.slice(0, -1) };
    }),
}));
