function changeVocals(str) {
    let kamus = 'abijuvefopABIJUVEFOP'
    let hasil = ''
    for (let i = 0; i < str.length; i++) {
        let val = false
        for (let j = 0; j < kamus.length; j++) {
            if (str[i] === kamus[j] && j % 2 === 0) {
                hasil += kamus[j + 1]
                val = true
            }
        }
        if (val === false) {
            hasil += str[i]
        }
    }
    return hasil
}

function reverseWord(str) {
    let hasil = ''
    for (let i = str.length - 1; i >= 0; i--) {
        hasil += str[i]
    }
    return hasil
}

function setLowerUpperCase(str) {
    let hasil = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            hasil += str[i].toUpperCase()
        } else if (str[i] === str[i].toUpperCase()) {
            hasil += str[i].toLowerCase()
        } else {
            hasil += str[i]
        }
    }
    return hasil
}

function removeSpaces(str) {
    return str
        .split(' ')
        .join('')
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }
    let vokal = changeVocals(name)
    let balik = reverseWord(vokal)
    let kapital = setLowerUpperCase(balik)
    let spasi = removeSpaces(kapital)
    return spasi
} 
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'