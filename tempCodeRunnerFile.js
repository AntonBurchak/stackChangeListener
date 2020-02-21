// // jshint esversion:6
let setTypes = [];
Array.prototype.push = function(el) {
    // console.log(setTypes);
    if (setTypes.length) {
        setTypes.forEach(element => {
            if (element[0] === 'push') {
                this[this.length] = element[1](el) || el;
            } else {
                this[this.length] = el;
            }
        });
    } else {
        this[this.length] = el;
    }

    return this;
};

Array.prototype.pop = function(el) {

    el = this[this.length - 1];


    let tmp = [];

    for (let i = 0; i < this.length - 1; i++) {
        tmp[tmp.length] = this[i];
    }
    this.length = 0;
    for (let i = 0; i < tmp.length; i++) {
        this[i] = tmp[i];
    }

    if (setTypes.length) {
        setTypes.forEach(element => {
            if (element[0] === 'pop') {
                element[1](el);
            }
        });
    }

    return this;
};

// Array.prototype.setListeners = function (changeType) {
//     this.addChangeListener(changeType);

// };

Array.prototype.print = function() {
    console.log(this);
};

Array.prototype.addChangeListener = function(changeType, callback) {
    setTypes[setTypes.length] = [changeType, callback];

    this.setListeners = changeType;
    this.callback = callback;
};

let arr = [],
    arr2 = [];
arr2.addChangeListener('pop', (el) => {
    arr.push(el);
    return console.log(arr);
});

arr2.push(1);
arr2.push(2);
arr2.push(3);
console.log(arr2);
arr2.pop();
arr2.pop();
arr2.pop();

class Stack {
    constructor() {
        this.data = Array.from(arguments) || [];
        this.size = Array.from(arguments).length;
        
    }

    push(el) {
        if (setTypes.length) {
            setTypes.forEach(element => {
                if (element[0] === 'push') {
                    this.data[this.data.length] = element[1](el) || el;
                } else {
                    this.data[this.data.length] = el;
                }
            });
        } else {
            this.data[this.data.length] = el;
        }
        this.size += 1;
        return this.data;
    }

    addChangeListener (changeType, callback) {
        setTypes[setTypes.length] = [changeType, callback];
    
        this.setListeners = changeType;
        this.callback = callback;
    }
}

let a = new Stack(44, 22);
a.addChangeListener('pop', (el) => console.log('pushed: ' + el));
a.push(1);
a.push(2);
console.log(a);