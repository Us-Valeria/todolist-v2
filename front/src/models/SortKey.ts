import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const SORT_KEY = {
  DEFAULT: 'DEFAULT',
  TITLE: 'TITLE',
  DATE: 'DATE',
} as const;

export type SortKey = EnumLiteralsOf<typeof SORT_KEY>;
