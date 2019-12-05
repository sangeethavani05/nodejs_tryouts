const mongodb = require('@tdeveloper/tzl_dbaccessor').mongo;
const mariadb = require('@tdeveloper/tzl_dbaccessor').mysql;

const conf = {
    api:'mongodb',
    client : '',
    host : '10.1.10.47',
    port : 22345,
    schema :'pons',
    auth :false,
    username : 'root',
    password : 'D1geezle',
    authSource : 'admin'
};

const db = new mongodb(conf);

console.log(db);
setTimeout(function () {
    db.find('students',{}, function (err, result) {
        console.log(result);
    })
},1000);

setTimeout(function () {
    db.insert('students',{name:'Jeya'},function (err,result) {
        console.log(result);
    })
},200);

