class Square extends React.Component{

	constructor(props) {
    super(props);
    this.state = {val: ''};
	this.val = '';
	this.onChangeHandler = this.onChangeHandler.bind(this);
	//console.log('Inside sq: ');
	//console.log(this.props.propTest);
	//this.props.propTest += 1
  }

	onChangeHandler(e){
		if(!(parseInt(e.target.value)>=0 && parseInt(e.target.value)<=9)){
			//console.log("kmksmdkms");
			this.setState({val: ''});
			this.val = '';
		}else{
			//console.log("##");
			this.setState({val: e.target.value});
			this.val = e.target.value;
		}	
		//console.log(this.val);
		this.props.propTest(this.val);
	}
	
	

	render(){
		return (
		<form style={{width:"50", height:"50", margins:"0", padding:"0", autocomplete:"off"}}>
		  <label style={{width:"50", height:"50", margins:"0", padding:"0"}}>
			<input style={{width:"50", height:"50", margins:"0", padding:"0", autocomplete:"false", textAlign:"center", fontSize:"20"}} maxLength="1" type="text" name="name" value={this.state.val} onChange={(e) => this.onChangeHandler(e)}/>
		  </label>
		</form>
		);
	}
}

class ThreeByThreeGrid extends React.Component{
	constructor(props){
		super(props);
		//console.log('Inside 3*3: ');
		//console.log(this.props.propTest);
	}
	
	render(){
		return (
			<div>
				<div style={{width:"150"}}>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
				</div>
				<div  style={{width:"150"}}>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
				</div>
				<div  style={{width:"150"}}>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest}/></div>
				</div>
			</div>
		);
	}
}

class SudokuGrid extends React.Component{
	constructor(props){
		super(props);
		//this.test = '0';
	}
	
	test(num){
		console.log(num);
	}
	
	render(){
		return (
			<div>
				<div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
				</div>
				<div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
				</div>
				<div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test}/></div>
				</div>
			</div>
		);
	}
	
	
	
}

ReactDOM.render(
  <SudokuGrid />,
  document.getElementById('app_container')
);