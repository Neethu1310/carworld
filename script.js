function StoreRecord(){
    Car={
        brand:carbrd.value,
        price:carprice.value,
        key:carkey.value
    };
    if(carkey.value in localStorage){
        alert('Car key already exist')
    }
    else{
        localStorage.setItem(carkey.value,JSON.stringify(Car))
        alert('Car model stored successfully')
    }
    
}

function RetreiveRecord(){
    x =carRet.value;
    if(x in localStorage){
        // alert('Car is present');
Car=JSON.parse(localStorage.getItem(x));
        disCar.innerHTML=`
        Brand- ${Car.brand},
        Price- ${Car.price}`
    }
    else{
        // console.log("retrive not found");
        disCar.innerHTML="";
        alert('Car details not found');
    }
}

function RemoveRecord(){
    rem=carRemv.value;
    if(rem in localStorage){
        localStorage.removeItem(rem);
        alert('Removed successfully');
    }
    else{
        alert('not found');
    }
}
 function clearAll(){
    localStorage.clear();
    alert('all cleared')
 }