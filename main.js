const input = document.querySelector('.input__swing');

function swing() {
    let numbers = input.value;
    let chkNum = isNaN(numbers);
    let chkNumCount = numbers.toString.length;

    if( chkNum === true) {
        alert('숫자만 입력하세요.')
    } else {
        console.log(chkNumCount);
    }

    console.log(chkNum);
}

input.addEventListener('keypress', (e)=> {
    if ( e.key === 'Enter') {
        swing();
    }
})