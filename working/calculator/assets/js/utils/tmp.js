const cloneNumbers = [...numbers];
function operatorSolver() {
  let result = Number(firstNumber);
  let currentOperatorIndex = operators.findIndex((operator) => operator === "*" || operator === "/");

  // Thực hiện phép tính nhân chia trước
  while (currentOperatorIndex !== -1) {
    const number = Number(cloneNumbers[currentOperatorIndex]);
    const operator = operators[currentOperatorIndex];

    switch (operator) {
      case "*":
        result *= number;
        break;
      case "/":
        result /= number;
        break;
      default:
        console.log("bug!");
        return result;  
    }

    // Xóa số và toán tử đã được xử lý
    cloneNumbers.splice(currentOperatorIndex, 1);
    operators.splice(currentOperatorIndex, 1);

    // Tìm vị trí của toán tử nhân chia tiếp theo
    currentOperatorIndex = operators.findIndex((operator) => operator === "*" || operator === "/");
  }

  // Thực hiện phép tính cộng trừ sau
  for (let i = 0; i < cloneNumbers.length; i++) {
    const number = Number(cloneNumbers[i]);
    const operator = operators[i];

    switch (operator) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      default:
        console.log("bug!");
        return result;
    }
  }

  return result;
}
