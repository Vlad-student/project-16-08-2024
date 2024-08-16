const questions = document.querySelectorAll('#faq .faq-question');
const answers = document.querySelectorAll('#faq .faq-ask');

questions.forEach((question) => {
    console.dir(question)
    question.addEventListener('click', ()=>{
question.nextElementSibling.classList.add('open')
    })
});
