type PrecedenceType = {
  [key: string]: number;
};

const infixToPostFix = (infix: string): string[] => {
  const precedence: PrecedenceType = {
    '^': 3,
    '*': 2,
    '/': 2,
    '%': 2,
    '+': 1,
    '-': 1,
  };
  const stack: string[] = [];
  let postfix: string[] = [];
  let curNum = '';

  for (let i = 0; i < infix.length; i++) {
    if (/\d+/.test(infix[i])) {
      curNum += infix[i];
    } else {
      if (curNum) {
        postfix.push(curNum);
        curNum = '';
      }
      if (infix[i] === '(') {
        stack.push(infix[i]);
      } else if (infix[i] === ')') {
        while (stack[stack.length - 1] !== '(') {
          postfix.push(stack.pop() as string);
        }
        stack.pop();
      } else {
        while (precedence[stack[stack.length - 1]] >= precedence[infix[i]]) {
          postfix.push(stack.pop() as string);
        }
        stack.push(infix[i]);
      }
    }
  }

  if (curNum) {
    postfix.push(curNum);
  }
  while (stack.length) {
    postfix.push(stack.pop() as string);
  }

  return postfix;
};

const calculatePostFix = (postfix: string[]): string => {
  const stack: number[] = [];

  for (let i = 0; i < postfix.length; i++) {
    if (/\d+/.test(postfix[i])) {
      stack.push(Number(postfix[i]));
    } else {
      const b = stack.pop() as number;
      const a = stack.pop() as number;
      switch (postfix[i]) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        case '%':
          stack.push(a % b);
          break;
        case '^':
          stack.push(Math.pow(a, b));
          break;
      }
    }
  }

  return stack[0].toString();
};

export { calculatePostFix, infixToPostFix };
