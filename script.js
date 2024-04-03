num1 = 0


function main() {

}
function easteregg(eastereggnum1){
    if (eastereggnum1 == 1){
        window.open("https://www.drummencustomguns.com")
    }
}

function button11old() {
    document.getElementById("button1").innerHTML = "Dont click on this please"
}
function button11new() {
    try {
        document.getElementById("button1").innerHTML = "Dont"
    }
    catch (err11new) {
        console.error("Error: ", err11new)
    }
}
function button12() {
    try {
        while(true){
            if (num1 == 9){
                easteregg(1)
                num1 = num1 + 100
                console.log(num1)
            }
            else{
                document.getElementById("button1").innerHTML = "Are you serious right now"
                window.open("index1.html")
                num1 = num1 + 1
                console.log(num1)
                return
            }
        }
        
    }
        catch (err12) {
        console.error("Error: ", err12)
    }
}


