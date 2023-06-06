export function operatorHtml([[firstNumber, ...numbers], [...operators]]) {
    if (operators.length > 0) {
        function convertOperatorToIcon() {
            return operators.map(operator => {
                switch(operator) {
                    case "*":
                        return `<i class="fa-solid icon calc-icon fa-xmark"></i>`;
                    case "+":
                        return `<i class="fa-solid icon calc-icon fa-plus"></i>`;
                        case "-":
                        return `<i class="fa-solid icon calc-icon fa-minus"></i>`;
                    case "/":
                        return `<i class="fa-solid icon calc-icon fa-percent"></i>`;
                    default:
                        console.log('bug!')
                }
            })
        }
        
        const cloneNumbers = [...numbers];
        function operatorSolver() {
            let result = Number(firstNumber);
            let currentOperatorIndex = 0;
          
            for (let i = 0; i < cloneNumbers.length; i++) {
              const number = Number(cloneNumbers[i]);
              const operator = operators[currentOperatorIndex];
          
              switch (operator) {
                case "*":
                  result *= number;
                  break;
                case "+":
                  result += number;
                  break;
                case "-":
                  result -= number;
                  break;
                case "/":
                  result /= number;
                  break;
                default:
                  console.log("bug!");
                  return result;
              }
          
              currentOperatorIndex++;
            }
          
            return result;
          }

        const operatorIcons = convertOperatorToIcon();
        
        return {operatorHtml: operatorIcons.reduce((acc, curr) =>
            acc.concat(`<span class="operator">${curr}</span>`, numbers.shift())
        , [firstNumber])
        .filter(x => x && x !== true || x === 0)
        .join(''),
        result: operatorSolver(),
    }
    } else {
        var output = [firstNumber, ...numbers].join('');
        return {operatorHtml: output,
        result: output,
        };
    }
}