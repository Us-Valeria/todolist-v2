import type { EnumLiteralsOf } from '../utils/EnumLiteralsOf';

export const DIRECTION_STATUSES = {
  ASC: 'ASC',
  DESK: 'DESC',
  NULL: ' ',
} as const;

export type DirectionStatus = EnumLiteralsOf<typeof DIRECTION_STATUSES>;
