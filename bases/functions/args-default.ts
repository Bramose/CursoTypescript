(() => {
    const fullName = (firstName:string, lastName?:string, upper: boolean = false):string => {

        const fullName:string = `${ firstName } ${ lastName || '' }`.trim()
        if(upper){
            return fullName.toUpperCase()
        }
        return fullName
    }

    const name = fullName('Tony', 'Stark', true)

    console.log({name});
})()