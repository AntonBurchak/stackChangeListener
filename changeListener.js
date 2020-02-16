

Array.prototype.push = function (el) {

    if (this.setListener === 'push') {
        this[this.length] = this.callback(el) || el;
    } else {
        this[this.length] = el;
    }
    return this;
};

Array.prototype.setListener = function (changeType) {
    this.addChangeListener(changeType);
};

Array.prototype.print = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
        
    }
};

Array.prototype.addChangeListener = function (changeType, callback) {
    this.setListener = changeType;
    this.callback = callback;
};

let arr = [1, 2, 3];
arr.addChangeListener('push', function (el) {console.log(`Вы изменили ${this} добавив элемент ${el}`)});
arr.push(44);


arr.push(12);
arr.push(5);


arr.push(5);
arr.push(5);




// arr.print(1);



arr.print();

// arr.print();

// function addChangeListener() {
//     return console.log(this, arguments[0]);
// } 
