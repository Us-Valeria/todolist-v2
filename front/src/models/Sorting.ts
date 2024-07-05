import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const SORT_DIRECTION = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export const SORT_KEY = {
  DEFAULT: 'DEFAULT',
  TITLE: 'TITLE',
  DATE: 'DATE',
} as const;

export type SortKey = EnumLiteralsOf<typeof SORT_KEY>;
export type SortDirection = EnumLiteralsOf<typeof SORT_DIRECTION>;
