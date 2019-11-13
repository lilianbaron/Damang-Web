/*
* level 2 : makeCalculator()
*/

function makeCalculator(){
  var calculator = new Object();
  calculator.sum = 0;
  calculator.note = '';

  calculator.plus = function (value) {
    this.sum += value;
    this.note += ' + ' + value;
  };

  calculator.minus = function(value) {
    this.sum -= value;
    this.note += ' - ' + value;
  };

  calculator.multiple = function(value) {
    this.sum *= value;
    this.note += ' * ' + value;
  };

  calculator.divide = function(value) {
    this.sum /= value;
    this.note += ' / ' + value;
  };

calculator.init = function (value) {
  if(arguments.length == 0) {
    this.sum = 0;
    this.note= '';
  } else {
    this.sum = value;
    this.note += + value;
  }
};

calculator.printResult = function (){
  console.log(this.note + " = " + this.sum);
}
   return calculator;

}
