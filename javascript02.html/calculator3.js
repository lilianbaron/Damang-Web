/*
* Level 3 : new Calculator() <constructor function>
*/

function Calculator() {
  this.sum = 0;
  this.note = '';

  this.plus = function (value) {
    this.sum += value;
    this.note += ' + ' + value;
  };
  this.minus = function (value) {
    this.sum -= value;
    this.note += ' - ' + value;
  };
  this.multiple = function (value) {
    this.sum *= value;
    this.note += ' * ' + value;
  };
  this.divide = function (value) {
    this.sum /= value;
    this.note += ' / ' + value;
  };
  this.init = function (value) {
    if(arguments.length == 0) {
      this.sum = 0;
      this.note = '';
    }else{
      this.sum = value;
      this.note += + value;
    }
  };

    this.printResult = function () {
      console.log(this.note + " = " + this.sum);
    };
}
