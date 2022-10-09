// variables 
let userSerialNumber = document.getElementById('user-serial')
let userSeed = document.getElementById('user-seed')
let userCalculateButton = document.querySelector('.user-button')
let userResult = document.getElementById('user-result')
let calibrationSerialNumber = document.getElementById('static-serial')
let calibrationSeed = document.getElementById('static-seed')
let calibrationCalculateButton = document.querySelector('.static-button')
let calculationResult = document.getElementById('static-result')


// Super user calculation

let showResult = () => {
  if (userSerialNumber.value == '') {
    alert('S/N cannot be empty')
    return
  }

  if (userSeed.value == '') {
    alert('SEED cannot be empty')
    return
  }
  let serNum = '0' + userSerialNumber.value.slice(-3)
  let serSeed = userSeed.value
  while (serSeed.length < serNum.length) {
    serSeed = "0" + serSeed
  }

  let summ = ''
  for (let i = 0; i < serNum.length; i++) {
    let x = (parseInt(serNum[i]) + parseInt(serSeed[i]))
    if (x > 9) { x = x - 10 }
    summ = summ + x
  }
  summ = '0' + (135 + +summ)
  userResult.innerText = summ
}



userCalculateButton.addEventListener('click', showResult)

// Static calibration calculation


let StaticResult = () => {
  if (calibrationSerialNumber.value == '') {
    alert('S/N cannot be empty')
    return
  }

  if (calibrationSeed.value == '') {
    alert('SEED cannot be empty')
    return
  }
  let serNum = '0' + calibrationSerialNumber.value.slice(-3)
  let serSeed = calibrationSeed.value
  while (serSeed.length < serNum.length) {
    serSeed = "0" + serSeed
  }

  let summ = ''
  for (let i = 0; i < serNum.length; i++) {
    let x = (parseInt(serNum[i]) + parseInt(serSeed[i]))
    if (x > 9) { x = x - 10 }
    summ = summ + x
  }
  summ = '0' + (69 + +summ)
  calculationResult.innerText = summ
}



calibrationCalculateButton.addEventListener('click', StaticResult)

