function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	let champ = document.querySelector('input[name="titleToAdd"]');
        let desc = document.querySelector('textarea[name="descToAdd"]');

		if(addArticle(champ.value, desc.value)) {
            champ.value = '';
            desc.value = '';
        }

		return false;
	}
}

function bindButtons(buttons){
    buttons.forEach(button => eventGetDescription(button));
}

function clearErrors() {
	let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = RED;
    error.classList.add('error');

    parent.prepend(error);
}