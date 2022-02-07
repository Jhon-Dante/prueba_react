Para correr el proyecto, se debe tener la versión 16.13 de node.

Al clonar el proyecto y descargar los paquetes, inicializamos el servidor local con el comando 'npm start' en el terminal.


Observaciones:

- Se lograron hacer las vistas.
- Se especificaron las rutas.
- El estilo de Add Members se especificó lo mas parecido al modelo.
- El servidor al tratar de conectarse, daba error de cors en la dirección dada del login.
- Las rutas especificadas siguieron los parámetros y el uso mediante Bearer $(Token).
- El mayor problema fué con el inicio de sesión: Al enviar los datos de sesión dados, seguía sin
establecer conexión aún cuando los datos estaban correctos.

	Se me especificó la ruta: https://uniontracking-3.frogi.dev/login; la cuál generaba un error de cors.
	Intenté usar una ruta válida de Rest Api https://uniontracking-3.frogi.dev/api/login; Reconocía la ruta pero seguía estando no autorizado.

Talves hay un error en el servidor referente al passport u otra configuración.
Si se logra ver el error en el proyecto, por favor hacermelo saber y aprender de mis errores.

- En el App.js (Archivo principal), se tuvo que comentar la línea de autenticación,
debido a la conexión del servidor con el login; a pesar que se enviaban los parámetros de sesión,
seguía sin darme autorización o el servidor dar una respuesta satisfactoria.
- Se siguieron los estándares de anidación en un proyecto React y se especificaron los módulos
con las rutas Api proporcionadas, las cuales están sin autorización.


Espero su respuesta y poder aprender cada día mas. Disfruté la prueba porque me gusta probar
mi conocimiento y saber en que fallo.

Gracias de antemano.

Javier Guevara.