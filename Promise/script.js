 'use strict';

// console.log('Запрос данных ...');

// const req = new Promise(function(resolve, rejest) {

//     setTimeout(() => {
//         console.log('Подготовка данных ...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//       resolve(product);
//        // rejest();
//     }, 2000);
    
// }); 

// req.then((product) =>{
    
//         return new Promise((resolve, rejest) =>{
            
//                 setTimeout(() => {
//                     product.status = 'order';
//                     resolve(product);
//                 }, 2000);
//         });

//         }).then(data => {
//             data.modify = true;
//             return data;
         
//         }).then(data => {
//             console.log(data);
//         }).catch(() => {
//             console.error('Произошла ошибка');
//         }).finally(() =>{
//             console.log('Finaly'); // Можно очистить форму при любом исходе
//         });

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));
// запускаем опрацию, через определённый промежуток времени

// Promise.all([test(1000), test(2000), test(3000)]).then(() => {
//    //  console.log('All');
//  });


//    Promise.race([test(1000), test(2000), test(3000)]).then(() => {
//     console.log('All'); // до первого отработанного 
// });



//  Filter

// const names = ['IVAN', 'Ann', 'Ksenia', 'Wolkaxat'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
//     });

//     console.log(shortNames);

// const longNames = names.filter(function(name) {
//         return name.length >= 6;
//         });

// console.log(longNames);



//    map


// const answers = ['IVAN', 'AnnA', 'KseRnia', 'WolkFaxat'];

// const result = answers.map(item => item.toLowerCase(answers));


// // const result = answers.map(item => {
// //     return item.toLowerCase();
// //});

// console.log(result);


//   every / some

//const same = [4, 'wwdwqd', 'fvfb'];
//const same = [4, 8, 7];



//console.log(same.some(item => typeof(item) === 'number'));// some 1 elrment true

//console.log(same.every(item => typeof(item) === 'number')); // every все єлеьенты true


// reduce

// const arr = [4, 5, 1, 2, 3, 6];

// const res = arr.reduce((sum, current) => sum + current, 3); // последовательное добавление в массиве
// // 3числовой параметр из вне
// console.log(res);


// const arr = ['ddd', 'fff', 'eee', 'ttt', 'vvv'];

// //const res = arr.reduce((sum, current) => sum + ', '+ current); // последовательное добавление строк в массиве
//                                                                // через запятую
//            const res = arr.reduce((sum, current) => `${sum}, ${current}, dryzba`); 
// console.log(res);      


const obj = {
    ivan:'person',
    Abb: 'person',
    dog: 'animal',
    cat: 'animal'
};
//const newArr = Object.entries(obj);

const newArr = Object.entries(obj)
// .filter(item => item[1] ==='person');
.filter(item => item[1] ==='animal')
.map(item => item[0]);

console.log(newArr);