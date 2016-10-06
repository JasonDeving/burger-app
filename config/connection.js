var mysql = require('mysql');

// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Njmitx123",
        database: "starwars"
    },

    // jawsDB
    jawsDB: {
        port: 3306,
        host: '',
        user: '',
        password: "",
        database: "" 
    }
}

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;