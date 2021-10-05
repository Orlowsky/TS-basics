//basic types
let id:number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true;
let x: any = 'Hello';
//Array
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Hello']

//tuple
let person: [number, string, boolean] = [1, 'Brad', true]
//tuple array
let employee: [number, string][]

employee = [
    [1,"elo"],
    [2,"eloooo"],
    [3,"eloooooo"]
]

//union
let pid:string | number
pid = '22'
//enum (moze nie miec wartosci i defaultowo 0)
enum direction1{
    Up=2,Down,Left,Right
}
console.log(direction1.Left)
enum direction2{
    Up='up',Down='down',Left='left',Right='right'
}
console.log(direction2.Left)
//objects
//mess version
/* const user:{
    id:number,
     name:string
    } = 
{
    id:1,
    name:'John'
} */

type User = {
    id:number,
    name: string
}
const user:User = {
    id:1,
    name: "john"
}
//type Assertion
 let cid:any = 1;
 //let customerId = <number>cid
let customerId = cid as number 

//function 
function addNum(x:number,y:number):number{
    return x+y;
}
console.log(addNum(3,2))
//void 
function log(message:string | number):void{
    console.log(message)
}
console.log("anything")

//interfaces (readonly, ? , podobne do type, ale co innego )
interface UserInterface  {
     id:number,
    name: string,
    age?:number
}
const user1:UserInterface = {
    id:1,
    name: "john"
}

interface MathFunc {
    (a:number, b:number): number
}
//const addMath:MathFunc = (a,b)=> a+b
//const addMath = (a:number, b:number): number=> a+b
const addMath:MathFunc = (a:number, b:number): number=> a+b
console.log(addMath(10,20))

// classes ( private, protected, public) mozna z interfacem i mozna bez
interface PersonInterface  {
    id:number,
   name: string,
  register(valueRegister: string):string
}

    class Person implements PersonInterface{
        id:number
        name:string

        constructor(id: number, name:string){
            /* console.log(1234) */
            this.id = id;
            this.name = name
        }
        register(valueRegister: string){
            return `${this.name} is now registered to ${valueRegister}`
        }

    }

    const brad = new Person(1,"brad")
    const mike = new Person(2,"mike")
    console.log(brad.register("Olek"))
//subclasses
    class Employee extends Person{
        position:string
        
        constructor(id:number, name:string, position:string){
            super(id,name)
            this.position = position;
        }
    }

    const emp = new Employee(3,'Shawn', 'Developer')
    console.log(emp.register("hey"))

    //generics ( placeholdery dla typów)
    function getArray<T>(items:T[]): T[]{
        return new Array().concat(items)
    }
    let strArray = getArray<string>(["elo", "elo", "elo"])
    let numberArray = getArray<number>([1, 2, 3])
    