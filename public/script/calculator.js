
  // Get the display element where the result will be shown
  const display = document.getElementById('display');

  // Store the current math expression as a string
  let expression = '';

  // Format a number with commas (e.g., 1000 -> 1,000)
  function formatNumber(num) {
    if (isNaN(num)) return num; // Return if it's not a number (e.g., operator)
    const parts = num.toString().split("."); // Split integer and decimal parts
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas to integer part
    return parts.join("."); // Join integer and decimal parts back
  }

  // Remove all commas from a formatted string (e.g., 1,000 -> 1000)
  function removeCommas(str) {
    return str.replace(/,/g, '');
  }

  // Add a value (number or operator) to the expression
  function append(value) {
    // Replace '0' with the value if it's not a decimal point
    if (display.textContent === '0' && value !== '.') {
      expression = value;
    } else {
      expression += value; // Add the new value to the expression
    }

    const cleaned = removeCommas(expression); // Remove commas before formatting

    if (!/[+\-*/.%]$/.test(value)) {
      // If the last character is a number or dot, format the expression
      const formatted = formatExpression(cleaned);
      display.textContent = formatted;
    } else {
      // Don't format if the last character is an operator
      display.textContent = expression;
    }
  }

  // Format the entire expression: commas for numbers, leave operators as-is
  function formatExpression(expr) {
    return expr
      .split(/([+\-*/%])/) // Split expression by operators
      .map(part => {
        // Format only numbers, leave operators unchanged
        return isNaN(part) || part === '' || /[+\-*/%]/.test(part)
          ? part
          : formatNumber(part);
      })
      .join('');
  }

  // Clear the display and reset the expression
  function clearDisplay() {
    display.textContent = '0';
    expression = '';
  }

  // Toggle positive/negative sign of the current number
  function toggleSign() {
    if (display.textContent !== '0') {
      let current = removeCommas(display.textContent);
      if (current.startsWith('-')) {
        current = current.slice(1); // Remove '-' if already negative
      } else {
        current = '-' + current; // Add '-' to make it negative
      }
      expression = current;
      display.textContent = formatExpression(current);
    }
  }

  // Evaluate the expression and show the result
  function calculate() {
    try {
      const cleaned = removeCommas(expression).replace('%', '/100'); // Convert % to division
      const result = eval(cleaned); // Evaluate the expression
      expression = result.toString(); // Save the result for further use
      display.textContent = formatNumber(result); // Format and display the result
    } catch {
      // Handle invalid input or errors
      display.textContent = 'Error';
      expression = '';
    }
  }

