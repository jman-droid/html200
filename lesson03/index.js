let brewers = ['aeropress', 'hario', 'kalita', 'kono', 'chemex'];

console.log(brewers);

// [object Array] (5)
["aeropress","hario","kalita","kono","chemex"]

 brewers.push('french press');

console.log(brewers);

// [object Array] (6)
["aeropress","hario","kalita","kono","chemex","french press"]

 brewers.splice(2,1);

console.log(brewers);

// [object Array] (5)
["aeropress","hario","kono","chemex","french press"]

let str = brewers.join(',');

console.log(str);

"aeropress,hario,kono,chemex,french press"
