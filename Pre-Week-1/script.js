function panjangTracker(){
    const inputString = document.getElementById("formulir")
    const inputValue = inputString.value.length
    document.getElementById("length").innerHTML = inputValue;
    if(event.key === "Enter") {
        document.getElementById("query").innerHTML = inputString.value;
    }
}   
