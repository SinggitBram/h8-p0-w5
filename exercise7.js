function meleeRangedGrouping(str) {
    let hasil = [[], []]
    let pisah = str.split(',')
    let pisah2 = []
    for (let i = 0; i < pisah.length; i++) {
        pisah2.push(pisah[i].split('-'))
    }
    for (let j = 0; j < pisah2.length; j++) {
        if (pisah2[j][1] === 'Ranged') {
            hasil[0].push(pisah2[j][0])
        } else if (pisah2[j][1] === 'Melee') {
            hasil[1].push(pisah2[j][0])
        }
    }
    if (str.length === 0) {
        return []
    }
    return hasil
}

  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []