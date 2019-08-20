function sorting(arrNumber) {
    for (var i=0 ;i<arrNumber.length;i++){
      for(var j=0; j<arrNumber.length;j++){
        if(arrNumber[j]<arrNumber[j+1]){
          var temp = arrNumber[j];
          arrNumber[j] = arrNumber[j+1]
          arrNumber[j+1] = temp
        }
      }
    }
    return arrNumber
}
  
  function getTotal(listSort) {
      var jumlah = 0
        for (var j=0; j<listSort.length; j++){
        if(listSort[j] === listSort[0]){
            jumlah = jumlah + 1
        }
    }
    if (listSort.length === 0){
        return ''
    }
    return 'angka paling besar adalah ' + listSort[0] + ' dan jumlah kemunculan sebanyak ' + jumlah + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''