// jshint esversion:6

function f() {
    return console.log(`Hello ${this.name}!`);
}

const ivan = {
    name: 'Ivan',
};
f();
let a = f.bind(ivan);
a();
f();

let args = ['arg1,', 'arg2'];

function f2(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    return console.log(this);
}
console.log(f2.apply(ivan, args));

(function (){
    return console.log('test');
})();
 
// call сразу вызывает функцию
// bind переопределяет контекст, не вызывая функцию. Что бы увидеть результат, нужно присвоить новую функцию переменной
// apply то же самое что и bind, только параметры функции можно передать в виде массива