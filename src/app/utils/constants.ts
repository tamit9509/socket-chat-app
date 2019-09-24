export const CONSTANTS = {
  FORM_ERRORS: {
    REQUIRED: {
      EMAIL: 'Email is required',
      NAME: 'Name is required',
      PHONENUMBER: 'Phone number is required',
      PASSWORD: 'Password is required',
    },
    INVALID: {
      EMAIL: 'Invalid email address'
    }
  },
  APIS: {
    AUTH: {
      USER_REGISTER: '/v1/auth/register',
      USER_LOGIN: '/v1/auth/login',
      USER_LOGOUT: '/v1/auth/logout',
      USER_FORGOT_PASSWORD: '/v1/auth/forgot_password',
      USER_RESET_PASSWORD: '/v1/auth/reset_password_page/:resetPasswordToken',
      USER_CHNAGE_PASSWORD: '/v1/auth/change_password',
      USER_CHECK_SESSION: '/v1/auth/check_authenticated',
      EMAIL_VERIFICATION: '/v1/auth/email_verification'
    }

  }
}
