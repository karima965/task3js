const btn=document.getElementById('btn');
const  box=document.getElementById(' box')

box.addEventListener('click',function() {
    const stdName = document.getElementById('name').value;
    const stdAge = document.getElementById('age').value;
    const stdGrade = document.getElementById('grade').value;
    const resultName = document.getElementById('result-name');
    const resultAge = document.getElementById('result-age');
    const resultGrade = document.getElementById('result-grade');
    const resultStatus = document.getElementById('result-status');
    const resultSt=document.getElementById('result-st');
    resultName.innerHTML = stdName;
    resultAge.innerHTML = stdAge;
    resultGrade.innerHTML = stdGrade;
    if (stdGrade > 100 || stdGrade < 0) {
        resultStatus.innerHTML = 'Invalid Grade';

    }

    else if (stdGrade <= 100 && stdGrade >= 90) {
        resultStatus.innerHTML = 'Excellent';
        resultSt.style.color='#06d6a0';
        resultStatus.style.color='#06d6a0';

    }
    else if (stdGrade < 90 && stdGrade >= 75) {
        resultStatus.innerHTML = 'Very Good';
        resultSt.style.color='#38BDF8';
        resultStatus.style.color='#38BDF8';

    }
    else if (stdGrade < 75 && stdGrade >= 50) {
        resultStatus.innerHTML = 'Pass';
         resultSt.style.color='#fb923c';
        resultStatus.style.color='#fb923c';

    }
    else if (stdGrade < 50) {
        resultStatus.innerHTML = 'Fail';
          resultSt.style.color='#F43F5E';
        resultStatus.style.color='#F43F5E';


    }
})
