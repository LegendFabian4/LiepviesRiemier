function button11old() {
    document.getElementById("button1").innerHTML = "Dont click on this"
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
        document.getElementById("button1").innerHTML = "Are you serious right now"
        window.open("index1.html")
    }
    catch (err12) {
        console.error("Error: ", err12)
    }
}