class Counter extends React.Component{
    constructor(props){
      super(props);
      this.addOption = this.addOption.bind(this);
      this.removeAll = this.removeAll.bind(this);
      this.resetAll = this.resetAll.bind(this)
    }

    addOption(){
        console.log('addOption')
    }
    removeAll(){
        console.log('removeAll')
    }
    resetAll(){
        console.log('resetAll')
    }
    render(){
        return(
            <div>
             <h1>Count: 1</h1>
             <button onClick={this.addOption}>+1</button>
             <button onClick={this.removeAll}>-1</button>
             <button onClick={this.resetAll}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))