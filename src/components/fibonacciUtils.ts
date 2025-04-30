export const generateFibonacci = (count: number): number[] => {
    const result: number[] = [];
    for (let i = 0; i < count; i++) {
      if (i === 0) result.push(0);
      else if (i === 1) result.push(1);
      else result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  };
  