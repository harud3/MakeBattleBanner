function addTextToImage(){
    var text = document.getElementById('userInput').value;
    var img = document.getElementById('image1');
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, 210, 100);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text, 210 - (text.length * 30), 95);
    var dataUrl = canvas.toDataURL('image/png');
    img.src = dataUrl;
    ctx.clearRect(0, 0, 210, 100);


    img = document.getElementById('image2');
    canvas = document.getElementById('canvas2');
    ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text, 210 - (text.length * 30), 95);
    var dataUrl = canvas.toDataURL('image/png');
    img.src = dataUrl;
    ctx.clearRect(0, 0, 210, 100);


    img = document.getElementById('image3');
    canvas = document.getElementById('canvas3');
    ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, 210, 100);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text, 210 - (text.length * 30), 95);
    var dataUrl = canvas.toDataURL('image/png');
    img.src = dataUrl;
    ctx.clearRect(0, 0, 210, 100);
}