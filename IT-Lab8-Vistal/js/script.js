 
// Оптимізація функції, використовуючи деструктеризацію об’єктів 
// (Object Destructuring) та шаблонні стрічки (Template Strings):
function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const user = { firstName: `Yakiys`, lastName: `People`};
console.log(getFullName(user));

// параметри по замовчуванню EcmaScript 6
function handleThings(opts = {}) {
    opts.name = opts.name || "Some name";
    return opts;
}

console.log(handleThings());

// класи EcmaScript 6
class Queue {
    constructor(contents = []) {
      this.queue = [...contents];
    }

    splice() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
}

const instance = new Queue([3, 2, 3, 6]);
console.log(instance.splice());