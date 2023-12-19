class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    sleep() {
        console.log('Zzzzzzz');
    }

    describe() {
        console.log(`Ім'я: ${this.name}, Стать: ${this.gender}, Вік: ${this.age}`);
    }
}

class Student extends Human {
    constructor(name, gender, age, course, groupName) {
        super(name, gender, age);
        this.course = course;
        this.groupName = groupName;
    }

    goToUniversity() {
        console.log('Топає в університет..');
    }
}

class Teacher extends Human {
    constructor(name, gender, age, academicTitle, experience, subject) {
        super(name, gender, age);
        this.academicTitle = academicTitle;
        this.experience = experience;
        this.subject = subject;
    }

    describe() {
        console.log(`Ім'я: ${this.name}, Досвід: ${this.experience} років, Предмет: ${this.subject}`);
    }
}

const human = new Human('Якась Людина', 'Чоловік', 21);
const student = new Student('Якийсь Студент', 'Жінка', 20, 4, 'B');
const teacher = new Teacher('Якийсь Вчитель', 'Чоловік', 43, 'Професор', 18, 'Математика');

console.log("Людина:");
human.describe();
human.sleep();

console.log("\nСтудент:");
student.describe();
student.sleep();
student.goToUniversity();

console.log("\nВчитель:");
teacher.describe();
teacher.sleep();
