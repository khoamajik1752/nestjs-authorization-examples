function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target: any) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}

function first() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('first(): called');
  };
}

function second() {
  console.log('second(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('second(): called');
  };
}
export class test {
  @first()
  @second()
  hello() {
    console.log('hello');
  }
}
function sealed(constructor: Function) {
  console.log('sealed');
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}
new BugReport('t');
