const input = document.querySelector('.input__swing');
const match = document.getElementById('match');

function swing() {
    let numbers = input.value;
    let chkNum = isNaN(numbers);
    let chkNumCount = numbers.toString().length;

    if( chkNum === true) {
        alert('숫자만 입력하세요.')
    } else {
        console.log(chkNumCount);
        if( chkNumCount === 3) {
            play(numbers);
        } else {
            alert('세자리 숫자만 입력 가능합니다.');
        }
    }
}

function play(num) {
    console.log('내가 입력한 숫자' + num);
    let matchDiv = document.createElement('div');
    matchDiv.setAttribute('class', 'match-line');

    let inning = document.createElement('span');
    inning.setAttribute('class', 'match__inning');
    let number = document.createElement('span');
    number.setAttribute('class', 'match__number');
    let result = document.createElement('span');
    result.setAttribute('class', 'match__result');

    match.appendChild(matchDiv);
    matchDiv.appendChild(inning);
    matchDiv.appendChild(number)
    matchDiv.appendChild(result)

    
}

input.addEventListener('keypress', (e)=> {
    if ( e.key === 'Enter') {
        swing();
    }
})