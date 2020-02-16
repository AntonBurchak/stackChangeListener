

Array.prototype.push = function (el) {
    this[this.length] = el; 

    this.on = false;

    if(this.on) this.changeList = ['push', el];
    
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



Array.prototype.addChangeListener = function (on, changeType, callback) {
    this.on = true;
    // if (this.changeList[0] === changeType) callback(this.changeList[1]); 
};

let arr = [1, 2, 3];

arr.push(1);


arr.push(2);


arr.addChangeListener(true, 'push', (el) => console.log(true, el));

// arr.print(1);




// arr.print();

// function addChangeListener() {
//     return console.log(this, arguments[0]);
// } 
