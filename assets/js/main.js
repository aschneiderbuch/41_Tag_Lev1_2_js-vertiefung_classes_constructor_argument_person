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
    // Info Methode -> function
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
console.log(Person1)
console.table(Person1);
// !!! function info ist    -  nicht   -    mit im Objekt



// Variante 2 - mit einer Function und nicht über class   
// -> P in Großbuchstaben damit man weiß das es Objekt befüllen soll 
function Person2 (name, alter){
    this.name = String(name);       // = name von oben      // wir wollen
    this.alter = Number(alter);   // = alter von oben   holt sich

    console.log("function Person2 -> constructorFuc() befüllt mit: "+ this.name + " " + this.alter);

    // Info Methode -> function
    this.info = function(){
        console.log("-> infoFunc() wird ausgeführt " + this.name + " " + this.alter);
        return this.name + " ist " + this.alter + " years old." 
    }
}

const Tom = new Person2("Tom", 20);
console.log("nur der return kommt zurück: " + Tom.info());
console.log(`${Tom.info()}`)
console.log(Tom)
console.table(Tom)
// !!! function info ist - -  mit   - -  mit im Objekt
