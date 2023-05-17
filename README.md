# Ironhack-Final
Trabajo final de Ironhack realizado por Gabriel Giovanni Pelegri Riis


juego.html:

Compuesto por dos H1, uno que indica las instrucciones y un segundo que solo aparece al finalizar el juego.
El resto del html está dividido en dos columnas dentro de un flex row.
Hay dos botones con funciones definidas en el archivo js.

script.js:
En una lista hay definidas varias palabras asociadas a su correspondiente pista
Después defino varias variables que serán utilizadas más adelante

- La función generaPalabra genera un número aleatorio y luego lo utiliza para obtener una pañabra de la lista de palabras.
- La función pintarGuiones tiene como parámetro la longitud de la variable "palabra", y sirve para pintar los huecos.
- La función generaAbcdario con los parámetros "a" y "z" para definir de que letra a qué letra se mostrará a través del bucle. He definido dentro
  de esta función un botón directamente al editar el innerHtml que hace una llamada a la función intento.
- La función intento tiene como parámetro una letra que es definida en la función anterior al accionar un botón de letra. Posteriormente comprueba 
  si forma parte de la palabra y se usa el dom para que aparezca un mensaje u otro en función de si es correcta o errónea, restandole 1 a los intentos
  si se da este último caso. Al final se hace una llamada a la función que comprueba si la palabra ha sido completada ya.
- La función pista simplemente accede al segundo valor de la palabra actual, que corresponde a la pista, y lo introduce en un campo mediante innerHtml
- La función compruebaFin funciona de manera que comprueba que la variable que contiene los guiones sigue teniendo algún guión. De ser así se modifica el DOM para 
  que aparezca el mensaje correspondiente. También he introducido la funcionalidad de setTimeout para que aparezca una alerta en caso de que no queden intentos.
- Finalmente la función inicio hace llamadas a las funciones en orden para que se desarrolle el juego.

estilo.css:
- Lo único que quiero resaltar de aquí es la clase @keyframes zoomInOut que permite que aparezca un texto de forma progresiva.

