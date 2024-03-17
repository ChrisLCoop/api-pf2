CREATE DATABASE IF NOT EXISTS allcursosalura;

USE allcursosalura;

CREATE TABLE cursos(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(70) DEFAULT NULL,
    comentario VARCHAR(190) DEFAULT NULL,
    descripcion VARCHAR(255) DEFAULT NULL,
    popularidad INT(5) DEFAULT NULL,
    profesor VARCHAR(110) DEFAULT NULL,
    subido VARCHAR(20) DEFAULT NULL,
    idioma VARCHAR(20) DEFAULT NULL,
    subtitulo VARCHAR(20) DEFAULT NULL,
    precio INT (10),
    imagen VARCHAR (255) DEFAULT NULL,
    dificultar VARCHAR(100) DEFAULT NULL,
    duracion INT(10) DEFAULT NULL,
    estudiantes INT(10) DEFAULT NULL,
    apren_a VARCHAR(180) DEFAULT NULL,
    apren_b VARCHAR(180) DEFAULT NULL,
    apren_c VARCHAR(180) DEFAULT NULL,
    PRIMARY KEY(id)

);

DESCRIBE cursos;

INSERT INTO cursos VALUES
(1,'Node.Js','Una Tecnologia muy facil de usar y de gran demanda','Una Tecnologia moderna que compite en el mercado como una de las mejores, y es de gran demanda',9.7,'Jackie Chan','05-01-2024','Castellano','Latino',299.00,'poner url de imagen','Moderado',55,16.000,'NodeJs y Express desarrollo de sitios y aplicaciones Web','Agregar base de datos a tus aplicaciones (Mysql, PostGreSQL y MongoDB)','Utilizar un ORM para acelerar el proceso de crear aplicaciones'),
(2,'Python','Aprende Python, donde iniciamos desde 0, sin conocimientos previos hasta desarrollar aplicaciones y mas ...','Aprende Python, donde iniciamos desde 0, sin conocimientos previos hasta desarrollar aplicaciones con mucha practica!',9.8,'Gato con Botas','01-02-2024','Castellano','Latino',399.00,'poner url de imagen','principiante',72,22.160,'Ejercitar la lógica de programación','Comprender cómo la vida cotidiana puede ser fácilitada o simulada con código','Aprender programación desde cero');