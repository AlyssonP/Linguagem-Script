import dataset from './model/dataset.js';
import manager from './model/manager.js';

const loadCattle = ()=> {
    if (localStorage.getItem("bovinos-app:loaded") !== 'ok') {
        manager.load(dataset);
        localStorage.setItem("bovinos-app:loaded", 'ok');
    }
    for (const cow of manager.readAll()) {
        createViewCattle(cow)
    }
}

const idadeMeses = (data) => {
    let dataA = new Date()
    let dataN = new Date(data)
    let qtdMeses = ((dataA.getUTCFullYear() - dataN.getUTCFullYear())*12) - (dataN.getUTCMonth()) + (dataA.getUTCMonth())
    if (dataA.getUTCDate() < dataN.getUTCDate()) {
        return --qtdMeses
    }
    return qtdMeses
};

const formatData = (dataNascimento) => {
    let data = dataNascimento.split("-")
    return `${data[2]}/${data[1]}/${data[0]}`
};

const createViewCattle = (cattle) => {
    let cattleView = `
    <div class="card-cattle col-sm-6 col-lg-4 col-xl-3 mb-3" id="cattle-${cattle.id}">
        <div class="card">
            <img src="./img/cattle.jpg" class="card-img-top" alt="cows">
            <div class="card-body">
                <h5 class="card-title">ID: ${cattle.id}</h5>
                <p class="card-text"><span>Raça:</span> ${cattle.raca}</p>
                <p class="card-text"><span>Peso:</span> ${cattle.peso} KG</p>
                <p class="card-text data-nascimento">${formatData(cattle.dataNascimento)} - ${idadeMeses(cattle.dataNascimento)} meses</p>
            </div>
        </div>
    </div>
    `;

    const cowDeck = document.querySelector(".card-deck");
    cowDeck.insertAdjacentHTML('beforeend', cattleView);
};

const loadFormValues = (titulo, raca, peso, dataNascimento) => {
    const tituloForm = document.querySelector("#formModalLabel")
    const valueRaca = document.querySelector("#cattle-raca")
    const valuePeso = document.querySelector("#cattle-peso")
    const valueDataNascimento = document.querySelector("#cattle-data-nascimento")

    tituloForm.innerHTML= titulo
    valueRaca.value = raca
    valuePeso.value = peso
    valueDataNascimento.value = dataNascimento 
};

const loadFormCreateCattle = () => {
    const formCattle = document.querySelector("#formCattle")

    loadFormValues("Cadastrar Bovino", "", "", "")

    formCattle.onsubmit = (e) => {
        e.preventDefault();

        let cattle = Object.fromEntries(new FormData(formCattle))

        let newCattle = manager.createCattle(cattle)
        createViewCattle(newCattle)

        loadFormValues("Cadastrar Bovino", "", "", "")
    }
}

window.loadFormCreateCattle = loadFormCreateCattle

loadCattle()