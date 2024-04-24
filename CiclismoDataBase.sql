CREATE DATABASE Ciclismo

USE Ciclismo

-- Tabla para la entidad Usuario
CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY,
    contraseña VARCHAR(255),
    correo_electronico VARCHAR(255),
    id_direccion INT,  -- FK a la tabla Dirección
    nombre VARCHAR(255),
    apellido_paterno VARCHAR(255),
    apellido_materno VARCHAR(255)
);
DROP TABLE Usuario;

-- Tabla para la entidad Dirección
CREATE TABLE Direccion (
    id_direccion INT PRIMARY KEY,
    id_pais INT,  -- FK a la tabla País
    id_estado INT,  -- FK a la tabla Estado
    id_municipio INT,  -- FK a la tabla Municipio
    id_calle INT  -- FK a la tabla Calle
);

-- Tabla para la entidad País
CREATE TABLE Pais (
    id_pais INT PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Tabla para la entidad Estado
CREATE TABLE Estado (
    id_estado INT PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Tabla para la entidad Municipio
CREATE TABLE Municipio (
    id_municipio INT PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Tabla para la entidad Calle
CREATE TABLE Calle (
    id_calle INT PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Tabla para la relación ISA entre Usuario y Aficionado
CREATE TABLE Aficionado (
    id_usuario INT PRIMARY KEY,  -- FK a la tabla Usuario
    id_aficionado INT
    -- Agrega aquí los atributos específicos de Aficionado si los hay
);

-- Tabla para la relación Observa entre Usuario y Carrera
CREATE TABLE Observa (
    id_usuario INT,  -- FK a la tabla Usuario
    id_carrera INT,  -- FK a la tabla Carrera
    fecha DATE,
    estadistica VARCHAR(255),
    id_lugar INT,  -- FK a la tabla Lugar
    PRIMARY KEY (id_usuario, id_carrera)
);

-- Tabla para la entidad Organizador
CREATE TABLE Organizador (
    id_organizador INT PRIMARY KEY,
    id_usuario INT,  -- FK a la tabla Usuario
    num_telefono VARCHAR(20)
    -- Agrega aquí los atributos específicos de Organizador si los hay
);

-- Tabla para la relación Organiza entre Organizador y Carrera
CREATE TABLE Organiza (
    id_organizador INT,  -- FK a la tabla Organizador
    id_carrera INT  -- FK a la tabla Carrera
);

-- Tabla para la entidad Competidor
CREATE TABLE Competidor (
    id_usuario INT PRIMARY KEY,  -- FK a la tabla Usuario
    patrocinador VARCHAR(255),
    numero_competidor INT,
    contacto_emergencia VARCHAR(255)
    -- Agrega aquí los atributos específicos de Competidor si los hay
);

-- Tabla para la relación Realiza entre Competidor e Inscripcion
CREATE TABLE Realiza (
    id_competidor INT,  -- FK a la tabla Competidor
    id_inscripcion INT  -- FK a la tabla Inscripcion
);

-- Tabla para la entidad Inscripcion
CREATE TABLE Inscripcion (
    id_inscripcion INT PRIMARY KEY,
    fecha_inscripcion DATE,
    hora_inscripcion TIME,
    dias_inscripcion INT
);

-- Tabla para la entidad Categoria
CREATE TABLE Categoria (
    id_categoria INT PRIMARY KEY,
    distancia_carrera VARCHAR(255),
    equipamiento VARCHAR(255),
    peso_bicicleta INT,
    tipo_bicicleta VARCHAR(255),
    tipo_vestimenta VARCHAR(255),
    edad INT,
    genero VARCHAR(50) -- Puede ser VARCHAR en lugar de ENUM si prefieres
    -- Agrega aquí los atributos específicos de Categoria si los hay
);

-- Tabla para la relación Tiene entre Competidor y Categoria
CREATE TABLE Tiene (
    id_usuario INT,  -- FK a la tabla Competidor
    id_categoria INT  -- FK a la tabla Categoria
);

-- Tabla para la relación ISA entre Categoria e Individual
CREATE TABLE Individual (
    id_categoria INT PRIMARY KEY,  -- FK a la tabla Categoria
    id_cant_individual INT
    -- Agrega aquí los atributos específicos de Individual si los hay
);

-- Tabla para la entidad Equipo
CREATE TABLE Equipo (
    id_categoria_equipo INT PRIMARY KEY,  -- FK a la tabla Categoria
    nombre_equipo VARCHAR(255),
    cantidad_miembros INT
    -- Agrega aquí los atributos específicos de Equipo si los hay
);
