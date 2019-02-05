/* create database JSPROJECT */
CREATE TABLE usuario (
  idusuario SERIAL PRIMARY KEY,
  usuario VARCHAR(45) NOT NULL,
  pass VARCHAR(255) NOT NULL,
  nombre VARCHAR(45) NOT NULL);

CREATE TABLE  cuento  (
   idcuento  SERIAL PRIMARY KEY,
   nombre  VARCHAR(255) NULL,
   descripcion  VARCHAR(255) NULL,
   creditos  VARCHAR(45) NULL,
   idusuario  INT NULL,
  CONSTRAINT  idusuario 
    FOREIGN KEY ( idusuario )
    REFERENCES   usuario  ( idusuario ));






INSERT INTO  usuario  (usuario ,  pass ,  nombre ) VALUES ('Shimberly', 'kim', 'Kimberly Munoz');

INSERT INTO  usuario  ( usuario ,  pass ,  nombre ) VALUES ('Deathpaul', 'paul', 'Paul Valle');

INSERT INTO  usuario  (usuario ,  pass ,  nombre ) VALUES ('Chibi', 'paola', 'Paola Ortiz');


INSERT INTO  cuento  ( nombre ,  descripcion ,  creditos ,  idusuario ) VALUES ('Los tres cerditos', 'Cuento infantil con moraleja para incentivar el trabajo', 'Tomado de guiainfantil.com', '1');

INSERT INTO  cuento  (  nombre ,  descripcion ,  creditos ,  idusuario ) VALUES ('Blancanieves', 'Cuento infantil con moraleja de no hablar con desconocidos', 'Tomado de guiainfantil.com', '1');

INSERT INTO  cuento  (  nombre ,  descripcion ,  creditos ,  idusuario ) VALUES ('Pinocho', 'Cuento infantil con moraleja ayuda a reflexionar sobre no mentir', 'Tomado de guiainfantil.com', '1');

INSERT INTO  cuento  (  nombre ,  descripcion ,  creditos ,  idusuario ) VALUES ('Pinocho', 'Cuento infantil con moraleja ayuda a reflexionar sobre no mentir', 'Tomado de guiainfantil.com', '2');

INSERT INTO  cuento  (   nombre ,  descripcion ,  creditos ,  idusuario ) VALUES ( 'Blancanieves', 'Cuento infantil con moraleja de no hablar con desconocidos', 'Tomado de guiainfantil.com', '3');

INSERT INTO   pagina  (     imagen ,  audio ,  idcuento ) VALUES ('images/cuentos/cerditos1.jpg', 'images/cuentos/cerditos1.mp3', '1');

INSERT INTO   pagina  (     imagen ,  audio ,  idcuento ) VALUES ('images/cuentos/blancanieves8.jpg', 'images/cuentos/blancanieves8.mp3', '5');

INSERT INTO  pregunta  (img1 ,  img2 ,  audio, respuesta, idcuento) VALUES ('images/cuentos/colorverde.jpg', 'images/cuentos/colorladrillo.jpg', 'images/cuentos/preguntacerditos.mp3','2',1);


INSERT INTO  pregunta  (img1 ,  img2 ,  audio, respuesta, idcuento) VALUES ('images/cuentos/opcion1P1.jpg', 'images/cuentos/opcion2P1.jpg', 'images/cuentos/preguntablancanieves.mp3','1',2);

INSERT INTO  pregunta  (img1 ,  img2 ,  audio, respuesta, idcuento) VALUES ('images/cuentos/nombrePapaPinocho.png', 'images/cuentos/nombrePapaPinocho2.gif', 'images/cuentos/PapaPinocho.mp3','1',3);











