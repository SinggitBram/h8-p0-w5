function changeVocals (str) {
    var kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var ganti = ''
    for (var i = 0; i<str.length; i++){
        var inKamus = false
        for (var j = 0; j<kamus.length; j++){
            if((str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e'|| str[i] === 'o'
                || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E'|| str[i] === 'O') && str[i] === kamus[j]){
                ganti = ganti + kamus[j+1]
                inKamus = true
            }
        }
        if (!inKamus) {
            ganti = ganti + str[i]
        }
    }
    return ganti
} 
function reverseWord (str1) {
    var balik = ''
    for (var i = str1.length-1; i>=0; i--){
        balik = balik + str1[i]
    }
    return balik
}
function setLowerUpperCase (str2) {
    var besarKecil = ''
    for (var i = 0; i<str2.length; i++){
        if(str2[i] === str2[i].toUpperCase()){
            besarKecil = besarKecil + str2[i].toLowerCase()
        }        
        else if(str2[i] === str2[i].toLowerCase()){
            besarKecil = besarKecil + str2[i].toUpperCase()
        }
    }
    return besarKecil
}    
function removeSpaces (str3) {
    var hilang = ''
    for(var i=0; i<str3.length; i++){
        if (str3[i] == ' '){
            hilang = hilang + ''
        }
        else{
            hilang = hilang + str3[i]
        }
    }
    return hilang
}
function passwordGenerator (name) {
    if (name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var diganti = changeVocals(name);
    var dibalik =  reverseWord(diganti);
    var dikapital = setLowerUpperCase(dibalik);
    var dihilang = removeSpaces(dikapital)
    return dihilang
} 
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'