const laboratorioPf = 
  {
    licencias:[
      {
        id:'s1q2w3e4f34344l34',
        num_lic:'A00.200/1998/2021',
        nombre:'Pruebas de fuga a terceros',
        fecha_emision:'2023-08-08',
        fecha_vencimiento:'2023-12-20',
        razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
        status:'Baja',
        domicilio:{
            direccion:'De los reyes No.4',
            colonia:'Industrial Puente de Vigas',
            ciudad:'Tlalnepantla de Baz',
            estado:'Edo. de México',
            cp:'54070',
            pais:'México'
        },
        
      },
      {
        id:'sdsdlf34344l34',
        num_lic:'A00.200/1998/2020',
        nombre:'Pruebas de fuga a terceros2',
        fecha_emision:'2023-08-08',
        fecha_vencimiento:'2023-12-20',
        razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
        status:'Baja',
        domicilio:{
          direccion:'De los reyes No.4',
          colonia:'Industrial Puente de Vigas',
          ciudad:'Tlalnepantla de Baz',
          estado:'Edo. de México',
          cp:'54070',
          pais:'México'
        },
      },
      {
        id:'sdsdlgg34344334',
        num_lic:'A00.200/1788/2023',
        nombre:'Pruebas de fuga a terceros3',
        fecha_emision:'2023-08-08',
        fecha_vencimiento:'2023-12-20',
        razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
        status:'Activo',domicilio:{
          direccion:'De los reyes No.4',
          colonia:'Industrial Puente de Vigas',
          ciudad:'Tlalnepantla de Baz',
          estado:'Edo. de México',
          cp:'54070',
          pais:'México'
      },
      }
    ],
    fuentes:[
      {
        id:'dsdkk43k4kdskj4344k34',
        isotopo:'Cs-137',
        energia:'662 KeV',
        serie:'6012-09',
        marca:'EBERLINE',
        actividad_original:185,
        multiplicador_base10:3,
        unidades:'mCi',
        fecha_cal:'2000-05-10',
        status:'Activo'
    },
    {
      id:'dsd23gfk4kdskj4344k34',
      isotopo:'Co-60',
      energia:'1117 KeV/1337KeV',
      serie:'6013-09',
      marca:'EBERLINE',
      actividad_original:44.4,
      multiplicador_base10:3,
      unidades:'GBq',
      fecha_cal:'2000-10-25',
      status:'Baja'
  }
    ],
    equipos:[
      {
        id:'dsd23gfkqi34kj4344k34',
         marca:'Ludlum',
         modelo:'2200',
         serie:'1458744',
         tipo:'Monocanal',
         status:'Activo'
      },
      {
        id:'dsd23gfk4kdskj43lod65',
        marca:'S.E. International',
        modelo:'Ursa II',
        serie:'25897441',
        tipo:'Multicanal',
        status:'Activo'
     },
     {
      id:'dsd23gfk4kdskj43w23e4',
      marca:'Ludlum',
      modelo:'20200',
      serie:'128939',
      tipo:'Monocual',
      status:'Baja'
   }
    ],
    detectores:[
      {
        id:'dsd23gfk4kdskj43opqw1',
        marca:'Ludlum',
        modelo:'44-10',
        serie:'PR125898',
        tipo:'Centelleo',
        hv:'900V',
        status:'Activo'
      },
      {
        id:'dsd23gfk4kdskj4234edc',
        marca:'Ludlum',
        modelo:'44-10',
        serie:'PR125898',
        tipo:'Centelleo',
        hv:'900V',
        status:'Activo'
      }
    ],
    personalPf:[
      {
        id:'dsd23gfk4kdskj431qasd',
        nombre:'Mario Saul De la fuente Barrueta',
        nivel:'Ing.',
        cargo:'Auxiliar de E.S.R.',
        status:'Activo'      
      },
      {
        id:'dsd23gfk4kdskj43sd456',
        nombre:'Francisco Javier García Villanueva',
        nivel:'Ing.',
        cargo:'E.S.R.',
        status:'Baja'      
      },
      {
        id:'dsd23gfk4kdskj43sderf',
        nombre:'Julio César Ríos Balderas',
        nivel:'Ing.',
        cargo:'P.O.E.',
        status:'Activo'      
      }
    ]
  }

const serviciosPf = [
  {
    id:'asek4k4j5jrkewwq',
    os:'OS-S-RUT23-226',
    frotis:[
      { 
        
        isotopo:'Am-241',
        serie:'316-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Am-241',
        serie:'317-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Am-241',
        serie:'318-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-05-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Am-241',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Am-241',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'H-3',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      
    ],
    permisionario:{
      razon_social:'SERVICIOS INTEGRALES PARA LA RADIACION',
      licencia:'A00.200/2601/2022',
      fecha_vencimiento:'2027-12-16',
      domicilio:{
        calle:'Km 123 Carretera México-Texcoco-Veracruz S/N,Interior D',
        colonia:'San Cosme Xalostoc',
        ciudad:'Apizaco',
        estado:'Tlaxcala',
        cp:'90460',
        pais:'México'
      },
      esr:{
        nombre:'Ing. Eder Rodriguez Chamorro',
        correo:'personal@email.com',
        telefono:'5553987118',
        fax:'N/D'
      }
    }
  },
  {
    id:'asek4k4e32rk2a1q',
    os:'OS-S-RUT23-225',
    frotis:[
      {
        isotopo:'Co-60',
        serie:'316-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Co-60',
        serie:'317-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Co-60',
        serie:'318-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-05-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Cs-137',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Sr-90',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'H-3',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      
    ],
    permisionario:{
      razon_social:'SIMEC INTERNATIONAL,S.A. DE C.V. (PLANTA TLAXCALA)',
      licencia:'A00.200/2601/2022',
      fecha_vencimiento:'2027-12-16',
      domicilio:{
        calle:'Km 123 Carretera México-Texcoco-Veracruz S/N,Interior D',
        colonia:'San Cosme Xalostoc',
        ciudad:'Apizaco',
        estado:'Tlaxcala',
        cp:'90460',
        pais:'México'
      },
      esr:{
        nombre:'Ing. Eder Rodriguez Chamorro',
        correo:'personal@email.com',
        telefono:'5553987118',
        fax:'N/D'
      }
    }
  },
  {
    id:'asek4k4e32rmko98',
    os:'OS-S-RUT23-228',
    frotis:[
      {
        isotopo:'Sr-90',
        serie:'316-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Sr-90',
        serie:'317-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Sr-90',
        serie:'318-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Sr-90',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Sr-90',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      {
        isotopo:'Sr-90',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)'
      },
      
    ],
    permisionario:{
      razon_social:'SCHLUMBERGER OFFSHORE (MÉXICO) N.V.',
      licencia:'A00.200/2601/2020',
      fecha_vencimiento:'2027-12-16',
      domicilio:{
        calle:'Km 123 Carretera México-Texcoco-Veracruz S/N,Interior D',
        colonia:'San Cosme Xalostoc',
        ciudad:'Apizaco',
        estado:'Tlaxcala',
        cp:'90460',
        pais:'México'
      },
      esr:{
        nombre:'Eder Rodriguez Chamorro',
        nivel:'Ing.',
        correo:'personal@email.com',
        telefono:'5553987118',
        fax:'N/D'
      }
    }
  }
];
