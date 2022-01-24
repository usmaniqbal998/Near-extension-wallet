export interface registerState {
  registerBy: 'Phone' | 'Email';
  email: string;
  phone: string;
  currentRegisterationStep: number;
  otp: string;
  name: string;
  username: string;
  confirmpassword: string;
  password: string;
}

export interface action {
  type: string;
  payload: any;
}

export const initialState: registerState = {
  registerBy: 'Email',
  email: '',
  phone: '',
  currentRegisterationStep: 0,
  otp: '',
  name: '',
  username: '',
  confirmpassword: '',
  password: '',
};

export default function ManageRegisterationReducer(
  state: registerState = initialState,
  action: action
) {
  switch (action.type) {
    case 'nextStep':
      return { ...state, currentRegisterationStep: action.payload };
    case 'changeRegisterBy':
      return { ...state, registerBy: action.payload };
    case 'changeEmailOrPhone': {
      if (state.registerBy === 'Email') {
        return { ...state, email: action.payload };
      } else {
        return { ...state, phone: action.payload };
      }
    }
    case 'changeOTP':
      return { ...state, otp: action.payload };
    case 'addName':
      return { ...state, name: action.payload };
    case 'addUsername':
      return { ...state, username: action.payload };
    case 'addPassword':
      return { ...state, password: action.payload };
    case 'confirmPassword':
      return { ...state, confirmpassword: action.payload };

    default:
      throw new Error('Invalid Action Type');
  }
}
