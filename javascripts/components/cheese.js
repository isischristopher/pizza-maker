import utilities from '../helpers/utilities.js';

const cheeses = [
    {id:"cheese1", name:"swiss", price: 50 },
    {id:"cheese2", name:"yellow", price: 90 },
    {id:"cheese3", name:"white", price: 500 },
    {id:"cheese4", name:"green", price: 0 },
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    //get all chesese checkboxes
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    //keep the checked ones in a new array

    for(let j= 0; j < cheeseCheckboxes.length; j++){
        for(let k=0; k < cheeses.length; k++){
            if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id){
                selectedCheeses.push(cheeses[k]);
                const cheesesPrice (cheeses[k].id)
    

            }
        }
        console.log (cheeseCheckboxes[j].checked);
    }

    //return the new array
    return selectedCheeses;
}

const printCheeseOptions = () => {
    let domString = '';
    for(let i=0; i < cheeses.length; i++){
        domString += `<div class="form-check">
    <input type="checkbox" class="form-check-input cheese" id=${cheeses[i].id}>
    <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
  </div>`;
    }
    utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions, getSelectedCheeses };