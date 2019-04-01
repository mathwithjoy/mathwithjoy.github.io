//global variables

/**
* Returns the number of decimals
**/
function countDecimals(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;        
}

/**
 * Returns a "value" rounded to the nearest "decimals" place
 */
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

/*
Returns 1 or -1
*/
function posNegOne() {
    return Math.round(Math.random()) * 2 - 1;    
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random alpha-numeric code of charaters in the "possible" string with a length of "size"
 */
function getRandomAlphaNumericCode(size)
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz123456789";

    for( var i=0; i < size; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

/**
 * Returns a random alphabetic code with a length of "size"
 */
function getRandomAlphabeticCode(size)
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < size; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

/*
generates Topic 0 Lesson 1 Problem 1
*/
function gent0l1p1() {
    var problemSpan1 = document.getElementById("t0l1p1n1");
    var problemSpan2 = document.getElementById("t0l1p1n2");
    var problemSpan3 = document.getElementById("t0l1s1n1");
    
    var randInt1 = getRandomInt(2, 9);
    var randInt2 = 0;
    var value1 = Math.pow(randInt1,randInt2);
    
    problemSpan1.innerHTML = ""+randInt1+"^{x}="+value1+"";
    problemSpan2.innerHTML = "x";
    problemSpan3.innerHTML = ""+randInt1+"^{"+randInt2+"}="+value1+"";
    
    MQ.StaticMath(problemSpan1);
    MQ.StaticMath(problemSpan2);
    MQ.StaticMath(problemSpan3);
}

/*
generates Topic 0 Lesson 1 Problem 2
*/
function gent0l1p2() {
    var problemSpan1 = document.getElementById("t0l1p2n1");
    var problemSpan2 = document.getElementById("t0l1p2n2");
    var problemSpan3 = document.getElementById("t0l1s2n1");
    
    var randInt1 = getRandomInt(2, 9);
    var randInt2 = getRandomInt(2, 5);
    var value1 = Math.pow(randInt1,randInt2);
    
    problemSpan1.innerHTML = ""+randInt1+"^{x}=\\frac{1}{"+value1+"}";
    problemSpan2.innerHTML = "x";
    problemSpan3.innerHTML = ""+randInt1+"^{-"+randInt2+"}=\\frac{1}{"+value1+"}";
    
    MQ.StaticMath(problemSpan1);
    MQ.StaticMath(problemSpan2);
    MQ.StaticMath(problemSpan3);
}