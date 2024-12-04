// let num = 15;
let num = Math.floor(Math.random() * 16);
console.log('確認用の数字です : ' + num);

// if (num === 3 || num === 6 || num === 9 || num === 12 || num === 15 )
//   console.log ('')

// if (num === 5 || num === 10 || num === 15 )
//   console.log('')

if (num !== 0){
  if (num % 3 === 0 && num % 5 === 0){
   console.log('3と5の倍数です'); 
 } else if (num % 5 === 0){
   console.log('5の倍数です');
 } else if (num % 3 === 0){
   console.log('3の倍数です');
 } else {
   console.log(num)
}
}
