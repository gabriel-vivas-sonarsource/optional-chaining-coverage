// Contrived code, makes no sense in real life
export class A {
  value: string | null

  constructor() {
    this.value = null;
  }

  setValue(value: string) {
    this.value = value
  }

  // This optional chaining below makes no sense
  // since `this` will always be defined when accesing through
  // an instance. Unit tests will never fully cover this branch.
  // One would need to `apply` or `call` the method without an instance.
  // This is likely just a mistake or confusion.
  message() {
    this.log(typeof this?.value)
  }

  log(...args: string[]) {
    console.log(...args)
  }
}

