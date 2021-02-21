$(document).ready(function () {
    $("a.nav-link").click(showTab);
    $("a#summary").click(placeOrder);
function showTab(){
    $(this).tab("show");
}

function placeOrder(event)
{
    event.preventDefault();

    let checkedBoxes = $("input[name=toppings]:checked");

    let radio = $("input[type=radio][name=size]:checked");

    let name = $("input#user-name").val();

    let address = $("input#user-address").val();

    let phone = $("input#user-phone").val();

    let total = 0;

    checkedBoxes.each(function () {

        total += $(this).data("prices");

    });

    radio.each(function (){


        total += $(this).data("prices");

    });
    let delivery = 2.00;
    let tax = total * 0.051;
    let subtotal = delivery + tax;
    total = total + subtotal;
    total = total.toFixed(2);
    subtotal = subtotal.toFixed(2);
    $("div#name").text(`Your name: ${name}`);
    $("div#addy").text(`Your Address: ${address}`);
    $("div#number").text(`Your Phone Number: ${phone}`);
    $("div#subtotal").text(subtotal);
    $("div#total").text(total);
}

});





