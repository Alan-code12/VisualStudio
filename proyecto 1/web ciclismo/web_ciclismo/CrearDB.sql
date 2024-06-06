-- Creación de la base de datos Backend2 en SQLite

-- Tabla Corredores
CREATE TABLE Corredores (
    curpRun TEXT PRIMARY KEY,
    genero TEXT,
    fechaNacRun TEXT,
    NumCarreraP INTEGER,
    IdCategoriaPert INTEGER,
    CalleRun TEXT,
    NumIntRun TEXT,
    NumExtRun TEXT,
    ColRun TEXT,
    cpRun TEXT,
    ciudadRun TEXT,
    entidadRun TEXT
);

-- Ejemplo de inserción en la tabla Corredores
INSERT INTO Corredores (
    curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun
) VALUES (
    'EjemploCURP1', 'M', '1990-01-01', 1, 1, 'EjemploCalle', 'EjemploNumInt', 'EjemploNumExt', 'EjemploColonia', '12345', 'EjemploCiudad', 'EjemploEntidad'
);

-- Tabla Inscripciones
CREATE TABLE Inscripciones (
    idInscripcion INTEGER PRIMARY KEY,
    curpRun TEXT,
    IdCarrera INTEGER,
    distanciaRec REAL,
    numCompetidor INTEGER,
    FechaReg TEXT,
    horaInicio TEXT,
    horaFin TEXT
);

-- Ejemplo de inserción en la tabla Inscripciones
INSERT INTO Inscripciones (
    idInscripcion, curpRun, IdCarrera, distanciaRec, numCompetidor, FechaReg, horaInicio, horaFin
) VALUES (
    1, 'EjemploCURP1', 1, 10.5, 123, '2024-05-01', '08:00:00', '10:00:00'
);

-- Tabla Carreras
CREATE TABLE Carreras (
    IdCarrera INTEGER PRIMARY KEY,
    estado TEXT,
    modalidad TEXT,
    IdCategoriaCar INTEGER,
    cpCar TEXT,
    colCar TEXT,
    numExtCar TEXT,
    calioCar TEXT,
    nomRuta TEXT,
    descRuta TEXT,
    disTotal REAL,
    horaInicio TEXT,
    fechaInicio TEXT,
    nomCarrera TEXT,
    desCarrera TEXT
);

-- Ejemplo de inserción en la tabla Carreras
INSERT INTO Carreras (
    IdCarrera, estado, modalidad, IdCategoriaCar, cpCar, colCar, numExtCar, calioCar, nomRuta, descRuta, disTotal, horaInicio, fechaInicio, nomCarrera, desCarrera
) VALUES (
    1, 'EjemploEstado', 'EjemploModalidad', 1, '12345', 'EjemploColonia', 'EjemploNumExt', 'EjemploCalle', 'EjemploRuta', 'Descripción de la ruta', 21.1, '06:00:00', '2024-05-01', 'EjemploCarrera', 'Descripción de la carrera'
);

-- Tabla Realizar
CREATE TABLE Realizar (
    idRealizar INTEGER PRIMARY KEY,
    IdCarrera INTEGER,
    curpOrg TEXT
);

-- Ejemplo de inserción en la tabla Realizar
INSERT INTO Realizar (
    idRealizar, IdCarrera, curpOrg
) VALUES (
    1, 1, 'EjemploCURPOrg1'
);

-- Tabla Organizadores
CREATE TABLE Organizadores (
    curpOrg TEXT PRIMARY KEY,
    sitioWeb TEXT,
    linkIg TEXT,
    linkTw TEXT,
    linkFb TEXT,
    nomOrg TEXT
);

-- Ejemplo de inserción en la tabla Organizadores
INSERT INTO Organizadores (
    curpOrg, sitioWeb, linkIg, linkTw, linkFb, nomOrg
) VALUES (
    'EjemploCURPOrg1', 'ejemplo.com', 'instagram.com/ejemplo', 'twitter.com/ejemplo', 'facebook.com/ejemplo', 'EjemploOrganizador'
);

-- Tabla Equipos
CREATE TABLE Equipos (
    IdEquipo INTEGER PRIMARY KEY,
    dateFound TEXT,
    curpRunCreador TEXT,
    nomEquipo TEXT,
    descEquipo TEXT
);

-- Ejemplo de inserción en la tabla Equipos
INSERT INTO Equipos (
    IdEquipo, dateFound, curpRunCreador, nomEquipo, descEquipo
) VALUES (
    1, '2024-05-01', 'EjemploCURP1', 'EjemploEquipo', 'Descripción del equipo'
);

-- Tabla Pertenecer
CREATE TABLE Pertenecer (
    idPertenecer INTEGER PRIMARY KEY,
    curpRun TEXT,
    IdEquipo INTEGER
);

-- Ejemplo de inserción en la tabla Pertenecer
INSERT INTO Pertenecer (
    idPertenecer, curpRun, IdEquipo
) VALUES (
    1, 'EjemploCURP1', 1
);

-- Tabla Aficionados
CREATE TABLE Aficionados (
    curpAfc TEXT PRIMARY KEY,
    idCategoria INTEGER,
    FechaNacAfc TEXT,
    calleAfc TEXT,
    numExtAfc TEXT,
    numintAfc TEXT,
    colAfc TEXT,
    cpAfc TEXT,
    ciudadAfc TEXT,
    entidadAfc TEXT,
    generoAfc TEXT
);

-- Ejemplo de inserción en la tabla Aficionados
INSERT INTO Aficionados (
    curpAfc, idCategoria, FechaNacAfc, calleAfc, numExtAfc, numintAfc, colAfc, cpAfc, ciudadAfc, entidadAfc, generoAfc
) VALUES (
    'EjemploCURPAfc1', 1, '1990-01-01', 'EjemploCalle', 'EjemploNumExt', 'EjemploNumInt', 'EjemploColonia', '12345', 'EjemploCiudad', 'EjemploEntidad', 'M'
);

-- Tabla Usuarios
CREATE TABLE Usuarios (
    curpUsr TEXT PRIMARY KEY,
    emaiUsr TEXT,
    passUsr TEXT,
    nomUsr TEXT,
    apUsr TEXT,
    amUsr TEXT,
    telfUsr TEXT,
    tipoUsr TEXT,
    fechaReg TEXT
);

-- Ejemplo de inserción en la tabla Usuarios
INSERT INTO Usuarios (
    curpUsr, emaiUsr, passUsr, nomUsr, apUsr, amUsr, telfUsr, tipoUsr, fechaReg
) VALUES (
    'EjemploCURPUsr1', 'ejemplo@correo.com', 'ejemplo123', 'Ejemplo', 'Apellido1', 'Apellido2', '1234567890', 'TipoUsuario', '2024-05-01'
);

-- Tabla Categorias
CREATE TABLE Categorias (
    IdCategoria INTEGER PRIMARY KEY,
    edadMn INTEGER,
    edadMax INTEGER,
    IvExo TEXT,
    tipoBici TEXT,
    nomCategoria TEXT,
    descCategoria TEXT
);

-- Ejemplo de inserción en la tabla Categorias
INSERT INTO Categorias (
    IdCategoria, edadMn, edadMax, IvExo, tipoBici, nomCategoria, descCategoria
) VALUES (
    1, 18, 30, 'EjemploIvExo', 'EjemploTipoBici', 'EjemploCategoria', 'Descripción de la categoría'
);
