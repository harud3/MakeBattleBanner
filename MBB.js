function addTextToImage(){
    var text = document.getElementById('userInput').value;
    var img = document.getElementById('image');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = 'italic bold 30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text, 215 - (text.length * 30), 95);
    var dataUrl = canvas.toDataURL('image/png');
    img.src = dataUrl;
}