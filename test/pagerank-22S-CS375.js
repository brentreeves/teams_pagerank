var Pagerank = require('../lib/pagerank')
/*
purple: Marlon Miller Matute, Miranda Hixson, Julio Lopez
white: Fisher Coburn, Mitchell Melrose, Luis Ibarra
fightfight: Justin Raitz, Alex Jackson, Brett Hammit
fight: Christa Greenwood, Megan Skeen, Garrett Powell
*/

// 1-based choices
// Mr Blee,1,2,3 means first choice is FIRST person in list
prefs = `
Alex_Jackson,7,2,9,3,5,4
Brett_Hammit,7,1,3,5,9,8
Christa_Greenwood,10,5,9,7,11,6
Fisher_Coburn,3,10,2,1,12,6
Garrett_Powell,9,3,6,10,1,7
Julio_Lopez,7,1,9,11,3,5
Justin_Raitz,1,2,9,3,5,4
Luis_Ibarra,6,5,9,3,2,1
Marlon_Miller_Matute,11,6,5,1,7,8
Megan_Skeen,3,1,5,8,7,4
Miranda_Hixson,9,6,3,1,7,4
Mitchell_Melrose,,,,,,
`

//
// CAUTION !!  ZERO based array
//
nodes=[
[6,1,8,2,4,3],
[6,0,2,4,8,7],
[9,4,8,6,10,5],
[2,9,1,0,11,5],
[8,2,5,9,0,6],
[6,0,8,10,2,4],
[0,1,8,2,4,3],
[5,4,8,2,1,0],
[10,5,4,0,6,7],
[2,0,4,7,6,3],
[8,5,2,0,6,3],
[]
    
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
