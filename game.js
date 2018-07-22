var z = document.createElement('div');
document.body.appendChild(z);
z.classList.add('z');
var x = document.createElement('div');
document.body.appendChild(x);
x.classList.add('x');
var y =document.createElement('div');
document.body.appendChild(y);
y.classList.add('y');
var audio = document.createElement('audio');
audio.src = "forest.mp3";
audio.autoplay = true;
document.body.appendChild(audio);
var aud = new Audio("sound.mp3");
//alert(document.body.innerHTML);
function al(event) {
    alert(event.target.style.backgroundImage);
    alert(event.target.id);
    met(event);
}
var arr = [], cont;
x.onclick = function(){
	aud.play();
}
y.onclick = function(){
	aud.play();
}
z.onclick = function() {
	aud.play();
    cont = document.createElement('div');
    document.body.appendChild(cont);
    cont.classList.add('cont');
    if (!cont.children.length) {
        document.body.removeChild(z);
		document.body.removeChild(x);
		document.body.removeChild(y);
        for (var i = 0; i < 16; i += 1) {
            arr[i] = document.createElement('div');
            arr[i].classList.add('arr');
            arr[i].id = i;
            arr[i].style.backgroundImage = "url('" + (1 + i) + ".png')";
            arr[i].onclick = met;
            cont.appendChild(arr[i]);
        }
    }
    for (var p = 0; p <= 400; p += 1)
        rand();
    for (var p = 0; p <= 400; p += 1)
        rand();
	var butt = document.createElement('div');
	butt.classList.add('b');
	document.body.appendChild(butt);
}
function victory() {
    var s_1, s_2 = 0, k;
    for (k = 0; k < 16; k++) {
        s_1 = cont.children[k].style.backgroundImage;
        s_1 = s_1.substring(5);
        if (parseInt(s_1) == k + 1)
            s_2++;
    }
    if (s_2 == 16)
        alert('Victory');
	
}
function rot(a, b) {
    if (cont.children[a].style.backgroundImage == 'url("16.png")') {
        cont.children[a].style.backgroundImage = cont.children[b].style.backgroundImage;
        cont.children[b].style.backgroundImage = 'url("16.png")';
    }
    return;
}
function vot(a, b) {
    if ((a >= 0) && (a <= 15))
        if (cont.children[a].style.backgroundImage == 'url("16.png")')
            rot(a, b);
        else
            return false;
}
function method_1(I) {
    var a_1 = I + 1
      , a_2 = I - 4
      , a_3 = I + 4;
    if (a_2 >= 0) {
        rot(a_2, I);
    }
    if (a_3 <= 15) {
        rot(a_3, I);
    }
    rot(a_1, I);
    return;
}
function method_2(I) {
    var a_1 = I - 1
      , a_2 = I - 4
      , a_3 = I + 4;
    if (a_2 >= 0) {
        rot(a_2, I);
    }
    if (a_3 <= 15) {
        rot(a_3, I);
    }
    rot(a_1, I);
    return;
}
function method_3(I) {
    var a_1 = I + 1
      , a_2 = I - 4
      , a_3 = I + 4
      , a_4 = I - 1;
    vot(a_1, I);
    vot(a_2, I);
    vot(a_3, I);
    vot(a_4, I);
    return;
}
function rand() {
    var i = Math.floor(Math.random() * 16);
    if (!(i % 4))
        method_1(i);
    else if (!((i + 1) % 4))
        method_2(i);
    else
        method_3(i);
}
function met(event) {
	aud.play();
    var i = +event.target.id;
    if (!(i % 4))
        method_1(i);
    else if (!((i + 1) % 4))
        method_2(i);
    else
        method_3(i);
    victory();
}
