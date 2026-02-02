# Akan Name Generator

## Project Description
The Akan Name Generator is a simple web application that calculates the day of the week a user was born using a mathematical formula and assigns them an Akan name based on their gender. Akan names originate from Ghanaian culture, where children are named according to the day they are born.

This project demonstrates the use of HTML forms, CSS styling, and JavaScript logic including arrays, functions, operators, control flow, and input validation.

---

## Author
**Emmanuel Kipkoech**

---

## Setup Instructions
1. Clone or download the repository from GitHub  
2. Open the project folder  
3. Open `index.html` in a web browser  
4. Enter your day, month, year of birth, and select your gender  
5. Click **Generate Name** to see your Akan name  

---

## Behavior Driven Development (BDD)

| Behavior | Input | Output |
|--------|-------|--------|
| User enters valid date and gender | Day, Month, Year, Gender | Akan name is displayed |
| User leaves a field empty | Missing input | Alert message shown |
| User enters invalid date or month | Day > 31 or Month > 12 | Alert message shown |

---

## Day Calculation Logic
The application calculates the day of the week using the formula:

d = ((4CC − 2CC − 1) + (5YY / 4) + (26(MM + 1) / 10) + DD) mod 7


## Technologies Used
- HTML
- CSS
- JavaScript

---

## License
MIT License  
© 2026 Emmanuel Kipkoech
