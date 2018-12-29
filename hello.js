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
		this.props.propTest(this.val, this.props.gridId, this.props.squareId);
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
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='0'/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='1'/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='2'/></div>
				</div>
				<div  style={{width:"150"}}>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='3'/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='4'/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='5'/></div>
				</div>
				<div  style={{width:"150"}}>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='6'/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='7'/></div>
					<div style={{display:"inline-block"}}><Square propTest={this.props.propTest} gridId={this.props.gridId} squareId='8'/></div>
				</div>
			</div>
		);
	}
}

class SudokuGrid extends React.Component{
	constructor(props){
		super(props);
		//this.test = '0';
		this.test = this.test.bind(this);
		this.grid = [['','','','','','','','',''], 
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','',''],
		 ['','','','','','','','','']
		];
	}
	
	test(num, threeByThreeGridNo, squareNo){
		var row = Math.floor(parseInt(threeByThreeGridNo)/3)*3 + Math.floor(parseInt(squareNo)/3);
		var col = (parseInt(threeByThreeGridNo)%3)*3 + (parseInt(squareNo)%3);
		//console.log(threeByThreeGridNo);
		//console.log(squareNo);
		//console.log(row);
		//console.log(col);
		this.grid[row][col] = num;
		//console.log(this.grid);
	}
	
	render(){
		return (
			<div>
				<div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='0'/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='1'/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='2'/></div>
				</div>
				<div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='3'/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='4'/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='5'/></div>
				</div>
				<div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='6'/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='7'/></div>
					<div style={{display:"inline-block"}}><ThreeByThreeGrid propTest={this.test} gridId='8'/></div>
				</div>
			</div>
		);
	}
	
	
	
}

ReactDOM.render(
  <SudokuGrid />,
  document.getElementById('app_container')
);
