const accountId = 123456 
let accountEmail = "chandresh@google.com"
var accountPassword = "1234567"
accountCity = "Gozaria"

// accountId = 2
/*

Prefer not to var
because of issue in block and functional scope
*/


accountEmail = "ct@ct.com"
accountPassword = "pasword"
accountCity = "Mahesana"


console.table([accountEmail, accountId, accountCity, accountPassword])