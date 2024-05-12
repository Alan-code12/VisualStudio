// Creación de la base de datos Backend2
Backend2

// Colección Corredores
db.createCollection("Corredores")
db.Corredores.createIndex({ "curpRun": 1 }, { unique: true })
// Ejemplo de documento en la colección Corredores
db.Corredores.insertOne({
    curpRun: "EjemploCURP1",
    genero: "M",
    fechaNacRun: ISODate("1990-01-01"),
    NumCarreraP: 1,
    IdCategoriaPert: 1,
    CalleRun: "EjemploCalle",
    NumIntRun: "EjemploNumInt",
    NumExtRun: "EjemploNumExt",
    ColRun: "EjemploColonia",
    cpRun: "12345",
    ciudadRun: "EjemploCiudad",
    entidadRun: "EjemploEntidad"
})

// Colección Inscripciones
db.createCollection("Inscripciones")
db.Inscripciones.createIndex({ "idInscripcion": 1 }, { unique: true })
// Ejemplo de documento en la colección Inscripciones
db.Inscripciones.insertOne({
    idInscripcion: 1,
    curpRun: "EjemploCURP1",
    IdCarrera: 1,
    distanciaRec: 10.5,
    numCompetidor: 123,
    FechaReg: ISODate("2024-05-01"),
    horaInicio: "08:00:00",
    horaFin: "10:00:00"
})

// Colección Carreras
db.createCollection("Carreras")
db.Carreras.createIndex({ "IdCarrera": 1 }, { unique: true })
// Ejemplo de documento en la colección Carreras
db.Carreras.insertOne({
    IdCarrera: 1,
    estado: "EjemploEstado",
    modalidad: "EjemploModalidad",
    IdCategoriaCar: 1,
    cpCar: "12345",
    colCar: "EjemploColonia",
    numExtCar: "EjemploNumExt",
    calioCar: "EjemploCalle",
    nomRuta: "EjemploRuta",
    descRuta: "Descripción de la ruta",
    disTotal: 21.1,
    horaInicio: "06:00:00",
    fechaInicio: ISODate("2024-05-01"),
    nomCarrera: "EjemploCarrera",
    desCarrera: "Descripción de la carrera"
})

// Colección Realizar
db.createCollection("Realizar")
db.Realizar.createIndex({ "idRealizar": 1 }, { unique: true })
// Ejemplo de documento en la colección Realizar
db.Realizar.insertOne({
    idRealizar: 1,
    IdCarrera: 1,
    curpOrg: "EjemploCURPOrg1"
})

// Colección Organizadores
db.createCollection("Organizadores")
db.Organizadores.createIndex({ "curpOrg": 1 }, { unique: true })
// Ejemplo de documento en la colección Organizadores
db.Organizadores.insertOne({
    curpOrg: "EjemploCURPOrg1",
    sitioWeb: "ejemplo.com",
    linkIg: "instagram.com/ejemplo",
    linkTw: "twitter.com/ejemplo",
    linkFb: "facebook.com/ejemplo",
    nomOrg: "EjemploOrganizador"
})

// Colección Equipos
db.createCollection("Equipos")
db.Equipos.createIndex({ "IdEquipo": 1 }, { unique: true })
// Ejemplo de documento en la colección Equipos
db.Equipos.insertOne({
    IdEquipo: 1,
    dateFound: ISODate("2024-05-01"),
    curpRunCreador: "EjemploCURP1",
    nomEquipo: "EjemploEquipo",
    descEquipo: "Descripción del equipo"
})

// Colección Pertenecer
db.createCollection("Pertenecer")
db.Pertenecer.createIndex({ "idPertenecer": 1 }, { unique: true })
// Ejemplo de documento en la colección Pertenecer
db.Pertenecer.insertOne({
    idPertenecer: 1,
    curpRun: "EjemploCURP1",
    IdEquipo: 1
})

// Colección Aficionados
db.createCollection("Aficionados")
db.Aficionados.createIndex({ "curpAfc": 1 }, { unique: true })
// Ejemplo de documento en la colección Aficionados
db.Aficionados.insertOne({
    curpAfc: "EjemploCURPAfc1",
    idCategoria: 1,
    FechaNacAfc: ISODate("1990-01-01"),
    calleAfc: "EjemploCalle",
    numExtAfc: "EjemploNumExt",
    numintAfc: "EjemploNumInt",
    colAfc: "EjemploColonia",
    cpAfc: "12345",
    ciudadAfc: "EjemploCiudad",
    entidadAfc: "EjemploEntidad",
    generoAfc: "M"
})

// Colección Usuarios
db.createCollection("Usuarios")
db.Usuarios.createIndex({ "curpUsr": 1 }, { unique: true })
// Ejemplo de documento en la colección Usuarios
db.Usuarios.insertOne({
    curpUsr: "EjemploCURPUsr1",
    emaiUsr: "ejemplo@correo.com",
    passUsr: "ejemplo123",
    nomUsr: "Ejemplo",
    apUsr: "Apellido1",
    amUsr: "Apellido2",
    telfUsr: "1234567890",
    tipoUsr: "TipoUsuario",
    fechaReg: ISODate("2024-05-01")
})

// Colección Categorias
db.createCollection("Categorias")
db.Categorias.createIndex({ "IdCategoria": 1 }, { unique: true })
// Ejemplo de documento en la colección Categorias
db.Categorias.insertOne({
    IdCategoria: 1,
    edadMn: 18,
    edadMax: 30,
    IvExo: "EjemploIvExo",
    tipoBici: "EjemploTipoBici",
    nomCategoria: "EjemploCategoria",
    descCategoria: "Descripción de la categoría"
})
