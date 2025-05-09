

const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('d-none');
    document.querySelector('#message-show').classList.remove('d-none');
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector("#message-form").classList.add('d-none');
    document.querySelector("#link-form").classList.remove('d-none');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    const linkInput = document.querySelector('#link-input');

    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});
