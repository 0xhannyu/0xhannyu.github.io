const layer = document.getElementById("random-number-layer");

const items = [
 "@e","for /f","tk=*","%%a","/b","%fP%\\*.ico","Fnd %%a",".ico",
 "is:%fP%\\%%a","[ShlCI]",">","%dIni%","%iPath%",">>","int m(){",
 "g[S>>1]=1;","for(int","i=0;i<S-1;","i++){int","a=i-1<0?",
 "--S:i-1;","b=i+1>S-1?0:i+1;","g[Q(i/X+1,Y,i%X)]=",
 "a%X)]^g[Q(b/X","putc(i%X","==0?:g[i]);","rtn 0;",
 "uint8_t*","volatile","(x>>3)&1","~mask","0xDEAD","0xBEEF",
 "0xCAFEBABE","pubKFBty(b[]","thrExc","KF keyFct","X509Spec",
 "vfSig(pubK","b[]msg,","SHA256(","ECDSA_","ASN1_",
 "DER_seq","BN_new()","memcmp(","len>>2"
];

const weightedItems = items.flatMap(x =>
    Array(Math.max(1, 12 - x.length)).fill(x)
);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomNumberElement() {
    const el = document.createElement("div");
    el.className = "random-number";

    el.textContent =
        weightedItems[rand(0, weightedItems.length - 1)] +
        (Math.random() > 0.7 ? ";" : "");

    const maxX = layer.clientWidth - 60;
    const maxY = layer.clientHeight - 20;

    el.style.left = rand(0, maxX) + "px";
    el.style.top = rand(0, maxY) + "px";
    el.style.fontSize = rand(10, 20) + "px";

    layer.appendChild(el);

    el.addEventListener("animationend", () => el.remove());
}

window.addEventListener("load", () => {
    setInterval(createRandomNumberElement, 45);
});
