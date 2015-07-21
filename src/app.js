export class App {
	selectedName = 'Martin';
	showing = false;
	names = ['Martin','Anders','Knud'];
	
	constructor(){
	}
	
	showDialog = () => {
		this.showing = true;
	}

	
	closeDialog = () => {
		this.showing = false;
	}

	saveDialogResult = () => {
		
	}
	
	selectName = (name) => {
		this.selectedName = name;
	}
	
}