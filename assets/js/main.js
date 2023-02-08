console.log("test");

/* 

class Person(){}
    constructor Methode (){}
        Parameters Name->String   Alter->Number

    Methode Info (){}
        Ausgabe -> Name + Alter

Object befüllen und aufrufen
 */


// Class Methode    - P in Großbuchstaben
class Person {
    constructor( name, alter ){
        this.name = String(name);       // = name von oben      // wir wollen nur Strings haben
        this.alter = Number(alter);   // = alter von oben   holt sich Parameter       // wir wollen nur Zahlen haben

        console.log("class Person -> constructorFuc() befüllt mit: "+ this.name + " " + this.alter);
    }
    info(){
        console.log("class Person -> infoFunc() wird ausgeführt " + this.name + " " + this.alter);
        return this.name + " ist " + this.alter + " years old." //  
    }

}

const Person1 = new Person("Emanuela", 18);
console.log("nur der return kommt zurück: " + Person1.info());
console.log(`${Person1.info()}`)
document.write("doc.write: " + Person1.info() + "<br>");
document.querySelector("body").innerHTML += "innerHTML: " + Person1.info();
