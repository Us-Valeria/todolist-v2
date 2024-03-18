import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const SORTED_DIRECTION = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export type SortDirection = EnumLiteralsOf<typeof SORTED_DIRECTION>;
