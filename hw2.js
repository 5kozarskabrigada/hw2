// 1. Написать функцию возведения числа в степень.

// function power(number, exponent)
// {
//     let res = number;
//     for (let i = 0; i < exponent - 1; i++) {
//         res *= number;
//     }
//     return res;
// }

// const num = prompt();
// const ex = prompt();
// const resPower = power(num, ex);
// alert(resPower);

// 2. Написать функцию поиска наибольшего общего делителя.

// function gfc(a, b)
// {
//     for (let i = a; i > 0; i--) {
//       if(a % i == 0 && b % i ==0)
//       {
//         return i;
//       }
//     }
//     return -1;

// }

// const a = prompt();
// const b = prompt();
// const resGCF = gfc(a, b);
// alert(resGCF);


// 3. Написать функцию для поиска максимальной цифры в числе.

// function maxDigit(number)
//  {

//     let max = 0;

//     for (let i = number; i > 0; i = Math.floor(i / 10))
//     {
//         const dig = i % 10;
//         if (dig > max) {
//             max = dig;
//         }
//     }


//     return max;
// }

// console.log(maxDigit(52));

// 4. Написать функцию, которая определяет простое ли переданное число.

// function isPrimeNumber(number)
// {
//     let divCount = 0;
//     for (let i = 0; i <= number; i++) {
//         if (number % i == 0) {
//             divCount+=1;
//         }
//     }

//     if(divCount > 2)
//     {
//         return false;
//     }
//     return true;
// }


// console.log(isPrimeNumber(7));

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
//     Например: число 18 – множители 2 * 3 * 3.

// function multiples(number)
// {
//     let multipleArr = [];
//     let currentNum = number;

//     for (let i = 2; i <= currentNum; i+= 1) {
       
//         while(currentNum % i === 0)
//         {
//             multipleArr.push(i);
//             currentNum /= i;
//         }


//     }
//     return multipleArr;


// }


// function showArr(arr)
// {
//     let equation ="";
//     arr.forEach(element => {
//         equation += element;
//         equation += "*";
//     });
//     console.log(equation);
// }



// const resMultiples = multiples(18);
// showArr(resMultiples);


// 6. Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
//     Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8.


// function fibonacci(number) 
// {

//     if (number === 1 || number === 2)
//     {
//         return 1;
//     }

//     let f = 1;
//     let s = 1;

//     for (let i = 3; i <= number; i++)
//     {

//         let temp = f + s;
//         f = s;
//         s = temp;
//     }

//     return s;
// }

// console.log(fibonacci(6));