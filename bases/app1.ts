(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum Power {
      cero = 0,
      min = 1,
      less = 5,
      max = 100
    }

    const fuerzaFlash:Power = Power.less;
    const fuerzaSuperman:Power = Power.max;
    const fuerzaBatman:Power = Power.min;
    const fuerzaAcuaman:Power = Power.cero;
  
    // Retorno de funciones
    function activar_batiseñal():string
    {
      return 'activada';
    }
  
    function pedir_ayuda():void
    {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  