var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    all: (tableInput, cb) => {
        console.log(tableInput)
        console.log(cb)
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    create: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, res) => {
            if (err) {
                throw err;
            }

            cb(res);
        });
    },
    update: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }

            cb(res);
        });
    }
};

module.exports = orm;