var orders =[ {
	"order_id": 1,
	"table_id": 1,
	"products": [{
			"product": "PIZZA",
			"quantity": 3,
			"price": "$10.000"
		},
		{
			"product": "HOTDOG",
			"quantity": 1,
			"price": "$1.300"
		},{
			"product": "COKE",
			"quantity": 1,
			"price": "$1.300"
		
		}
			]
		}
	]
	
	function genera_tabla() {
	  // Obtener la referencia del elemento body
	  var body = document.getElementsByTagName("body")[0];

	  // Crea un elemento <table> y un elemento <tbody>
	  var tabla   = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	  var numOrder=orders.length -1;
	  // Crea las celdas
	  for (var i = 0; i < orders[numOrder].products.length; i++) {
		// Crea las hileras de la tabla
		var hilera = document.createElement("tr");

		for (var j = 0; j < 3; j++) {
		  // Crea un elemento <td> y un nodo de texto, haz que el nodo de
		  // texto sea el contenido de <td>, ubica el elemento <td> al final
		  // de la hilera de la tabla
		  var celda = document.createElement("td");
		  if (j==0) {
			  var textoCelda = document.createTextNode("Product"+orders[0].products[i].product);		  
			  }	  
		if (j==1) {
			  var textoCelda = document.createTextNode("Quantity"+orders[0].products[i].quantity);		  
			  }	  	
			
		if (j==2) {
			  var textoCelda = document.createTextNode("Price"+orders[0].products[i].price);		  
			  }	  	
				
			
//		  var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
		  celda.appendChild(textoCelda);
		  hilera.appendChild(celda);
		}

		// agrega la hilera al final de la tabla (al final del elemento tblbody)
		tblBody.appendChild(hilera);
	  }

	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");
	}
	function myOrder(){
		
		document.getElementById("Name").innerHTML=orders[0].products[0].price;
		
		
	}