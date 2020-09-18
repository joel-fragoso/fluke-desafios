const arr = [1, 1, 2, 3, 2];

if (arr.length > 0 && arr.length < 100) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      num = arr[i];
    }
  }

  console.log(`O número exclusivo é: ${num}.`);
}
