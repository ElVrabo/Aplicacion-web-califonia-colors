import app from "./app.js";
import { connectDB } from "./db.js";


connectDB();
/*process.env.PORT:*/

/*Esto se refiere a una variable de entorno llamada PORT. Las variables de entorno son valores 
que se configuran externamente al código y se pueden usar para configurar comportamientos
 específicos del entorno en el que se ejecuta la aplicación. 
 En este caso, se utiliza para especificar en qué puerto escuchará el servidor cuando 
 la aplicación se despliega en un entorno que proporciona un puerto específico, 
 como en un servicio de alojamiento.*/
const port = process.env.PORT || 4000;

app.listen(port);



