const { hash } = window.location;

const messege = atob(hash.replace('#', ''));

if (messege){
    document.querySelector('#messege-form').classList.add('hide');
    document.querySelector('#messege-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = messege;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#messege-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const inputMessege = document.querySelector('#link-input');
    inputMessege.value = `${window.location}#${encrypted}`;
    inputMessege.select();
});