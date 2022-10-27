
// load list from file
fetch('discords.txt')
    .then(response => response.text())
    .then(data => {
        const textList = [];
        textList.push(...data.trim().split('\n'));
        // show random text.txt
        var randomText = textList[Math.floor(Math.random() * textList.length)];
        document.getElementById('link').innerHTML = randomText;
        document.getElementById('link').href = randomText;
    });

fetch('text.txt')
    .then(response => response.text())
    .then(data => {
        const textList = [];
        textList.push(...data.trim().split('\n'));
        // show random text.txt
        document.getElementById('result2').innerHTML = textList[Math.floor(Math.random() * textList.length)];
    });
