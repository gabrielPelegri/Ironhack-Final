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
- La función inicio tiene como parámetro una letra que es definida en la función anterior al accionar un botón de letra. Posteriormente comprueba 
si forma parte de la palabra y se usa el dom para que aparezca un mensaje u otro en función de si es correcta o errónea, restandole 1 a los intentos
si se da este último caso. Al final se hace siempre una comprobación por si la palabra ha sido cpmpletada

