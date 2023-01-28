// EXERCISES 1

// 1.
class Car {
  constructor(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
  }

  checkMotion() {
    if (this.motion > 0) {
      return "car is moving.";
    } else {
      return "car is not moving.";
    }
  }

  accelerate(speedUp) {
    return `New speed is: ${(this.motion += speedUp)}`;
  }

  break(speedDown) {
    if (this.motion - speedDown >= 0) {
      return `Speed decresed: ${(this.motion -= speedDown)}`;
    } else {
      return `Wrong break.`;
    }
  }

  status() {
    return `${this.brand} ${this.model} is running ${
      this.motion
    }km/h, ${this.checkMotion()}`;
  }

  stopTheCar() {
    this.motion = 0;
    return `Tha car has stopped.`;
  }
}

var car1 = new Car("Toyota", "Auris", 50);
console.log(car1);
console.log(car1.checkMotion());
console.log(car1.accelerate(10));
console.log(car1.break(20));
console.log(car1.break(100));
console.log(car1.status());
console.log(car1.stopTheCar());
console.log(car1.status());

var car2 = new Car("Ford", "Mondeo", 70);
var car3 = new Car("WV", "Golf", 75);

// 2.
class TV {
  constructor(brand, channel, volume) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
    this.resetTv(); // Ovako se podesavaju default parametri
  }

  volumeUp(volumeUp) {
    return `Volume: ${(this.volume += volumeUp)}`;
  }

  newChannel(newChannel) {
    if (newChannel > 0 && newChannel <= 50) {
      return `Channel: ${newChannel}`;
    } else {
      return `Wrong channel`;
    }
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
  }

  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

var tv1 = new TV("LG");
console.log(tv1);
console.log(tv1.volumeUp(25));
console.log(tv1.newChannel(25));
console.log(tv1.newChannel(75));
console.log(tv1.status());
console.log(tv1.resetTv());
console.log(tv1.status());

// 2. DRUGA VARIJANTA
class TV {
  constructor(brand) {
    this.brand = brand;
    this.resetTv();
  }

  volumeUp(volumeUp) {
    return `Volume: ${(this.volume += volumeUp)}`;
  }

  newChannel(newChannel) {
    if (newChannel > 0 && newChannel <= 50) {
      return `Channel: ${newChannel}`;
    } else {
      return `Wrong channel`;
    }
  }

  resetTv() {
    this.channel = 1;
    this.volume = 50;
  }

  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}
