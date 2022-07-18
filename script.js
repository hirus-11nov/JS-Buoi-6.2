function ex1 () {
    var numN = +document.getElementById("txtNumN").value;
    var result = document.getElementById("result1");
    result.innerHTML = "";
    var count;
    for (var i = 1; i <= numN; i++) {
        count = 0;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 0 && i > 1) {
            result.innerHTML += i + "\t";
        }
    }
}
