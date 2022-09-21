import Paragraph from "./Paragraph.js";

const loginValidationContent: HTMLParagraphElement[] = [
  new Paragraph("You have been logged in successfully", "", "success-failure")
    .paragraph,
  new Paragraph("Check your password", "", "password-failure").paragraph,
  new Paragraph("User with this email doesn't exist", "", "user-failure")
    .paragraph,
];

const smallLetterPasswordValidationContent: HTMLParagraphElement = new Paragraph(
  "A small (loswercase) letter",
  "letter",
  "invalid"
).paragraph;
const capitalLetterPasswordValidationContent: HTMLParagraphElement = new Paragraph(
  "A capital (uppercase) letter",
  "capital",
  "invalid"
).paragraph;
const numbersLetterPasswordValidationContent: HTMLParagraphElement = new Paragraph(
  "A number",
  "number",
  "invalid"
).paragraph;
const charactersLetterPasswordValidationContent: HTMLParagraphElement = new Paragraph(
  "A symbol",
  "characters",
  "invalid"
).paragraph;

const confirmPasswordValidationContent : HTMLParagraphElement= new Paragraph(
  "Passwords doesn't match",
  "",
  "confirm-failure"
).paragraph;

const userNameValidationContent: HTMLParagraphElement = new Paragraph(
  "All small (lowercase) letters and starts with a character",
  "small-letters",
  "invalid"
).paragraph;

const emailValidationContent: HTMLParagraphElement = new Paragraph(
  "Valid email",
  "email-val",
  "invalid"
).paragraph;

export {
  loginValidationContent,
  smallLetterPasswordValidationContent,
  capitalLetterPasswordValidationContent,
  numbersLetterPasswordValidationContent,
  charactersLetterPasswordValidationContent,
  confirmPasswordValidationContent,
  userNameValidationContent,
  emailValidationContent,
};
