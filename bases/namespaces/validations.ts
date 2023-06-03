namespace Validations {
    export const validateText = (text:string):boolean => {
        if(text.length > 3) {
            return true;
        }
        return false;
    }

    export const validateDate = (fecha:Date):boolean => {
        return (isNaN(fecha.valueOf())) ? false : true;
    }
}

console.log(Validations.validateText('S'))