import LocalStorageHandler from './LocalStorageHandler.js'; // Adicionamos a extensão .js

const input = document.querySelector('#search');
const cards = document.querySelector('.cards');
const home = document.querySelector('#home');
const linkSearch = document.querySelector('#searchLink')

const API_URL = 'https://my-json-server.typicode.com/tamurafelipe/jsonfake/artists';
const LOCAL_STORAGE_KEY = 'artists';

const localStorageHandler = new LocalStorageHandler(API_URL, LOCAL_STORAGE_KEY, cards);

home.addEventListener('click', () => {
    localStorageHandler.fetchFromLocalStorage();
    input.value = '';
});
linkSearch.addEventListener('click', () => {
    input.focus();
})

input.addEventListener('input', () => {
    const inputValue = input.value.trim();
    if (inputValue === '') {
        localStorageHandler.fetchFromLocalStorage();
    } else {
        localStorageHandler.fetchSearch(inputValue);
    }
});

localStorageHandler.fetchFromLocalStorage();
