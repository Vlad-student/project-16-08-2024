const questions = document.querySelectorAll('#faq .faq-question');
const answers = document.querySelectorAll('#faq .faq-ask');

questions.forEach((question) => {
    console.dir(question)
    question.addEventListener('click', ()=>{
// question.nextElementSibling.classList.add('open')
const answerCurrent = question.nextElementSibling;
const plus = question.lastChild;

answers.forEach((answer) => {
    answer.classList.remove('open');
    answer.computedStyleMap.maxHeight = 0+'px'
});

plus.textContent ='-'
answerCurrent.classList.add('open')
answerCurrent.style.maxHeight = answerCurrent.scrollHeight+'px'
    })
});

