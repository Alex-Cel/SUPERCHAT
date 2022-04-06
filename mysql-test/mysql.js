/* Primero incluye el paquete: */
const mysql = require('mysql')

///////////////////////////INICIO////////////////////////////////////
//var http = require('http')

//function webServer(req, res)
//{
//	res.writeHead(200, {'Content-Type':'text/html'})
	/* res.end('<h1>Hola de nuevo Node.js</h1>') */
//	res.end('<h2>Hola otra vez Node.js</h2>')
  
//}

//http
//	.createServer(webServer)
//	.listen(3306, 'localhost')

//console.log('Servidor corriendo en http://localhost:3306/')
///////////////////////////FINAL////////////////////////////////////

/* y creas una conexión: */
const options = {
    /* user: 'the_mysql_user_name',
    password: 'the_mysql_user_password',
    database: 'the_mysql_database_name'
     */
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bienesraices',
    port:'3306'
  }
 
  const connection = mysql.createConnection(options)

/*   Inicia una nueva conexión llamando a: */
  connection.connect(err => {
    if (err) {
      console.error('An error occurred while connecting to the DB')
      throw err
    }
  })

/* Realizar una consulta SELECT */
connection.query('SELECT * FROM informacion', (error, informacion, fields) => {
    if (error) {
      console.error('An error occurred while executing the query')
      throw error
    }else {
      console.log(informacion)
      ///////////////////////////INICIO////////////////////////////////////
      var http = require('http')

      function webServer(req, res)
      {
      res.writeHead(200, {'Content-Type':'text/html'})
      /* res.end('<h1>Hola de nuevo Node.js</h1>') */
      res.end(JSON.stringify(informacion))

      }

      http
      .createServer(webServer)
      .listen(3306, 'localhost')
      ///////////////////////////FINAL////////////////////////////////////  
    }
})
  
  /* Cerrar la conexión */
  connection.end()


