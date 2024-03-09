
function getPin(){
    const pin = ganaratePin()
    const pinString = pin + '';

    if(pinString.length ===4){
        return pin;
    }
    else{
        // console.log('3 digit pin ', getPin())
        return getPin();
    }
}


function ganaratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    // console.log('generate pin button clickd')
    const pin = getPin()
    // console.log(getPin())


    const displayPinElement = document.getElementById('pin-display');

    displayPinElement.value = pin

    
})



document.getElementById('calculator').addEventListener('click', function(event){
    const keyNumber = event.target.innerText
    const typedNumberDisplay = document.getElementById('typed-number')
    const previousNumbers = typedNumberDisplay.value
    
    if(isNaN(keyNumber)){
        if(keyNumber === 'C'){
            typedNumberDisplay.value = '';
        }
        else if(keyNumber === '<'){
            const digits = previousNumbers.split('');
            console.log(digits)
            digits.pop()
            const remainingDigits = digits.join('')
            typedNumberDisplay.value = remainingDigits;
            

        }
    }
    else{
        const newTypedNumber = previousNumbers + keyNumber;
        typedNumberDisplay.value = newTypedNumber;
        
    }
})


document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button is clicked')
    const displayPinElement = document.getElementById('pin-display');
    const currentDisplayPin = displayPinElement.value;
    console.log(currentDisplayPin)


    const typedNumberDisplay = document.getElementById('typed-number');
    const currenTypedNumber = typedNumberDisplay.value;
    console.log(currenTypedNumber);
    
    const notifyMatchedMassage = document.getElementById('pin-matched');
    const notifyIncorrectMassage = document.getElementById('pin-incorrect')

    if(currentDisplayPin === currenTypedNumber){
        notifyMatchedMassage.style.display = 'block'
        notifyIncorrectMassage.style.display = 'none'
        // console.log('congress you are entered the currect pin')
    }
    else{
        notifyIncorrectMassage.style.display = 'block'
        notifyMatchedMassage.style.display = 'none'
    
        // console.log('incorrect pin')
    }

})



