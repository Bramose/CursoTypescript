define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // printObject(123)
    // printObject(new Date())
    // printObject({a:1, b:2, c:3})
    // printObject([1,2,3,4,5])
    // printObject('Hola Mundo')
    // console.log(genericFunction(3.1416).toFixed(2))
    // console.log(genericFunction('Hola mundo').length)
    // console.log(genericFunction(new Date()).getDate())
    // console.log(genericFunctionArrow(3.1416).toFixed(2))
    // console.log(genericFunctionArrow('Hola mundo').length)
    // console.log(genericFunctionArrow(new Date()).getDate())
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).dangerLevel);
});
