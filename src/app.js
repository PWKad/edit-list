export class App {
	selectedName = 'Martin';
	names = ['Martin','Anders','Knud'];
	
	constructor(){
		
	}
	
	selectName = (name) => {
		//self = this;
		this.selectedName = name;
	}
	
}