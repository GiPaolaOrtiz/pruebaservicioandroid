
var http = require('http'),
	express  = require('express'),
	bodyParser   = require('body-parser');

var multer = require('multer'); 
const pg    = require('pg');

pg.defaults.ssl = true;
var conString = "postgres://olhulrfypdzyjw:6417cdde7f42ea123f6285bbc6fb25aa0b78f05787e51283934be00050112d21@ec2-50-17-193-83.compute-1.amazonaws.com:5432/d2d93l307ei8d2";

var express = require('express');
var http = require('http'),
    formidable = require('formidable'),
    util = require('util'),
    fs   = require('fs-extra');
function permitirCrossDomain(req, res, next) {
  //en vez de * se puede definir SÓLO los orígenes que permitimos
  res.header('Access-Control-Allow-Origin', '*'); 
  //metodos http permitidos para CORS
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
app.use(permitirCrossDomain);
app.get('/listarCuentoPorUsuario/:id', (req, res) => {
   
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            return console.error('could not connect to postgres', err);
            return res.status(500).json({success: false, data: err});
        }
       
        client.query('SELECT * FROM cuento WHERE idusuario='+ req.params.id +';', function(err, result) {
            if(err) {
                return console.error('error running query', err);
            }
            
            //console.log(result);
            client.end();
            return res.json(result.rows);
            
           
        });
        
    });
    
   
});



app.get('/listarUsuarios', (req, res, next) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            return console.error('could not connect to postgres', err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM usuario', function(err, result) {
            if(err) {
                return console.error('error running query', err);
            }

            client.end();
            return res.json(result.rows);
            
        }); 
    });
});



//Usuario para actualizar y eliminar
app.get('/mostrarUsuario/:id',(req,res)=>{
     var client = new pg.Client(conString);
     var idusuario=req.params.id;
    
     client.connect(function(err) {
        if(err) {
            return console.error('could not connect to postgres', err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM usuario WHERE idusuario=' + idusuario + ';', function(err, result) {
            if(err) {
                return console.error('error running query', err);
            }
            
            //console.log(result);
             client.end();
            return res.json(result.rows);
        
        });
        
    });
    
    
});

app.put('/actualizarUsuario',(req,res)=>{
     var client = new pg.Client(conString);
     var idusuario=req.body.idusuario;
    

    
     client.connect(function(err) {
        if(err) {
            return console.error('could not connect to postgres', err);
            return res.status(500).json({success: false, data: err});
        }

        client.query("UPDATE usuario SET usuario ='"+req.body.usuario+"', pass='"+req.body.pass+"', nombre='"+req.body.nombre+"' WHERE idusuario='" + idusuario + "';", function(err, result) {
            
            if(err) {
                return console.error('error running query', err);
            }
            
            //console.log(result);
             client.end();
            return res.json(result);
        });
    });
    
    
});

app.delete('/eliminarUsuario',(req,res)=>{
     var client = new pg.Client(conString);
     var idusuario=req.body.idusuario;
    
     client.connect(function(err) {
        if(err) {
            return console.error('could not connect to postgres', err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('DELETE FROM usuario WHERE idusuario=' + idusuario + ';', function(err, result) {
            
            if(err) {
                return console.error('error running query', err);
            }
            
            //console.log(result);
             client.end();
            return res.json(result);
        });
    });
    
    
});


app.get('/', function(req, res) {
    res.sendfile('index.html');
});


app.post('/GuardarUsuario', (req, res) => {
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            return console.error('could not connect to postgres', err);
            return res.status(500).json({success: false, data: err});
        }
       
        console.log("miau "+util.inspect(req,false,null));
        
        client.query("INSERT INTO  usuario  (usuario ,  pass ,  nombre ) VALUES ('"+req.body.usuario+"', '"+req.body.pass+"', '"+req.body.nombre+"');", function(err, result) {
            if(err) {
                return console.error('error running query', err);
            }
            
            //console.log(result);
            client.end();
            return res.json(result.rows);
            
        });
        
    });
});




console.log("Servidor iniciado");
    // escuchar
    app.listen(process.env.PORT || 8080, function(){console.log("the server is running");});

