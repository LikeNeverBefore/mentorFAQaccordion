const allQuestions = document.querySelectorAll('.box__question');
const allAnswers = document.querySelectorAll('.box__answer');

for (i = 0; i < allQuestions.length; i++) {
	allQuestions[i].addEventListener('click', function () {
		var panel = this.nextElementSibling;
		var icon = this.lastElementChild;
		this.classList.toggle('active');
		panel.classList.toggle('invisible');
		if (this.classList.contains('active')) {
			icon.src = './assets/images/icon-minus.svg';
		} else {
			icon.src = './assets/images/icon-plus.svg';
		}
	});
}
