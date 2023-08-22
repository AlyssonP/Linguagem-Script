function newID() { 
    let id = Date.now()
    return id
};

function load(newCattles) {
    localStorage.setItem('bovinos-app:cattles', JSON.stringify(newCattles));
}

function createCattle(cattle) {
    cattle = {id: newID(), ...cattle}

    let cattles = readAll()

    let newCattles = [cattle, ...cattles]

    load(newCattles);

    return cattle
}

function readAll() {
    return JSON.parse(localStorage.getItem('bovinos-app:cattles'));
}


export default {load, readAll, createCattle}