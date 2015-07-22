export class App {
	
	constructor(){
		this.showing = false;
		this.persons = [{first:"Martin",last:"Andersen"}, 
		       {first:"Knud",last:"Larsen"}, 
			   {first:"Inger",last:"Knudsen"}];
		this.selectedPerson = this.persons[0];
	}
	
	showDialog = () => {
		this.showing = true;
	}

	
	closeDialog = () => {
		this.showing = false;
	}

	saveDialogResult = () => {
		this.closeDialog();
	}
	
	selectPerson = (person) => {
		this.selectedPerson = person;
	}
	
}