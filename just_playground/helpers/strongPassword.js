class Helper {
  data = {
    set: {
      alphabet: {
        eng: {
          lower: 'abcdefghijklnmopqrstuvwxyz',
          upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        },
      },
      symbols: {
        spec: '!@#`~$%^&*()-_=+[{]};:\'",<.>/?',
      },
    },
  };
  getRandomBetween = (min = 0, max = 9) =>
    Math.floor(Math.random() * (max + 1 - min) + min);

  getRandomFromString = (string, quantity = 1) => {
    let res = '';
    for (let i = 0; i < quantity; i++) {
      let index = this.getRandomBetween(0, string.length - 1);
      res += string[index];
    }
    return res;
  };
  mixElementString = (string) => {
    let mixed = '';
    let indexes = [];
    while (mixed.length < string.length) {
      let index = this.getRandomBetween(0, string.length - 1);
      let element = string[index];
      if (!indexes.includes(index)) {
        mixed += element;
        indexes.push(index);
      }
    }
    return mixed;
  };
  getStrongPassword = (lengthGroup = 2) => {
    let lower = this.getRandomFromString(
      this.data.set.alphabet.eng.lower,
      lengthGroup
    );
    let upper = this.getRandomFromString(
      this.data.set.alphabet.eng.upper,
      lengthGroup
    );
    let number = this.getRandomBetween(
      10 ** (lengthGroup - 1),
      10 ** lengthGroup - 1
    );
    let symbol = this.getRandomFromString(
      this.data.set.symbols.spec,
      lengthGroup
    );
    let resPattern = lower + upper + number + symbol;
    let result = this.mixElementString(resPattern);
    return result;
  };
}

const helper = new Helper();
const pass = helper.getStrongPassword(6);
console.log(pass);
