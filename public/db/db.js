const meses = {
  0:'ENERO',
  1:'FEBRERO',
  2:'MARZO',
  3:'ABRIL',
  4:'MAYO',
  5:'JUNIO',
  6:'JULIO',
  7:'AGOSTO',
  8:'SEPTIEMBRE',
  9:'OCTUBRE',
  10:'NOVIEMBRE',
  11:'DICIEMBRE'
}

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
        status:'Activo',
        domicilio:{
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
        serie:'6013-09',
        marca:'EBERLINE',
        actividad_original:144.3,
        multiplicador_base10:3,
        unidades:'KBq',
        fecha_cal:'2009-03-17',
        status:'Activo',
        vida_media:30.2,
        rendimiento:0.85,
    },
    {
      id:'dsd23gfk4kdskj434000',
      isotopo:'Co-60',
      energia:'1117 KeV/1337KeV',
      serie:'6013-09',
      marca:'EBERLINE',
      actividad_original:44.4,
      multiplicador_base10:3,
      unidades:'KBq',
      fecha_cal:'2009-03-17',
      status:'Activo',
      vida_media:5.27,
      rendimiento:2,
    }
    ],
    equipos:[
      {
         id:'dsd23gfkqi34kj4344k34',
         marca:'Ludlum',
         modelo:'2200',
         serie:'1458744',
         tipo:'Monocanal',
         status:'Activo',
         resolucion:'0.1 V'

      },
      {
        id:'dsd23gfk4kdskj43lod65',
        marca:'S.E. International',
        modelo:'Ursa II',
        serie:'25897441',
        tipo:'Multicanal',
        status:'Activo',
        resolucion:'0.1 V'
     },
     
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
        id:'12587sde34',
        isotopo:'Co-60',
        serie:'316-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)',
        certificado:{
          equipo:{
            equipos:'5d5f4e4r4er',
            detectores:'2re5re5re5er5',
            fuentes:'dsd23gfk4kdskj4344k34',
            threshold:'40',
            hv:'900',
            ganancia:'125',
            tiempo:'5',
          },
          personal:{
            personal_realizo:'Ing Mario de la fuente',
            personal_autorizo:'Ing Francisco tal'
          },
          prueba:{
            cont_fuente:'125688',
            cont_fondo:'125',
            cont_frotis:'258',
            resultados:{
              FlujoTeorico:5238516,
              actividad:102716,
              cuentas_bequerel:7222.367625,
              eficiencia:28.3234,
              fecha_larga:'3 DE ENERO DE 2024',
              informe_num:'SIR24-PF-001',
              lld:0.254444777,
              s:15.814555,
              xf:'250',
              xm:'74125883'
            }
          },
          licencia:{
            id:'sdsdlgg34344334',
            num_lic:'A00.200/1788/2023',
            nombre:'Pruebas de fuga a terceros3',
            fecha_emision:'2023-08-08',
            fecha_vencimiento:'2023-12-20',
            razon_social:'Servicios Integrales para la Radiación,S.A. de C.V.',
            status:'Activo',
            domicilio:{
              direccion:'De los reyes No.4',
              colonia:'Industrial Puente de Vigas',
              ciudad:'Tlalnepantla de Baz',
              estado:'Edo. de México',
              cp:'54070',
              pais:'México'
          },
          },
          fecha_informe:'2023-06-14',
          num_informe:'001',
          nombre_pdf:'001_nombre_amBe_serie.pdf'
          
        }
      },
      {
        id:'2587s1w233',
        isotopo:'Co-60',
        serie:'317-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)',
        certificado:{}
      },
      {
        id:'poi87sde34',
        isotopo:'Am-241',
        serie:'318-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-05-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)',
        certificado:{}
      },
      {
        id:'125lo98e34',
        isotopo:'Co-60',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'KBq',
        fecha_frotis:'2023-02-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)',
        certificado:{}
      },
      {
        id:'12587s98oi',
        isotopo:'Cs-137',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)',
        certificado:{}
      },
      {
        id:'12587spñl8',
        isotopo:'H-3',
        serie:'325-02-10',
        marca:'BERTHOLD TECHNOLOGIES',
        actividad_original:44.4,
        unidades:'MBq',
        fecha_frotis:'2023-03-24',
        fecha_entrega:'2023-03-02',
        metodo:'Vía humeda (Sobre una superficie equivalente)',
        certificado:{}
      },
      
    ],
    permisionario:{
      razon_social:'SERVICIOS INTEGRALES PARA LA RADIACION 2',
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
  }
];

const informesPF2024 = [];

