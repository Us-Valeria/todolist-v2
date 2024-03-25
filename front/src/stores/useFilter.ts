import { create } from 'zustand';
import type { Filters } from '../models/Filters';
import { FILTERS } from '../models/Filters';

type FilterStore = {
  filter: Filters;
  setFilter: (value: Filters) => void;
};

const useFilter = create<FilterStore>((set) => ({
  filter: FILTERS.ALL,
  setFilter: (value: Filters) => set({ filter: value }),
}));

export default useFilter;
