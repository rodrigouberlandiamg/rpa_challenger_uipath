function preenche_form_web(e, strRowsValues){
	var strFirstName = strRowsValues.split('-')[0];
	var strLastName = strRowsValues.split('-')[1];
	var strEmail = strRowsValues.split('-')[5];
	var strAddress = strRowsValues.split('-')[4];
	var strPhoneNumber = strRowsValues.split('-')[6];
	var strCompanyName = strRowsValues.split('-')[2];
	var strRoleInCompany = strRowsValues.split('-')[3];
	
	var elemLabels = Array.from(document.getElementsByTagName('label'))
	
	for(var i = 0; i < elemLabels.length; i++){
		switch(elemLabels[i].textContent){
			case 'First Name':
				elemLabels[i].nextSibling.value = strFirstName;
			break;
			case 'Last Name':
				elemLabels[i].nextSibling.value = strLastName;
			break;
			case 'Email':
				elemLabels[i].nextSibling.value = strEmail;
			break;
			case 'Address':
				elemLabels[i].nextSibling.value = strAddress;
			break;
			case 'Phone Number':
				elemLabels[i].nextSibling.value = strPhoneNumber;
			break;
			case 'Company Name':
				elemLabels[i].nextSibling.value = strCompanyName;
			break;
			case 'Role in Company':
				elemLabels[i].nextSibling.value = strRoleInCompany;
			break;
		}
	}
	
	document.getElementsByClassName('btn uiColorButton')[0].click()
}