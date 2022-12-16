CREATE TABLE users(
  id serial primary key, 
  nombre varchar(50),
  apellido varchar(50),
  email varchar(50),
  pass varchar(250),
  rol varchar(50)

);


CREATE TABLE clases(
  nombre varchar(50),
  materia varchar(50),
  frecuencia varchar(50),
  duracion int, 
  idProfesor int references profesor(id),
  costo money,
  descripcion varchar(250),
  tipoClase varchar(50),
  id serial primary key, 
  imagen text
);

CREATE TABLE calificacion(
    id serial primary key,
    idUser int references users(id),
    calificacion int,
    idClase int references clases(id)
);

CREATE TABLE comentario(
    id serial primary key,
    idUser int references users(id),
    comentario varchar(250),
    idClase int references clases(id)
);

CREATE TABLE alumno (
    id serial primary key,
    primaria varchar(50),
    secundaria varchar(50),
    terciario varchar(50),
    universitario varchar(50),
    fechaNac date,
    idUser int references users(id)
);

CREATE TABLE clases_contratadas (
  id serial primary key,
  idClase int references clases(id),
  idAlumno int references alumno(id),
  idProfesor int references profesor(id),
  estado varchar(50)
);

CREATE TABLE profesor(
    id serial primary key,
    titulo varchar(50),
    experiencia varchar(50),
    idUser int references users(id)
);