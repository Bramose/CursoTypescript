(() => {
    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor( public name: string ) {

        }

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.instance;
        }

        changeName( newName: string ):void {
            this.name = newName
        }
    }

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')
    const apocalipsis = Apocalipsis.callApocalipsis();

    apocalipsis.changeName('Xavier');

    console.log(apocalipsis)
})()