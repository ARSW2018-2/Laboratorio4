var orders =[ {
	"order_id": 1,
	"table_id": 1,
	"products": [{
			"product": "PIZZA",
			"quantity": 3,
			"price": "$15.000"
		},
		{
			"product": "HAMBURGER",
			"quantity": 1,
			"price": "$12.300"
		}
			]
		}
	]
	
	
	function myOrder(){
		
		document.getElementById("Name").innerHTML=orders[0][1];
		
	}