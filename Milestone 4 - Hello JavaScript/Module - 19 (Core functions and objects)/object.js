function Student(name,age,sex){ //Student is a constructor
   this.name = name;
   this.age = age;
   this.sex = sex;

   this.display = function(){ //constructor evabe function banano lage
    console.log(this.name);
   }
}

var Student1 = new Student("siam",27,"M");

Student1.display();
