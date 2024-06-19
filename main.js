let ch=document.getElementsByClassName("ch");
let d=document.getElementsByClassName("d");
let s=document.getElementsByClassName("s");
let ds=document.getElementsByClassName("ds");
let m=document.getElementsByClassName("m");
let b=document.getElementsByClassName("b");
let g=document.getElementsByClassName("g");


let imgch=[
    "img/ch1.jpg",
    "img/ch2.jpg",
    "img/ch3.jpg",

    "img/ch4.jpg",
    "img/ch5.jpg",
    "img/ch6.jpg",

    "img/ch7.jpg",
    "img/ch8.jpg",

];
let imgd=[
    "img/dr1.jpg",
    "img/dr2.jpg",
    "img/dr3.jpg",

    "img/dr4.jpg",
    "img/dr5.jpg",

    "img/dr6.jpg",
    "img/dr7.jpg",
    "img/dr8.jpg",

]
let imgs=[
    "img/s1.jpg",
    "img/s2.jpg",
    "img/s3.jpg",

    "img/s4.jpg",
    "img/s5.jpg",
    "img/s6.jpg",

    "img/s7.jpg",
    "img/s8.jpg",


]
let imgds=[

    "img/ds1.jpg",
    "img/ds2.jpg",
    "img/ds3.jpg",

    "img/ds4.jpg",
    "img/ds5.jpg",

    "img/ds6.jpg",
    "img/ds7.jpg",
    "img/ds8.jpg",

]
let imgm=[
    "img/m1.webp",
    "img/m2.webp",
    "img/m3.webp",

    "img/m4.webp",
    "img/m5.webp",
    "img/m6.webp",

    "img/m7.jpg",
    "img/m8.webp",

]
let imgb=[
    "img/d1.jpg",
    "img/d2.jpg",

    "img/d3.jpg",
    "img/d4.jpg",
    "img/d5.jpg",

    "img/d6.jpg",
    "img/d7.jpg",
    "img/d8.jpg",

]
let imgg=[
    "img/g1.jpg",
    "img/g2.jpg",
    "img/g3.jpg",

    "img/g4.jpg",
    "img/g5.jpg",
    "img/g6.jpg",

    "img/g7.jpg",
    "img/g8.jpg",


]



for(let i=0;i<8;i++){
    if(ch[0])
        ch[i].style.backgroundImage=`url(${imgch[i]})`
    else if(d[0])
        d[i].style.backgroundImage=`url(${imgd[i]})`

    else if(s[0])
        s[i].style.backgroundImage=`url(${imgs[i]})`

    else if(m[0])
        m[i].style.backgroundImage=`url(${imgm[i]})`
    else if(b[0])
        b[i].style.backgroundImage=`url(${imgb[i]})`
    else if(g[0])
        g[i].style.backgroundImage=`url(${imgg[i]})`

    else
        ds[i].style.backgroundImage=`url(${imgds[i]})`

}







