let submitmail = document.querySelector('.submit-mail');
let mailform = document.querySelector('.mail');
let mailbox = document.querySelector('.mailform');
let headbutton = document.querySelector('.header-button');
let error = document.querySelector('.error');
let nav = document.querySelector('nav');


// let scrollHe = Math.max(
// 	document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
// );

// let hei = document.documentElement.clientHeight;
// console.log(scrollHe)

// window.addEventListener('scroll', event => {
// 	let scrollk = document.body.style.cssText = `--scroll: ${this.scrollY}px`;
// 	let hui = nav.style.backgroundColor = `hsla(222, 26%, 15%, 0.${Math.trunc((scrollHe - this.scrollY) / 23.06 + 0.1)}`
	// console.log(Math.trunc((scrollHe - this.scrollY) / 23.06))
	// console.log(hui);
	// console.log(this.scrollY);
// })

// let scrollerToButton = () => {
// 	mailbox.scrollIntoView({
// 		block: "center",
// 		behavior: 'smooth'
// 	});
// }

// headbutton.addEventListener('click', scrollerToButton);

const emailRegExp = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

submitmail.addEventListener('click', () => {
	if (mailform.value == '' || !emailRegExp.test(mailform.value)) {
		error.style.display = 'flex';
	} else {
		error.style.display = 'none';
	}
})