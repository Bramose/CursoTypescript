// Crear interfaces
interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelear: () => void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }
  
  const batimovil:Auto = {
    encender:false,
    velocidadMaxima:0,
    acelear(){
      console.log("...... gogogo!!!");
    }
  }
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface AccPersona {
    reir?: boolean;
    comer: boolean;
    llorar?: boolean;
  }
  
  const guason:AccPersona = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( guason:AccPersona ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion
  interface Cities {
    (ciudadanos:string[]): number;
  }
  
  const ciudadGotica:Cities = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos
  
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
    enum enumeracion {
        a=10,
        b,
        c=9,
        d
    }

  interface People {
    nombre:string;
    edad:number;
    sexo: 'H'|'M';
    estadoCivil: 'Casado'|'Soltero';
    imprimirBio: () => string
  }

  class Persona implements People {
    constructor(
        public nombre:string,
        public edad:number,
        public sexo: 'H'|'M',
        public estadoCivil: 'Casado'|'Soltero'
    ){}

    public imprimirBio(){
        return `Nombre ${this.nombre} con la edad de ${this.edad} y del sexo ${this.sexo}, ${this.estadoCivil}.`
    } 
  }

  const sergio = new Persona('Sergio Bravo Montoya', 35, 'H', 'Casado');

  console.log(sergio.imprimirBio())