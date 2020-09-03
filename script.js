let input = document.getElementById('qr-data');
let generateQrCode = document.getElementById('generate-qr-code');
let qrCodeDiv = document.getElementById('qr-code');

let qrcode = new QRCode(qrCodeDiv, {
    text: `${input.value}`,
    width: 300,
    height: 300,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

generateQrCode.addEventListener('click', () => {
    let inputValue = input.value;
    if(!inputValue) return;
    qrcode.makeCode(inputValue);
});