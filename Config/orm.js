var connection = require('../Config/connection.js');

var orm = {
    partyByCost: function(tableInput) {
        var s = 'SELECT party_name FROM ' + tableInput + ' ORDER BY party_cost;';
        connection.query(s, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findByPartyName: function(tableInput, party_name) {    
        var s = 'SELECT * FROM ' + tableInput + ' WHERE party_name = ?';
        connection.query(s, [party_name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findClientByMostParties: function(tableOne, tableTwo) {
        var s = 'SELECT client_name, COUNT(client_name) AS count FROM '+tableOne+' LEFT JOIN '
        +tableTwo+' ON '+tableTwo+'.client_id = '+tableOne+'.id GROUP BY client_name ORDER BY count desc LIMIT 1';
        connection.query(s, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    }
};
    
module.exports = orm;