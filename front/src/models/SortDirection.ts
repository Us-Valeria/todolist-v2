import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const SORT_DIRECTION = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export type SortDirection = EnumLiteralsOf<typeof SORT_DIRECTION>;
