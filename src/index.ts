interface Human{
    name:string;
    age:number;
    gender:string;
}

const person={
    name="areum",
    age=25,
    gender="f"
}

const sayHi=(person:Human):void=>{
    console.log(`Hello ${person.name}, you are ${person.age}, you are ${person.gender}`);
}

sayHi(person)

export{}