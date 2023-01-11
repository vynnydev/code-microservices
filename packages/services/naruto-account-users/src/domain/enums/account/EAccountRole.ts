export const EAccountRole: {
  ADMIN: 'ADMIN'
  DEFAULT_USER: 'DEFAULT_USER'
} = {
  ADMIN: 'ADMIN',
  DEFAULT_USER: 'DEFAULT_USER',
}

export type EAccountRole = typeof EAccountRole[keyof typeof EAccountRole]