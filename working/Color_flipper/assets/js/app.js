function getRandomSimpleColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomHexColor(arr) {
    var colorHex = '#';
    for(var i = 0; i < 6; i++) {
        colorHex += arr[Math.floor(Math.random() * arr.length)];
    }
    return colorHex;
}

hexElement.onclick = (e) => {
    if(!isHex) {
        isHex = true;
        if (contentElement.classList.contains('simple')) {
            contentElement.classList.remove('simple')
        }

        if (!(contentElement.classList.contains('hex'))) {
            contentElement.classList.add('hex')
        }
    }
}

simpleElement.onclick = (e) => {
    if(isHex) {
        isHex = false;
        if (contentElement.classList.contains('hex')) {
            contentElement.classList.remove('hex')
        }

        if (!(contentElement.classList.contains('simple'))) {
            contentElement.classList.add('simple')
        }
    }
}


btn.onclick = (e) => {
if (!isHex) {
        var color = getRandomSimpleColor(simpleColor);
        subContentElement.style.background = color;
        colorElement.textContent = color;
} else {
        var color = getRandomHexColor(hexColor);
        subContentElement.style.background = color;
        colorElement.textContent = color;
    }
}
