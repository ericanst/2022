// function add(){
//     var a = Array.prototype.slice.call(arguments);
//     var b = function(){
//         a.push(...arguments);
//         return b;
//     };
//     b.toString = function(){
//         return a.reduce((x, y)=>{
//             return x + y;
//         })
//     }
//     return b;
// }
// console.log(add(1)(2)(3).toString());

// function a(fun, time) {
//     let timer = null;
//     return function () {
//         if (timer) {
//             clearTimeout(timer);
//         } else {
//             timer = setTimeout(() => {
//                 fun.apply(this, arguments)
//             }, time)
//         }
//     }
// }

// function a(fun, time){
//     let timer = null;
//     return function(){
//         if(!timer){
//             timer = setTimeout(()=>{
//                 timer = null;
//                 fun.apply(this, arguments)
//             },time)
//         }
//     }
// }

// class Person {
//     constructor(name){
//         this.name = name
//     }

//     data(){
//         console.log('喝水')
//     }
// }

// class Test extends Person {
//     constructor(name, age){
//         super(name)
//         this.age = age
//     }
//     second(){
//         console.log(`我叫${this.name}，今年${this.age}岁`)
//     }
// }
// const test = new Test('谭亚伟', 26)
// console.log('test', test)
// test.second()
// test.data()

function a(){
    let b = 1
    return function(){
        console.log(b)
    }
}
a()()