/* eslint-disable @typescript-eslint/naming-convention */
const VALIDATION_CONTENT = {
    LOGIN_FORM: {
        LOGGED_IN_SUCCESS: "You have been logged in successfully",
        EMAIL_ADDRESS_CHECK:"User with this email doesn't exist",
        PASSWORD_CHECK: "Check your password"
    },
    REGISTER_FORM: {
        CONFIRM_PASSWORD_CHECK: "Passwords doesn't match",
        EMAIL_ADDRESS_CHECK:"Valid email",
        PASSWORD_CHECK: {
            SMALL_LETTER_CHECK:"A small (loswercase) letter",
            CAPITAL_LETTER_CHECK:"A capital (uppercase) letter",
            NUMBERS_CHECK:"A number",
            CHARCHTERS_CHECK:"A symbol"              
        },
        USER_NAME_CHECK:"All small (lowercase) letters and starts with a character"
    }
}

export { VALIDATION_CONTENT };