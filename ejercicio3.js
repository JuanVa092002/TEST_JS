let number = 1;
while (number <= 20) {
    if (number % 2 == 0 ){
        console.log(`Pedido ${number} -> Persona A`);
    }else{ 
        console.log(`Pedido ${number} -> Persona B`)
    }
    number++
}