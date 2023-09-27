function merge(collection_1: number[], collection_2: number[]): number[] {
    const mergedArray = [...collection_1, ...collection_2];
    return mergedArray;
  }
  
  const num1 = [48, 2, 18, 65, 42, 8];
  const num2 = [1, 6, 53, 5, 21, 84];
  const sum = merge(num1, num2);

  for (let i = 0; i < sum.length - 1; i++) {
    for (let j = 0; j < sum.length - i - 1; j++) {
      if (sum[j] > sum[j + 1]) {
        const temp = sum[j];
        sum[j] = sum[j + 1];
        sum[j + 1] = temp;
      }
    }
  }
 
  console.log(`${sum.join(', ')}`);
  