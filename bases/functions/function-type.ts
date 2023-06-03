(() => {
    const addNumber = (a:number, b: number ) :number => a + b
    const greet = (name:string ) :string => `Hola ${name}`
    const saveTheWorld = () :string => `El mundo está salvado!`

    let myFunciton: (y:number, z:number) => number;

    // myFunciton = 10

    myFunciton = addNumber
    console.log(myFunciton(3,3));

    // myFunciton = greet
    // console.log(myFunciton("Sergio"));

    // myFunciton = saveTheWorld
    // console.log(myFunciton());
})()