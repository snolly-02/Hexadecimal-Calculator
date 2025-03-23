# Hexadecimal-Calculator

Category	Functional Requirements
Input Validation	
- Accept only valid hexadecimal numbers (0-9, A-F).
- Support up to 2-digit hexadecimal inputs (00 to FF).
- Convert lowercase letters to uppercase (e.g., a3 → A3).
- Reject invalid characters (e.g., G, Z, special characters, spaces).
- Prevent users from entering more than 2 digits.
- Display an error message for invalid inputs.
Arithmetic Operations	- Perform addition, subtraction, multiplication, and division using hexadecimal numbers.
- Prevent division by zero (display error message instead).
- Ensure results do not exceed 4-digit hexadecimal (0000 to FFFF).
- Round division results down to the nearest whole number (no decimal places).
- If subtraction results in a negative number, return 0 instead.
Output Handling	- Display results in hexadecimal format (A-F should remain uppercase).
- Ensure outputs always have at most 4 digits (e.g., 1F3A).
- Prevent the display of negative numbers (always return 0 if the result is negative).
- No decimal values should be displayed (whole numbers only).
- Show error messages for invalid operations.
User Interface (UI) & Usability	- Provide individual buttons for each digit (0-9, A-F).
- Provide separate buttons for operations (+, -, ×, ÷).
- Include a Clear (C) button to reset the input.
- Ensure users can calculate using only button clicks (no keyboard required).
- Ensure buttons are large enough for touchscreen use on mobile devices.
- Display a history of calculations (optional but improves usability).
System Behavior & Constraints	- The calculator must work in a web browser (desktop & mobile).
- The application should not require an internet connection to function.
- Ensure calculations are performed instantly upon pressing =.
- Support light and dark mode UI (optional but improves accessibility).
- Error handling: Prevent app crashes due to invalid inputs.
