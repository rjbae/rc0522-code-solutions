const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('sumResult:', sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('productResult:', product);

const balance = account.reduce((total, account) => {
  const amount = account.amount;
  if (account.type === 'deposit') {
    return total + amount;
  } else {
    return total - amount;
  }
}, 0);

console.log('balanceResult:', balance);

const composite = traits.reduce((trait, property) => {
  const newObj = Object.assign(trait, property);
  return newObj;
});

console.log('compositeResult:', composite);
