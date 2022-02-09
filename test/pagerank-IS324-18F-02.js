var Pagerank = require('../lib/pagerank')

// 1-based choices
// Mr Blee,1,2,3 means first choice is FIRST person in list
prefs = `
Anderson Cole,28,26,57,13
Baccarini Bryce,
Beghtel Jess,7,5,38,34,65,55
Boutwell Peyten,44,66,30,52,16,37
Brandenburg Annina,68,7,51,3,59,32
Buergner Shannon,14,31,32,4,13,22
Burnam Lydia,3,5,62,29,36,13
Byker Dakota,25,54,34,50,22,23
Chambers Dalton,20,36,38,65,53,46
Chaney Collin,15,57,36,69,52,26
Chessher Caley,45,55,7,6,13,2
Chong Nicholas,
Clayton Essie,22,24,26,57,1,23
Dayton Madeline,6,29,17,50,38,62
Donahue Riley,10,57,26,69,16,25
Ellis Riley,
Evans Tiana,14,38,5,68,47,53
Falbo Emilleen,55,46,45,21,38
Feller Jared,62,58,51,70,20,30
Fetter Zach,36,9,62,46,21,19
Fine Jackson,9,36,20,16,65,2
Frech Allison,8,13,23,24,25,26
Gandy Jake,22,26,24,34,62,54
Gould Taylor,22,13,26,2,23,57
Hancock Mackenzie,8,22,23,54,34,13
Harris Willie,57,22,13,23,24,
Hassel Zach,
Howard Chase,
Husbenet Grace,63,34,65,50,18,55
James Tracy,4,32,2,65,52,37
Jenschke Morgan,6,14,43,35,45,65
Jones Kennedy,6,5,7,63,53,44
Keith Dustin,65,63,60,19,62,3
Kelley Ty,50,29,66,63,21,13
Keo Rebecca,53,39,63,29,55,49
Killough Kyle,20,9,46,52,65,62
Kohl Kolton,66,52,16,30,44,4
Lucas Tucker,14,17,3,13,9,36
Maldonado LisaMarie,35,63,53,45,54,67
Marr Drew,
McDermett Kali,45,29,18
McDoniel Reagan,7,3,69,35,22,67
Meredith Grayson,45,62,29,46,25,63
Mulrooney Michelle,4,66,30,52,16,37
Ng Kristy,55,43,11,62,18,41
Palmer Jonathan,65,45,18,40,36,20
Patel Dilan,
Pennington Gracie,
Phan John,62,19,6,1,26,14
Powell Colton,34,29,13,54,16,65
Powers Patrick,62,19,58,68,34,65
Ricks Payten,37,16,30,4,44,62
Ritchie Lexi,35,39,63
Rodriguez Evan,
Saltsman Carrie,45,43,11,62,26,2
Schultz Brandon,
Scott Derek,26,10,15,1,27,24
Shaw Ryan,62,19,14,
Shelton Tarin,68,45,65,24,9,11
Smith Alec,34,66,62,33,57,22
Steadman Shawn,47,5,68,3,34,65
Stevens Luke,19,58,51,70,30,20
Stewart Amber,29,65,34,39,50,35
Stovall Hayden,1,50,63,34,27,40
Turner Kaman,33,63,36,32,20,29
Walker Lauren,34,4,44,23,60,45
Wang Yuming,
Washington Keith,5,7,51,3,59,32
Wilson Aric,70,55,34,57,2,1
Wilson Kane,36,69,62,19,37,52
`

//
// CAUTION !!  ZERO based array
//
nodes=[
[27,25,56,12],
[],
[6,4,37,33,64,54],
[43,65,29,51,15,36],
[67,6,50,2,58,31],
[13,30,31,3,12,21],
[2,4,61,28,35,12],
[24,53,33,49,21,22],
[19,35,37,64,52,45],
[14,56,35,68,51,25],
[44,54,6,5,12,1],
[],
[21,23,25,56,22],
[5,28,16,49,37,61],
[9,56,25,68,15,24],
[],
[13,37,4,67,46,52],
[54,45,44,20,37],
[61,57,50,69,19,29],
[35,8,61,45,20,18],
[8,35,19,15,64,1],
[7,12,22,23,24,25],
[21,25,23,33,61,53],
[21,12,25,1,22,56],
[7,21,22,53,33,12],
[56,21,12,22,23],
[],
[],
[62,33,64,49,17,54],
[3,31,1,64,51,36],
[5,13,42,34,44,64],
[5,4,6,62,52,43],
[64,62,59,18,61,2],
[49,28,65,62,20,12],
[52,38,62,28,54,48],
[19,8,45,51,64,61],
[65,51,15,29,43,3],
[13,16,2,12,8,35],
[34,62,52,44,53,66],
[],
[44,28,17],
[6,2,68,34,21,66],
[44,61,28,45,24,62],
[3,65,29,51,15,36],
[54,42,10,61,17,40],
[64,44,17,39,35,19],
[],
[],
[61,18,5,25,13],
[33,28,12,53,15,64],
[61,18,57,67,33,64],
[36,15,29,3,43,61],
[34,38,62],
[],
[44,42,10,61,25,1],
[],
[25,9,14,26,23],
[61,18,13],
[67,44,64,23,8,10],
[33,65,61,32,56,21],
[46,4,67,2,33,64],
[18,57,50,69,29,19],
[28,64,33,38,49,34],
[49,62,33,26,39],
[32,62,35,31,19,28],
[33,3,43,22,59,44],
[],
[4,6,50,2,58,31],
[69,54,33,56,1],
[35,68,61,18,36,51]

    ]

linkProb=0.85 //highnumbersaremorestable
tolerance=0.0001 //sensitivityforaccuracyofconvergence.

readPrefs = function(aString) {
    
}

console.log('nodes')
var i=0;
nodes.forEach( function(element) {
    console.log(i++,element);
});


Pagerank(nodes, linkProb, tolerance, function(err,res){
    if(err) thrownewError(err)

    //otherwiseusetheresult(res)
    console.log('\nPagerankscores')
    console.log(res)
})
