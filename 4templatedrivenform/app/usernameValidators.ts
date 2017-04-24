import {Control} from 'angular2/common';

// Custom validator
export class UsernameValidators {
	static cannotContainSpace(control: Control){
		if(control.value.indexOf(' ')>0)
			return { cannotContainSpace: true }; // If validation failed, return an object with properties
		return null; // If validation successful
	}
}