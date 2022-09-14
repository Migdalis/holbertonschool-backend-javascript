export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    if (this.constructor[Symbol.species]) {
      return new this.constructor[Symbol.species]();
    }
    return new this.constructor();
  }
}
