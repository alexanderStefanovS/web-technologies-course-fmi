
//#region async examples with setTimeout 

// console.log('start');

// setTimeout(() => {

//     console.log('5 seconds later...');

//     setTimeout(() => {
//         console.log('10 seconds later...');
//     }, 5000);

// }, 5000);

// console.log('end');

// function delay() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 5000);
//     })
// }

// delay()
//     .then(() => {
//         console.log('5 seconds later...');
//     });

//#endregion

//#region ajax call example

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
       console.log(data); 
    });

//#endregion


