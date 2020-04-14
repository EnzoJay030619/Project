
    const  name = document.getElementById('name')
    const  age = document.getElementById('age')
    const  address = document.getElementById('address')
    const  birthdate = document.getElementById('birthdate')
    const  email = document.getElementById('email')
    const  number = document.getElementById('number')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')

    form.addEventListener('submit',(e) =>{
        let messages = []
        if(name.value===''||name.value==null){
            message.push('Name is required')
        }
        if(age.value.length>=50){
        messages.push('Your Age is not suitable for this event sorry')
         }
        
        if(address.value===''||address.value==null){
        messages.push('please type down you address')
    }
        
        if(birthdate.value===''||birthdate.value==null){
            messages.push('please fill-in the birthdate')
        }

        if(email.value ===''||email.value==null){
            messages.push('please fill-in put your email')
        }
        if(number.value 11){
            messages.push('please check your number')
        }

        if(messages.length >0){
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }       
    })





