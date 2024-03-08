import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const FILTER_STATUSES = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
} as const;

export type FilterStatus = EnumLiteralsOf<typeof FILTER_STATUSES>;
