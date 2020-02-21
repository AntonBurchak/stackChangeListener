// jshint esversion:6
class Stack {
    constructor() {
        this._data = Array.from(arguments) || [];
        this._size = Array.from(arguments).length;
        this._setTypes = [];
        this.change = {
            target: this._data
        };
    }

    push(el) {
        let setTypes = this._setTypes, data = this._data;
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
        this._size += 1;

        return data;
    }

    pop() {
        let setTypes = this._setTypes, data = this._data, tmp = [];
        this.change.type = 'pop';

        if (data.length >= 1) {
    
            for (let i = 0; i < data.length - 1; i++) {
                tmp[tmp.length] = data[i];
            }
           
            data = this._data = tmp;
        
            if (setTypes.length) {
                setTypes.forEach(element => {
                    if (element[0] === 'pop') {
                        element[1](data[data.length - 1], this.change);
                    }
                });
            }
            this._size -= 1;
            this.change.target = this._data;
        }
        else {
            throw new Error(`Stack is empty: remove is not a possible`);
        }

        return data;
    }

    addChangeListener(changeType, callback) {
        this._setTypes[this._setTypes.length] = [changeType, callback];
    
        this.setListeners = changeType;
        this.callback = callback;
    }

    removeChangeListener(changeType) {
        this._setTypes = this._setTypes.filter(el => el[0] != changeType);
    }
}

let a = new Stack();
let b = new Stack(1,2,3,4);

a.addChangeListener('push', (el, change) => console.log(el));
b.addChangeListener('pop', (el, change) => el);

a.push(1);
a.push(2);
a.push(3);

a.removeChangeListener('push');
a.push(4);



