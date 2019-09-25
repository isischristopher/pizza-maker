import cheese from './cheese.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i=0; i < items.length; i++){
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2);
}

const createOrderEvent = () => {
    const selectedCheeses= cheese.getSelectedCheeses();
    const selectedMeats= cheese.getSelectedMeats();
    createFinalOrder(selectedCheeses, selectedMeats); // combo of tthe above
}

const printOrderButton = () => {
        const domString= '<button id="order-button" class="btn btn-secondary">Make Pizza</button>'
        utilities.printToDom('final-order', domString);
        document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };