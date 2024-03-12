import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const DIRECTION_STATUSES = {
  UNDER: 'UNDER',
  OLDER: 'OLDER',
  FALSE: 'FALSE',
} as const;

export type DirectionStatus = EnumLiteralsOf<typeof DIRECTION_STATUSES>;
