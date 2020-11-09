//class로 작성하면 index.js에 class를 볼 수 있음 interface로 작성하면 아무것도 안나오지
class Human{
    public name:string;
    public age:number;
    public gender:string;
    constructor(name:string,age:number,gender?:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}
const areum=new Human("areum",25,"f")

const sayHi=(person:Human):void=>{
    console.log(`Hello ${person.name}, you are ${person.age}, you are ${person.gender}`);
}

sayHi(areum)

export{}