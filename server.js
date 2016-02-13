

var orm = require('../Config/orm.js');

orm.partyByCost('parties_table');
orm.findByPartyName('parties_table', 'party_name');
orm.findClientByMostParties('');

