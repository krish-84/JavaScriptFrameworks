var mysql = require('mysql');
var assert = require('assert');





var con = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "Gobi_sql"
});

// INSERT INTO
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO personal_details (firstname, lastname, age, gender) VALUES ?";
  var values = [
    ['Radhika', 'Ram Kumar', 32, 'Female'],
    ['Lakshmi Devi', 'Ram Kumar', 10, 'Female']
  ];
  con.query(sql, [values], function (err, result) {
  	if (err) throw err;
  	console.log("2 record inserted")
  });
});



// SELECT FIELDS
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM personal_details", function (err, result, fields) {
  	if (err) throw err;
  	console.log(`${result[0].firstname} ${result[0].lastname}`);
  	console.log(fields);
  });
});


// ASSERTION AND GET ACTUAL VALUE
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM personal_details", function (err, result, fields) {
    if (err) throw err;
    assert.equal(result[0].firstname, "Gobalakrishnan", "It does not Match");
    console.log(result[0].firstname);
  });
});


// WHERE
con.connect(function(err) {
  if(err) throw err;
  con.query("SELECT * FROM personal_details WHERE gender = 'Male'", function(err, result) {
    if(err) throw err;
    console.log(result);
  });
});


//ORDER BY
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM personal_details ORDER BY firstname", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
