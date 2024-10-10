const items = [
    "@e", "off", "for /f", "tk=*","%%a", "dir", "/b", 
    "%fP%\\*.ico", "echo", "Fnd %%a", "echo Pth to", ".ico", 
    "is:%fP%\\%%a", "[ShlCI]", ">", "%dIni%", "%iPath%", 
    ">>", "pause", "int m(){gn(","g,S,[]{","rtn 0;", "g[S>>1]=1;", 
    "for(int", "i=0;i<S-1;","i++){int", "a=i-1<0?","--S:i-1;", 
    "b=i+1>S-1?0:i+1;", "g[Q(i/X+1,Y,i%X)]=","a%X)]^g[Q(b/X", 
    "for(int", "i=0;", "putc(i%X","==0?:g[i]);", "rtn 0;", 
    "pubKFBty(b[]","pKB)thrExc", "KF keyFct", "X509Spec", 
    "rtn", "priv", "bool", "vfSig(pubK","b[]msg,", 
    "SHA256/ECDSA"
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomNumberElement() {
    const index = getRandomNumber(0, items.length - 1);
    const numberElement = document.createElement('div');
    numberElement.className = 'random-number';
    numberElement.innerText = items[index];

    const x = getRandomNumber(0, window.innerWidth - 50);
    const y = getRandomNumber(0, window.innerHeight - 50);
    numberElement.style.left = `${x}px`;
    numberElement.style.top = `${y}px`;
    numberElement.style.fontSize = getRandomNumber(10, 20) + `px`;
    numberElement.style.position = 'absolute';

    document.body.appendChild(numberElement);

    setTimeout(() => {
        document.body.removeChild(numberElement);
    }, 180);
}

window.addEventListener('load', () => {
    setInterval(createRandomNumberElement, 20);
});
