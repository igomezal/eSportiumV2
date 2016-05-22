Angualar 2 + Spring Boot
========================

Existen muchas formas de securizar una aplicación Angular 2 con un backend REST. 

Mi objetivo es tener un ejemplo funcionando con Spring Security, que no requiera
mucho código nuevo ni en la parte de Angular 2 ni en la parte de Spring. Obviamente
quiero que sea funcionalmente razonable.

Tipo de autenticación: Basic Auth. Está soportado en Spring Security y las peticiones
no autorizadas se responden con 401 Unauthorized. Otros tipos de autenticación como
form responde las página no autorizadas con una redirección al formulario de login, 
No es aducuado para una SPA.

Pendiente: Generar la request con autenticación Basic Auth desde Angular 2. Como
es sólo pasar a Base 64 espero encontrar algo sencillo:

* http://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
* https://developer.mozilla.org/es/docs/Web/API/WindowBase64/Base64_codificando_y_decodificando

Gestión de sesión: Para no tener que guardar el token de sesión cuando llega la
respuesta de la petición de login y no tener que interceptar todas las peticiones
para que se envíe ese token, usaré las cookies. En el backend no tengo que configurar
nada porque es el comportamiento por defecto, también puedo usar el @SessionScope y
el HttpSession. No es muy RESTful, pero el modelo de programación es mucho más
básico. Este mecanismo me permite recargar el browser y que siga autenticado. Podría 
basarme en una solución más RESTful stateless, pero posiblemente tendría que hacer
más hacks en la parte de Angular y no podría usar @SessionScope que no me parece
tan descabellado.

El problema de esta solución es que tengo que tunear el cliente http para que envíe las cookies
(que no lo hace por defecto). Para eso me baso en este hack:

Comentarios:
* La cabecera 'X-Requested-With': 'XMLHttpRequest' se envía para evitar que el browser saque el diálogo pidiendo usuario y contraseña cuando recibe un 401. Si un servidor tomcat recibe una petición con esa cabecera y hay un error de autenticación (401), no envía la cabecera WWW-Authenticate:Basic que es la que hace que el browser saque el diálogo.

http://stackoverflow.com/questions/9859627/how-to-prevent-browser-to-invoke-basic-auth-popup-and-handle-401-error-using-jqu

AVISO: Hay gente que dice que si no hay credenciales en la primera petición 
le da error. Habría que probarlo.

* http://stackoverflow.com/questions/35064648/set-cookie-in-response-not-set-for-angular2-post-request
* https://github.com/angular/http/issues/65

Cualquier otra solución también requiere hackear angular para enviar el token en
cada petición.

Luego hay que ver cómo hacer el logout. En principio bastaría con crear un endpoint
REST que haga session.invalidate(), pero hay que probar. 

Cosas que probar:
* Ver si funciona con CORS o no. Si no funciona, avisar de que tiene que estar
  todo en el mismo servidor.

Recursos:
* http://stackoverflow.com/questions/21994348/spring-security-token-based-api-auth-user-password-authentication
* https://spring.io/guides/tutorials/spring-security-and-angular-js/

Pendiente:
* Gestión de usuariose en GUI y en backend (para conectar con spring security).
* Poner roles.
* Controlar en el servidor el usuario logeado para filtrar resultados.
* Ver si se puede asociar el Principal y el usuario @SessionScope.
* Refactorizar el servicio REST para no tener que repetir el tema de las headers. 
* Crear varias entidades para que se pueda refactorizar el código común en una clase Padre (al estilo de los repositorios Spring)


