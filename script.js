
// load list from file
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const textList = this.responseText.trim().split('\n');
        // show random discords.txt
        for (let i = 1; i <6; i++) { var randomText = textList[Math.floor(Math.random() * textList.length)];
            document.getElementById('link'+i).innerHTML = randomText; document.getElementById('link'+i).href = randomText; }

    }
};
xhttp.open("GET", "discords.txt", true);
xhttp.send();



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const textList = this.responseText.trim().split('\n');
        // show random text.txt
        document.getElementById('result2').innerHTML = textList[Math.floor(Math.random() * textList.length)]; }
};
xhttp.open("GET", "text.txt", true);
xhttp.send();



function myFunction() {
    var copyText = document.getElementById("result2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
}
