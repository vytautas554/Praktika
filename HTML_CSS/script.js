// index
function fontBigger () {
    document.getElementById('bigger-font').style.fontSize = '50px';
}

function fontItalic () {
    document.getElementById('bigger-font').style.fontStyle = 'italic';
}

function changeText () {
    document.getElementById('change-text').innerHTML = 'Dešimtas pagal dydį kalnas';
}

// end of index

// index3
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img1');
var captionText = document.getElementById('caption');

img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = 'none';
}



// end of index


