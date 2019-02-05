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



INSERT INTO  cuento  ( nombre ,  descripcion ,  creditos ,  idusuario ) VALUES ('Los tres cerditos', 'Cuento infantil con moraleja para incentivar el trabajo', 'Tomado de guiainfantil.com', '1');

















