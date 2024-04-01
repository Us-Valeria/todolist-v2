import type { EnumLiteralsOf } from '../../../utils/EnumLiteralsOf';

export const SORTED_KEY = {
  DEFAULT: 'DEFAULT',
  TITLE: 'TITLE',
  DATE: 'DATE',
} as const;

export type SortedKey = EnumLiteralsOf<typeof SORTED_KEY>;
