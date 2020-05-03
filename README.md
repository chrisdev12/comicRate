# ComicRate

Encuentra los mejores comics de xkcd aquí

## Pasos previos:

En caso de no tener Angular ejecute el siguiente comando <npm install -g @angular/cli>

Una vez clonaod el repo y estando en el folder: ejecute <npm i> en su terminal para poder descargar todas las dependencias necesarias.

Ejecute <ng s> para inicar el dev server. Una vez iniciado será redirigido a `http://localhost:4200/` , en caso de que no ocurra, puede poner esa misma URL en su navegador.

Nota:  Recuerde que este proyecto está bajo Angular 9.0.7

## Problemas con Cors: Para evitar problema de cors, el siguiente codigo va en proxy.conf.json al mismo nivel que package.json.
### El pathRewrite configurado es el que reemplazara la parte del dominio de la URL (e.g ./api = dominio  /1/info.0.json = ruta) que será implementado en el servicio

{
	"/api": {
		"target": "https://xkcd.com",
		"secure": false,
		"headers": {
			"Host": "xkcd.com"
		},
		"pathRewrite": { 
			"/api": ""
		}
	}
}

### proxy.conf.json debe ser referenciado en el package.json de la siguiente forma: "start": "ng serve --proxy-config proxy.conf.json"


## Funcionamiento de la aplicación:

Home: Aquí podra votar por un Comic aleatorio de la API de xcd.com. El voto requiere de un puntaje y de un comentario minimo de 15 letras.

Imagenes: Aquí podra ver 12 imagenes aleatorias y volver a pedir otras 12 dandole click al botón superior derecho que dice NEW.

Mis Votos: Aqu podria hacerle un seguimiento a las reviews/comentarios de los comics que usted haya hecho, podra volver a ver el comic al cual usted voto dandole click al # del comic que está en azul y puede visualizar un gráfico (solo visible en pantallas de más de 700px) que le informa cómo ha sido su votación en todos los comics.
