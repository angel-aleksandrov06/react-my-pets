const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {

    
    let petUrl = url + ((category && category != 'all')
        ? `?category=${category}`
        : ``);

    return fetch(petUrl)
        .then(res => res.json())
        .catch(er => console.log(er));
};

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(er => console.log(er));
};

export const create = (petName, description, imageURL, category) => {
    let pet = {
        name: petName,
        description,
        imageURL,
        category
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
    });
};