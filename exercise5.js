function kaliTerusRekursif(angka) {
  var ubah = String(angka)
  var hasil = 1
    if(ubah.length <= 1){
      return ubah
  }
    else{
        for (i=0; i<ubah.length; i++){
            hasil = hasil * Number(ubah[i])
        }
    } 
return kaliTerusRekursif(hasil)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6