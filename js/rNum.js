const items = ["@e","for /f","tk=*","%%a","/b","%fP%\\*.ico","Fnd %%a",".ico","is:%fP%\\%%a","[ShlCI]",">","%dIni%","%iPath%",">>","int m(){","g[S>>1]=1;","for(int","i=0;i<S-1;","i++){int","a=i-1<0?","--S:i-1;","b=i+1>S-1?0:i+1;","g[Q(i/X+1,Y,i%X)]=","a%X)]^g[Q(b/X","putc(i%X","==0?:g[i]);","rtn 0;",
"uint8_t*","volatile","(x>>3)&1","~mask","0xDEAD","0xBEEF","0xCAFEBABE","pubKFBty(b[]","thrExc","KF keyFct","X509Spec","vfSig(pubK","b[]msg,","SHA256(","ECDSA_","ASN1_","DER_seq","BN_new()","memcmp(","len>>2" ];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const weightedItems = items.flatMap(x =>
    Array(Math.max(1, 12 - x.length)).fill(x)
);

function isInsideSafeZone(x, y) {
    const container = document.querySelector('.link-table');
    if (!container) return false;

    const rect = container.getBoundingClientRect();
    const padding = 120;

    return (
        x > rect.left - padding &&
        x < rect.right + padding &&
        y > rect.top - padding &&
        y < rect.bottom + padding
    );
}

function createRandomNumberElement() {
    const index = getRandomNumber(0, weightedItems.length - 1);
    const el = document.createElement('div');
    el.className = 'random-number';

    el.innerText =
        weightedItems[index] + (Math.random() > 0.7 ? ";" : "");

    let x, y;
    do {
        x = getRandomNumber(0, window.innerWidth - 50);
        y = getRandomNumber(0, window.innerHeight - 50);
    } while (isInsideSafeZone(x, y));

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.fontSize = getRandomNumber(10, 20) + 'px';

    document.body.appendChild(el);

    el.addEventListener('animationend', () => {
        el.remove();
    });
}

window.addEventListener('load', () => {
    setInterval(createRandomNumberElement, 45);
});
