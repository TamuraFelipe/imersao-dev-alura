class LocalStorageHandler {
    constructor(apiUrl, localStorageKey, targetElement) {
        this.apiUrl = apiUrl;
        this.localStorageKey = localStorageKey;
        this.targetElement = targetElement;
    }

    dataUpdateDOM(data) {
        this.targetElement.innerHTML = '';
        if(data.length === 0) {
            this.targetElement.innerHTML = '<p>Nenhum artista encontrado!</p>'
        }
        data.forEach(item => {
            const { name, urlImg, describle } = item;
            this.targetElement.innerHTML += `<a href="#" class="card">
                                                <div class="card__img">
                                                    <img src="${urlImg}" alt="${name}">
                                                </div>
                                                <span class="card__title">${name}</span>
                                                <span class="card__describle">${describle}</span>
                                            </a>`;
        });
    }

    fetchFromLocalStorage() {
        const storageData = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (storageData) {
            this.dataUpdateDOM(storageData);
        }
    }

    fetchSearch(value) {
        const searchURL = `${this.apiUrl}?name_like=${value}`;
        fetch(searchURL)
            .then(response => response.json())
            .then(data => {
                this.targetElement.innerHTML = '';
                this.dataUpdateDOM(data);
            })
    }
}

export default LocalStorageHandler;
