import Base from './Base'
import SignUpResolver from './SignUpResolver'
import LoginResolver from './LoginResolver'
import FindAccountResolver from './FindAccountResolver'
import UpdateAccountResolver from './UpdateAccountResolver'
import DeactivateAccountResolver from './DeactivateAccountResolver'

export default [ 
  Base,
  SignUpResolver, 
  LoginResolver, 
  FindAccountResolver, 
  UpdateAccountResolver, 
  DeactivateAccountResolver
]