import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();

        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// Development mode
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming our container doesn't have an element with
    // id 'dev-products'.
    if (el) {
        mount(el);
    }
}

// Container app


export { mount };
