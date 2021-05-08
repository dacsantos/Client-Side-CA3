var total_items = 4;

function CalculateItemsValue(){
    var total = 0;

    for (let i = 1; i <= total_items; i++) {
       itemID =document.getElementById("qtt" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('Total').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qtt"]').forEach(item => {
    item.addEventListener('change', CalculateItemsValue);
});
