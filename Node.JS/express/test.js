const express = require('express');

const app = express();

/*app.use((req, res, next) => {
	console.log("HELLO FROM MIDDLEWARE");
	next();
});*/

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) =>{
		const user = {
			name:'sally'
		}
		res.send(user);
});
app.listen(3000);