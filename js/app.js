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
        
        // background & disable button
        e.target.style.background = '#1DD100';
        e.target.style.cursor = 'not-allowed';
        e.target.style.pointerEvents = 'none';
        }
        //    just 4value count
       else{
        btn.setAttribute('disabled', true);
       }
      
       
        
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

// delete 
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    // console.log(text);
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'NEW15'){
        deleteButton.removeAttribute('disabled');
    }
    else if (text === 'Couple20' || text === 'Couple 20'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})
document.getElementById('btn-delete').addEventListener('click', function(){
   const secret = document.getElementById('grand-total');
   const secret2 = document.getElementById('total-price');
   secret.innerText = secret2.innerText;
   document.getElementById('delete-confirm').value = '';
})










