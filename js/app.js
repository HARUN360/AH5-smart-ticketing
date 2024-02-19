const allBtn = document.getElementsByClassName('seat');
let count = 0;
let seatTotal = 40;
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        seatTotal = seatTotal - 1;
        if(count <= 4 ){
        setInnerText('seat-count', count);
        setInnerText('seat-left', seatTotal);
        // add to text with js
        const selectedContainer = document.getElementById('selected-place-container');
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = btn.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerText = '550';
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
        //total cost
        const priceValue = document.getElementById('seat-amount');
        const price = parseInt(priceValue.innerText);
        totalCost('total-price', price);
        //grant cost
        const grantConst = document.getElementById('grand-total');
        const grandPrice = parseInt(grantConst.innerText);
        totalCost('grand-total', price);
        // background & disable button
        e.target.style.background = '#1DD100';
        e.target.style.cursor = 'not-allowed';
        e.target.style.pointerEvents = 'none';
        }
       else{
        btn.setAttribute('disabled', true);
    }
    const nextBtn = document.getElementById('next-btn');
       nextBtn.removeAttribute('disabled');
    })

}
// total cost 
function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText(id, sum);
}

// inner text change or set
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// apply btn
document.getElementById('btn-delete').addEventListener('click',function(e){
 const value =   document.getElementById('delete-confirm').value;
 const totalCost = document.getElementById('total-price').innerText;
 const totalCostConvet = parseInt(totalCost);
 if(value === 'NEW15'){
    const discount = totalCostConvet *0.15;
     const discountNew = totalCostConvet - discount;
     document.getElementById('grand-total').innerText = discountNew;
     const selectedContainer1 = document.getElementById('selected-place-container1');
     const li = document.createElement('li');
     const p = document.createElement('p');
     p.innerText = 'discount';
     const p2 = document.createElement('p');
     p2.innerText = discount;
     li.appendChild(p);
     li.appendChild(p2);
     selectedContainer1.appendChild(li);
     e.target.parentNode.parentNode.style.display = "none";
}else if (value === 'Couple 20'){
    const discount = totalCostConvet *0.20;
    const discountCouple = totalCostConvet - discount;
    document.getElementById('grand-total').innerText = discountCouple;
    const selectedContainer1 = document.getElementById('selected-place-container1');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = 'discount';
    const p2 = document.createElement('p');
    p2.innerText = discount;
    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer1.appendChild(li);
    e.target.parentNode.parentNode.style.display = "none";
}else{
    alert ('please give Coupon Code');
}  

})

// hide and show element
function hideElementById(element){
    const hideId = document.getElementById(element);
    hideId.classList.add('hidden');
}

function showElementById(element){
    const show = document.getElementById(element);
    show.classList.remove('hidden');
}

function display(){
    hideElementById('heder-section');
    hideElementById('section-1');
    hideElementById('section-2');
    hideElementById('footer-title');
    showElementById('out-site')
}
document.getElementById('next-btn').setAttribute('disabled', true);