import { create } from 'zustand';
import type { SortedKey } from '../models/SortKey';
import { SORTED_KEY } from '../models/SortKey';
import type { SortDirection } from '../models/SortDirection';
import { SORTED_DIRECTION } from '../models/SortDirection';

type SortStore = {
  sortKey: SortedKey;
  setSortKey: (value: SortedKey) => void;
  direction: SortDirection;
  setDirection: (value: SortDirection) => void;
};

const useSelectedSort = create<SortStore>((set) => ({
  sortKey: SORTED_KEY.DEFAULT,
  setSortKey: (value) => set({ sortKey: value }),
  direction: SORTED_DIRECTION.ASC,
  setDirection: (value) => set({ direction: value }),
}));

export default useSelectedSort;
