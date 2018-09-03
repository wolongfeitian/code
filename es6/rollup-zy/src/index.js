/**
 * Created by zhangyang18 on 2018/8/2.
 */
/*import util from './util1'
import {fn1,fn2} from "./util2";

console.log(util)

fn2();
fn1();*/

/*[1,2,3].map(item => item+1)*/

/*
class MathHandle{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    add(){
        return this.x + this.y
    }
}

const m = new MathHandle(1,2)
console.log(m.add())

console.log(typeof MathHandle) // 'function'
console.log(MathHandle.prototype.constructor === MathHandle) //true
console.log(m.__proto__ === MathHandle.prototype) //true*/

class Animal {
    constructor(name){
        this.name = name
    }
    eat(){
        alert(this.name + ' eat')
    }
}

class Dog extends Animal {
    constructor(name){
        super(name) //super就是被继承的对象的constructer
    }
    say(){
        alert(this.name + ' say')
    }
}

const dog = new Dog('哈士奇')
dog.say()
dog.eat()