const metin = prompt("Kullanıcı metnini girebilir.");
const kelimeler = metin.split(" ");
const kelimeSayilari = {};

for (let index = 0; index < kelimeler.length; index++) {
    const kelime = kelimeler[index];

    if(kelimeSayilari[kelime]){
        kelimeSayilari[kelime] +=1;
    }
    else{
        kelimeSayilari[kelime] = 1;
    }
}
console.log(kelimeSayilari);