var Pagerank = require('../lib/pagerank')

// 1-based array
prefs = `
Troy Adams,22,30,11,23,10,28
Jared Arthurs,28,5,8,4,29,17
Tiffanie Birrell,22,2,28,20,25,1
Collin Blanchard,5,28,17,2,15,20
Holly Buff,4,28,2,8,26,27
Zane Burton,14,17,29,26,27,4
Ryan Case,13,20,16,29,15,14
Joseph Cisneros,26,5,27,2,17,13
Joseph Divalentone,15,3,12,1,28,18
Cole Duncan,
Bryce Gattis,1,23,19,10,28,2
Jessica Halbert,18,9,5,11,28,25
Sean Halstead,7,20,16,29,15,14
Holt Herndon,17,6,28,15,5,4
Michael Isome,9,20,16,7,13,
Ronny Landis,20,23,1,15,6,26
Gideon Luck,29,14,6,5,28,4,
John Marsden,26,8,12,24,27,7
Nnamdi Massally,24,23,2,17,11,29
Stephen McGregor,16,6,15,17,7,13
Isaiah Moore,11,23,14,8,4,12
Lucas Newton,30,1,18,3,16
Christian Parker,15,16,1,28,11,19
Kole Peoples,19,18,29,1,14,2
John Roper,1,18,29,10,14
Rachael Shudde,27,8,29,5,2,4
Connor Smith,26,8,5,29,4,20
Robert Towell,2,4,5,14,15,17
Matt Williams,26,27,17,18,2
Sam Willis,1,22,27,21,19,26
`

// zero based array
nodes=[

[36,28,24,2,23,19],
[14,9,22,10,18,],
[7,6,29,,,],
[,,,,,],
[32,6,25,23,27,29],
[25,39,27,18,5,],
[,,,,,],
[12,29,,,,],
[18,22,14,10,2,],
[9,22,14,18,33,],
[13,21,29,8,12,24],
[29,8,16,27,,],
[37,11,29,19,38,],
[2,22,9,10,18,],
[7,39,,,,],
[,,,,,],
[23,5,32,27,19,11],
[6,25,7,9,31,24],
[17,13,37,11,,],
[23,26,28,,,],
[39,30,27,11,17,26],
[9,14,18,10,2,],
[,,,,,],
[28,18,39,3,6,25],
[6,39,18,5,27,],
[23,34,28,6,25,],
[33,18,32,16,6,25],
[24,23,20,26,31,],
[12,8,16,27,,],
[26,18,29,27,16,21],
[18,6,28,25,39,],
[,,,,,],
[16,27,8,10,18,],
[,,,,,],
[27,39,23,,,],
[1,24,6,,,],
[13,11,18,,,],
[3,11,8,27,35,10],
[7,15,6,25,27,],    
]

linkProb=0.85 //highnumbersaremorestable
tolerance=0.0001 //sensitivityforaccuracyofconvergence.

readPrefs = function(aString) {
    
}

console.log('nodes')
var i=0;
nodes.forEach( function(element) {
    console.log(i++, element);
});


Pagerank(nodes, linkProb, tolerance, function(err,res){
    if(err) thrownewError(err)

    //otherwiseusetheresult(res)
    console.log('\nPagerankscores')
    console.log(res)
    var i=1;
    res.forEach( function(el) {
	console.log(el);
    });
})
