// // Simple Pyramid
document.write("Simple Pyramid")
document.write("<br/>")
for(let i=1; i<=5; i++){
    for (let j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}

document.write("<br/>")
////////////////////////////


// Rotated simple pyramid
document.write("Rotated simple pyramid")
document.write("<br/>")
for(let i=1; i<=5; i++){
    for (let j = 1; j <= 5-i; j++) {
        document.write("&nbsp&nbsp")
    }
    for (let j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}
document.write("<br/>")
//////////////////////////////



//Inverted pyramid
document.write("Inverted pyramid")
document.write("<br/>")
for(let i=0; i<=5; i++){
    for(let j=0; j<5-i; j++){
        document.write("*")
    }
    document.write("<br/>")
}
//////////////////////////////



// Rotated Inverted pyramid
document.write("Rotated Inverted pyramid")
document.write("<br/>")
for(let i = 0; i < 5; i++){
    for (let j = 0; j < i; j++) {
        document.write("&nbsp&nbsp")
    }
    for (let j = 0; j < 5-i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}
document.write("<br/>")
/////////////////////////////////



// TRIANGLE
document.write("TRIANGLE")
document.write("<br/>")
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5-i; j++) {
        document.write("&nbsp")
    }
    for(let j = 1 ; j<=i; j++){
        document.write("*")
    }
    for (let j = 1; j <= 5-i; j++) {
        document.write("&nbsp")
    }
    document.write("<br/>")
}
document.write("<br/>")
///////////////////////////////


//Inverted triangle
document.write("Inverted triangle")
document.write("<br/>")
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("&nbsp")
    }
    for (let j = 1; j <= 6-i; j++){
        document.write("*")
    }
    document.write("<br/>")
}
document.write("<br/>")
////////////////////////////////




/////**NUMBER PYRAMID**//////
document.write("Number Pyramid")
for(let i=0; i<5; i++){
    for (let j = 0; j < i; j++) {
        document.write(i)
    }
    document.write("<br/>")
}
document.write("<br/>")
//////////////////////////////



/////**Continious Pyramid**//////
document.write("Continious Number Pyramid")
document.write("<br/>")
let currentNumber =0;
for(let i=1; i<5; i++){
    for (let j = 0; j < i; j++) {
        currentNumber++
        document.write(currentNumber)
    }
    document.write("<br/>")
}
document.write("<br/>")
//////////////////////////////



/////**Rotated Pyramid**//////
document.write("Rotated Number Pyramid")
document.write("<br/>")
for(let i=1; i<5; i++){
    for(let j =0; j < 5-i; j++){
        document.write("&nbsp&nbsp")
    }
    for(let j =0; j < i; j++){
        document.write(j + i)
    }
    document.write("<br/>")
}

document.write("<br/>")
//////////////////////////////





/////** Alphabet Pyramid **//////
document.write("Alphabet Pyramid")
document.write("<br/>")
let letter;
for(let i = 1; i < 5; i++){
    if(i == 1) letter = "A"
    else if(i == 2) letter = "B"
    else if(i == 3) letter = "C"
    else if(i == 4) letter = "D"

    for(let j = 1; j <= i; j++){
        document.write(letter)
    }
    document.write("<br/>")
}
document.write("<br/>")
//////////////////////////////




/////** Continuous Alphabet Pyramid **//////
document.write("Continuous Alphabet Pyramid")
document.write("<br/>")
let num=1;
let l;
for(let i = 1; i < 5; i++){
    for(let j = 1; j <= i; j++){
        document.write(alphabetCheck(num, l))
        num++
    }
    document.write("<br/>")
}
document.write("<br/>")

function alphabetCheck(num, l) {
    if(num === 1) l = "A"
    if(num === 2) l = "B"
    if(num === 3) l = "C"
    if(num === 4) l = "D"
    if(num === 5) l = "E"
    if(num === 6) l = "F"
    if(num === 7) l = "G"
    if(num === 8) l = "H"
    if(num === 9) l = "I"
    if(num === 10) l = "J"
    return l
}
//////////////////////////////



/////**Polidrome Triangle**//////
document.write("Polidrome Triangle")
document.write("<br/>")

let rows = 4

    let count = 1
for(let i = 1; i < 2 * rows; i += 2){ 
    for (let j = 1; j <= 8 - i; j++) {
        document.write("&nbsp")
    }
    for (let j = 1; j <= i; j++) {
         document.write("*")
    } 
    document.write("<br/>")
}

document.write("<br/>")
////////////////////////////


let n = 5; 
for (let i = 1; i <= n; i++) { 
    let count = 1; 
    for (let j = 1; j <= 2 * n; ++j) { 
        if (i + j >= n + 1 && (i >= j - n + 1)) {  
            document.write(count.toString() + ' ')
            count++; 
        } else { 
            document.write('&nbsp&nbsp&nbsp')
        } 
    } 
    document.write("<br/>")
}