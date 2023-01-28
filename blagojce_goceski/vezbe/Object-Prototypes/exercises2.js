// EXERCISES 2
// 1.
class Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    bookDate,
    bookCheckedOut,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numberOfPages = numberOfPages;
    this.bookDate = bookDate;
    this.bookCheckedOut = bookCheckedOut;
    this.discarded = discarded;
  }
}

class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    bookDate,
    bookCheckedOut,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPages,
      bookDate,
      bookCheckedOut,
      discarded
    );
  }

  bookCheckOut() {
    this.bookCheckedOut++;
    return `Manual cheched out ${this.bookCheckedOut} times.`;
  }

  checkDate() {
    var a = new Date();
    if (a.getFullYear() - this.bookDate > 5) {
      this.discarded = true;
      return `The manual is discarded`;
    } else {
      return `The manual date is OK`;
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    bookDate,
    bookCheckedOut,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPages,
      bookDate,
      bookCheckedOut,
      discarded
    );
  }

  bookCheckOut() {
    this.bookCheckedOut++;
    if (this.bookCheckedOut > 100) {
      this.discarded = true;
      return `The novel is discarded`;
    } else {
      return `Novel cheched out ${this.bookCheckedOut} times.`;
    }
  }
}

var manual1 = new Manual(
  "React",
  "John Doe",
  2001,
  23654214,
  250,
  2019,
  25,
  false
);

console.log(manual1);
console.log(manual1.bookCheckOut());
console.log(manual1.checkDate());

var novel1 = new Novel(
  "Zima je",
  "JAne Doe",
  2005,
  23654514,
  150,
  2020,
  98,
  false
);

console.log(novel1);
console.log(novel1.bookCheckOut());
console.log(novel1.bookCheckOut());
console.log(novel1.bookCheckOut());

// 2. CALCULATOR
// 2. CALCULATOR
class StackCalc {
  constructor(instructions) {
    if (instructions.length == 0) {
      return console.log(`False`);
    }

    this.instructions = instructions.split(" ");
    this.numbers = [];
    this.operators = [];

    for (let i = 0; i < this.instructions.length; i++) {
      if (
        this.instructions[i] == "+" ||
        this.instructions[i] == "-" ||
        this.instructions[i] == "*" ||
        this.instructions[i] == "/" ||
        this.instructions[i] == "DUP" ||
        this.instructions[i] == "POP" ||
        this.instructions[i] == "PSH"
      ) {
        this.operators.push(this.instructions[i]);
      } else {
        this.numbers.push(+this.instructions[i]);
      }
    }

    console.log("Ulazni niz:", this.instructions);
    console.log("Niz brojeva:", this.numbers);
    console.log("Niz operatora:", this.operators);
  }

  plus() {
    console.log();
    console.log("Operacija sabiranje zadnja 2 broja");
    let a = this.numbers.pop();
    let b = this.numbers.pop();
    this.numbers.push(a + b);
    console.log("Update-ovan niz sa brojevima:", this.numbers);
  }

  minus() {
    console.log();
    console.log("Operacija oduzimanje zadnja 2 broja");
    let a = this.numbers.pop();
    let b = this.numbers.pop();
    if (a > b) {
      this.numbers.push(a - b);
    } else {
      this.numbers.push(b - a);
    }
    console.log("Update-ovan niz sa brojevima:", this.numbers);
  }

  multiple() {
    console.log();
    console.log("Operacija mnozenje zadnja 2 broja");
    let a = this.numbers.pop();
    let b = this.numbers.pop();
    this.numbers.push(a * b);
    console.log("Update-ovan niz sa brojevima:", this.numbers);
  }

  divide() {
    console.log();
    console.log("Operacija delenje zadnja 2 broja");
    let a = this.numbers.pop();
    let b = this.numbers.pop();
    if (a > b) {
      this.numbers.push(a / b);
    } else {
      this.numbers.push(b / a);
    }
    console.log("Update-ovan niz sa brojevima:", this.numbers);
  }

  dupValue() {
    let a = this.numbers[0];
    // for (let i )
  }

  popValue() {}

  pshValue() {}

  getValue() {
    for (let i = 0; i < this.operators.length; i++) {
      if (this.operators[i] == "+") {
        this.plus();
      } else if (this.operators[i] == "-") {
        this.minus();
      } else if (this.operators[i] == "*") {
        this.multiple();
      } else if (this.operators[i] == "/") {
        this.divide();
      } else if (this.operators[i] == "DUP") {
        this.dupValue();
      } else if (this.operators[i] == "POP") {
        this.popValue();
      } else if (this.operators[i] == "PSH") {
        this.pshValue();
      }
    }
    return;
  }
}

var calc3 = new StackCalc("6 5 5 7 * - /");
calc3.getValue();

// 3. COFFEE SHOP
