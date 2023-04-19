// let arrA = ['a', 'b', 'c', 'd'];
// // let arrB = arrA; //얕은복사

// let arrB = arrA.slice();
// console.log('arrA : ', arrA);
// console.log('arrB : ', arrB);

// console.log('값 변경 후');

// arrA[3] = 'e';
// arrB[4] = 'f';
// console.log('arrA : ', arrA);
// console.log('arrB : ', arrB);

// let arrA = ['a', 'b', ['c', 'd']];
// let arrB = arrA.slice();
// console.log('arrA : ', arrA);
// console.log('arrB : ', arrB);

// console.log('값 변경 후');

// arrA[0] = 'z';
// arrB[0] = 'x';

// arrA[2][0] = 'e';
// arrB[2][1] = 'f';
// console.log('arrA : ', arrA);
// console.log('arrB : ', arrB);

//배열을 복사하는 방법 slice(), concat(), spread연산자, Array.from()
//1차원배열에 대해서는 깊은 복사가 허용되나
//2차원 이상의 배열부터는 깊은복사 ❌

// let arr = [[1, 2, 3, 4, 5]];
// let arr2 = Array.from(arr);
// arr2[0][0] = 10;
// console.log('arr:', arr);
// console.log('arr2:', arr2);
