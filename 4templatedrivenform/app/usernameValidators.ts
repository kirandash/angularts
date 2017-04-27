import {Control} from 'angular2/common';

// Custom validator
export class UsernameValidators {
	static shouldBeUnique(control: Control){
		return new Promise((resolve, reject) => {
			setTimeout(function(){
				if(control.value=="kiran")
					resolve({ shouldBeUnique: true });
				else
					resolve(null);
			},1000);
		});
	}
	static cannotContainSpace(control: Control){
		if(control.value.indexOf(' ')>0)
			return { cannotContainSpace: true }; // If validation failed, return an object with properties
		return null; // If validation successful
	}
}