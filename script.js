
// load list from file
fetch('discords.txt')
    .then(response => response.text())
    .then(data => {
        const textList = [];
        textList.push(...data.trim().split('\n'));
        // show random text.txt
        for (let i = 1; i <4; i++) {
            var randomText = textList[Math.floor(Math.random() * textList.length)];
            document.getElementById('link'+i).innerHTML = randomText;
            document.getElementById('link'+i).href = randomText;
        }

    });

fetch('text.txt')
    .then(response => response.text())
    .then(data => {
        const textList = [];
        textList.push(...data.trim().split('\n'));
        // show random text.txt
        document.getElementById('result2').innerHTML = textList[Math.floor(Math.random() * textList.length)];
    });


function myFunction() {
    var copyText = document.getElementById("result2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
}
