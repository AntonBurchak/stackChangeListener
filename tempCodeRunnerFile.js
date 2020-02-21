// jshint esversion:6
let setTypes = [];

class Stack {
    constructor() {
        this.data = Array.from(arguments) || [];
        this.size = Array.from(arguments).length;
        this.change = {
            target: this.data,
        };
    }

    push(el) {
        let data = this.data;

        this.change.type = 'push';

        if (setTypes.length) {
            setTypes.forEach(element => {
                if (element[0] === 'push') {
                    data[data.length] = element[1](el, this.change) || el;
                } else {
                    data[data.length] = el;
                }
            });
        } else {
            data[data.length] = el;
        }
        this.size += 1;
        return data;
    }
    pop(el) {
        let data = this.data;

        this.change.type = 'pop';

        el = data[data.length - 1];


        let tmp = [];
    
        for (let i = 0; i < data.length - 1; i++) {
            tmp[tmp.length] = data[i];
        }
        data.length = 0;
        for (let i = 0; i < tmp.length; i++) {
            data[i] = tmp[i];
        }
    
        if (setTypes.length) {
            setTypes.forEach(element => {
                if (element[0] === 'pop') {
                    element[1](el, this.change);
                }
            });
        }
        this.size -= 1;

        return data;
    }
    
    shift() {
         
    }

    addChangeListener (changeType, callback) {
        setTypes[setTypes.length] = [changeType, callback];
    
        this.setListeners = changeType;
        this.callback = callback;
    }
}

let a = new Stack();
a.addChangeListener('push', (el, change) => console.warn('pushed: ' + el, change.target, change.type));
// a.addChangeListener('pop', (el, change) =>  console.error('removed: ' + el, change.target, change.type));
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
console.log(a);

a.pop();
console.log(a);
