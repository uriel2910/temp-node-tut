// MANUAL APROACH (CREATE package.json IN THE ROOT, CREATE PROPERTIES, ETC.)
//npm init (STEP BY STEP, PRESS ENTER TO SKIP)
//npm init -y (EVERITHING DEFAULT)

const _ = require("lodash");

const items = [1, [2, [3, [4 ,[5]]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);
