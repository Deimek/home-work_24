
// const contactForm = document.forms.contactForm;
// const contactErrorUserName = document.querySelector('.contact__error--userName');
// const contactErrorMessage = document.querySelector('.contact__error--message');
// const contactErrorPhone = document.querySelector('.contact__error--phone');
// const contactErrorEmail = document.querySelector('.contact__error--email');

// contactForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const userName = contactForm.elements.userName.value;

//     if (!userName.trim()) {
//         contactErrorUserName.textContent = 'Enter your name!!!';
//         return;
//     } else {
//         contactErrorUserName.textContent = ''
//     }
//     console.log(`${userName}`);

//     const userMessage = contactForm.elements.message.value;

//     if (userMessage.length < 5) {
//         contactErrorMessage.textContent = 'Enter your message!!!';
//         return;
//     } else {
//         contactErrorMessage.textContent = '';
//     }
//     console.log(`${userMessage}`);

//     const userPhone = contactForm.elements.phone.value;

//     if (!userPhone.match(/^\+380/)) {
//         contactErrorPhone.textContent = 'Enter your number!!!';
//         return;
//     } else {
//         contactErrorPhone.textContent = '';
//     }
//     console.log(`${userPhone}`);

//     const userEmail = contactForm.elements.email.value;

//     if (!userEmail.match(/@.*\./)) {
//         contactErrorEmail.textContent = 'Enter your email!!!';
//         return;
//     } else {
//         contactErrorEmail.textContent = '';
//     }
//     console.log(`${userEmail}`);


//     contactForm.reset();
// })

const contactForm = document.forms.contactForm;
const contactErrorUserName = document.querySelector('.contact__error--userName');
const contactErrorMessage = document.querySelector('.contact__error--message');
const contactErrorPhone = document.querySelector('.contact__error--phone');
const contactErrorEmail = document.querySelector('.contact__error--email');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = contactForm.elements.userName.value.trim();
    const userMessage = contactForm.elements.message.value.trim();
    const userPhone = contactForm.elements.phone.value.trim();
    const userEmail = contactForm.elements.email.value.trim();

    contactErrorUserName.textContent = '';
    contactErrorMessage.textContent = '';
    contactErrorPhone.textContent = '';
    contactErrorEmail.textContent = '';


    if (!userName.trim()) {
        contactErrorUserName.textContent = 'Enter your name!!!';
        return;
    }
    console.log(`${userName}`);


    if (userMessage.length < 5) {
        contactErrorMessage.textContent = 'Enter your message!!!';
        return;
    }
    console.log(`${userMessage}`);


    if (!userPhone.match(/^\+380\d{9}$/)) {
        contactErrorPhone.textContent = 'Enter your number!!!';
        return;
    }
    console.log(`${userPhone}`);


    if (!userEmail.match(/@.*\./)) {
        contactErrorEmail.textContent = 'Enter your email!!!';
        return;
    }
    console.log(`${userEmail}`);


    contactForm.reset();
})


