Para correr el proyecto, se debe tener la versi�n 16.13 de node.

Al clonar el proyecto y descargar los paquetes, inicializamos el servidor local con el comando 'npm start' en el terminal.


Observaciones:

- Se lograron hacer las vistas.
- Se especificaron las rutas.
- El estilo de Add Members se especific� lo mas parecido al modelo.
- El servidor al tratar de conectarse, daba error de cors en la direcci�n dada del login.
- Las rutas especificadas siguieron los par�metros y el uso mediante Bearer $(Token).
- El mayor problema fu� con el inicio de sesi�n: Al enviar los datos de sesi�n dados, segu�a sin
establecer conexi�n a�n cuando los datos estaban correctos.

	Se me especific� la ruta: https://uniontracking-3.frogi.dev/login; la cu�l generaba un error de cors.
	Intent� usar una ruta v�lida de Rest Api https://uniontracking-3.frogi.dev/api/login; Reconoc�a la ruta pero segu�a estando no autorizado.

Talves hay un error en el servidor referente al passport u otra configuraci�n.
Si se logra ver el error en el proyecto, por favor hacermelo saber y aprender de mis errores.

- En el App.js (Archivo principal), se tuvo que comentar la l�nea de autenticaci�n,
debido a la conexi�n del servidor con el login; a pesar que se enviaban los par�metros de sesi�n,
segu�a sin darme autorizaci�n o el servidor dar una respuesta satisfactoria.
- Se siguieron los est�ndares de anidaci�n en un proyecto React y se especificaron los m�dulos
con las rutas Api proporcionadas, las cuales est�n sin autorizaci�n.


Espero su respuesta y poder aprender cada d�a mas. Disfrut� la prueba porque me gusta probar
mi conocimiento y saber en que fallo.

Gracias de antemano.

Javier Guevara.