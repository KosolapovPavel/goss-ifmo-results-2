const total = 2000;
let sum = 0;
let rest = total;
const elements = [
    {
        'id': 1,
        'name': 'Milk',
        'price': 100
    },
    {
        'id': 2,
        'name': 'Bread',
        'price': 50
    },
    {
        'id': 3,
        'name': 'Rise',
        'price': 60
    },
    {
        'id': 4,
        'name': 'Buckwheat',
        'price': 80
    },
    {
        'id': 5,
        'name': 'Sugar',
        'price': 40
    },
    {
        'id': 6,
        'name': 'Apple',
        'price': 100
    },
    {
        'id': 7,
        'name': 'Tea',
        'price': 100
    },
    {
        'id': 8,
        'name': 'Pasta',
        'price': 50
    },
    {
        'id': 9,
        'name': 'Pork',
        'price': 300
    }
];

const cart = [];

let getElementHTML = obj => {
    const html = `<div class="element"  draggable="true" 
                    ondragstart="drag(event)"
                     id="`+obj.id+`">
            <div class="name">`+ obj.name+`</div>
            <div class="price">`+ obj.price+`</div>
        </div>`;
    return html;
}

let addToCart = ev => {
    let id = ev.detail.id
    // console.log(id)
    id = +id;
    let element;
    for (let el of elements){
        if (el.id === id){
            element = el;
            break;
        }
    }
    if (element.price<=rest){
        cart.push(element);
        calculate();
    }

}
let elementsDraw = () => {
    let htmlElements = '';
    for (let el of elements){
        htmlElements += getElementHTML(el);
    }
    const elementsObj = document.getElementById("elements");
    elementsObj.innerHTML = htmlElements;
}

let cartDraw = () => {
    let htmlCart = '';
    for (let el of cart){
        htmlCart += getElementHTML(el);
    }
    const cartObj = document.getElementById("cart");
    cartObj.innerHTML = htmlCart;
}

let calculate = () => {
    sum = 0;
    for (let el of cart){
        sum += el.price;
    }
    rest = total-sum;
    setValuesHtml();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("id");
    document.getElementById("cart").dispatchEvent(new CustomEvent('addToCart', {
        detail: {
            id: id
        }
    }));
    document.getElementById("cart").addEventListener('addToCart', addToCart, event);
    //addToCart(id);
    cartDraw();
}

let setHtml = (id, value) => {
    const element = document.getElementById(id);
    element.innerHTML = value;
}
let setValuesHtml = () => {
    setHtml("sum", sum);
    setHtml("rest", rest);
    setHtml("total", total);
}
window.onload = ()=>{
    elementsDraw();
    cartDraw();
    setValuesHtml();

}

