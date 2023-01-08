export const accountRole = [
  'ADMIN',
  'DEFAULT_USER'
] as const

export type TAccountRole = typeof accountRole[number]