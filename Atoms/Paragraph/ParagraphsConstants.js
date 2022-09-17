import Paragraph from "./Paragraph.js";

const loginValidationContent = [
  new Paragraph("You have been logged in successfully", "", "success-failure")
    .paragraph,
  new Paragraph("Check your password", "", "password-failure").paragraph,
  new Paragraph("User with this email doesn't exist", "", "user-failure")
    .paragraph,
];

// const smallLetterPasswordValidationContent = new Paragraph(
//   "A small (loswercase) letter",
//   "letter",
//   "invalid"
// ).paragraph;
// const capitalLetterPasswordValidationContent = new Paragraph(
//   "A capital (uppercase) letter",
//   "capital",
//   "invalid"
// ).paragraph;
// const numbersLetterPasswordValidationContent = new Paragraph(
//   "A number",
//   "number",
//   "invalid"
// ).paragraph;
// const charactersLetterPasswordValidationContent = new Paragraph(
//   "A symbol",
//   "characters",
//   "invalid"
// ).paragraph;

// const confirmPasswordValidationContent = new Paragraph(
//   "Passwords doesn't match",
//   "",
//   "confirm-failure"
// ).paragraph;

// const passwordValidationParagraphs = [
//   passwordValidationTitle,
//   smallLetterPasswordValidationContent,
//   capitalLetterPasswordValidationContent,
//   numbersLetterPasswordValidationContent,
//   charactersLetterPasswordValidationContent,
// ];

// const userNameValidationContent = new Paragraph(
//   "All small (lowercase) letters and starts with a character",
//   "small-letters",
//   "invalid"
// ).paragraph;

// const emailValidationContent = new Paragraph(
//   "Valid email",
//   "email-val",
//   "invalid"
// ).paragraph;

// const emailValidationParagraphs = [
//   emailValidationTitle,
//   emailValidationContent,
// ];

export {
  loginValidationContent
}