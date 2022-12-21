// Для базового класу Vehicle реалізувати:

// - властивості:
// --- dimensions - габарити (об'єкт із довжиною, шириною, висотою),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата виробництва (використовувати вбудований об'єкт Date).

// - методи:
// --- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
// --- getAge() - повертає кількість років із дня виробництва.

class Vehicle {
  constructor(width, height, thickness, brand, model, manufactureDate) {
    this.dimensions = {
      width,
      height,
      thickness,
    };
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.manufactureDate}`;
  }
  getAge() {
    return new Date().getFullYear() - this.manufactureDate;
  }
}

// Дочірній клас PassengerTransport розширюється:

// - властивостями:
// --- passengerLimit - максимальна кількість пасажирських місць,
// --- passengerCount - кількість зайнятих пасажирських місць,

// - методом addPassenger() для додавання ще одного пасажира з перевіркою можливості додавання (чи ще незайняті місця) - повертає true (якщо пасажир доданий) або false (якщо не доданий).

// Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб:
// бренд,
// модель,
// вік,
// максимальна кількість пасажирських місць.

class PassengerTransport extends Vehicle {
  constructor(
    width,
    height,
    thickness,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(width, height, thickness, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    return this.passengerCount < this.passengerLimit;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.getAge()} years old, ${
      this.passengerLimit
    } passengers max.`;
  }
}

// Дочірній клас FreightTransport розширюється:

// - властивістю:
// --- capacity - вантажопідйомність,

// - методом checkLoadingPossibility(weight) - для перевірки можливості завантаження маси weight. Повертає булеан.

// Перевизначити метод getFullInfo:
// бренд,
// модель,
// вік,
// вантажопідйомність.

class FreightTransport extends Vehicle {
  constructor(
    width,
    height,
    thickness,
    brand,
    model,
    manufactureDate,
    capacity
  ) {
    super(width, height, thickness, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.getAge()} years old, ${
      this.capacity
    } kg.`;
  }
}

// Створити об'єкти всіх класів ієрархії, протестувати роботу методів.

const vehicle1 = new Vehicle(60, 80, 40, 'Avanti', 'SpeedLover7000', 2021);

console.group('Vehicle class based :');
console.dir(vehicle1);
console.log(vehicle1.getFullInfo());
console.log('Age = ' + vehicle1.getAge());
console.groupEnd();

const vehicle2 = new PassengerTransport(
  360,
  180,
  260,
  'Lexus',
  'SpeedKiller',
  2019,
  6,
  5
);

console.group('PassengerTransport class based :');
console.dir(vehicle2);
console.log(vehicle2.addPassenger());
console.log(vehicle2.getFullInfo());
console.groupEnd();

const vehicle3 = new FreightTransport(
  900,
  240,
  300,
  'Maincat',
  'LoadKiller10000',
  2016,
  6000
);

console.group('FreightTransport class based :');
console.dir(vehicle3);
console.log(vehicle3.checkLoadingPossibility(6001));
console.log(vehicle3.getFullInfo());
console.groupEnd();
