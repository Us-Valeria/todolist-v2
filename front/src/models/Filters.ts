import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const FILTERS = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
} as const;

export type Filters = EnumLiteralsOf<typeof FILTERS>;
