class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const rNo = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rNo];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in hands of a Computer!"

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          deleteOptions={this.handleDeleteOptions} />
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteOptions}>Remove All</button>
        <ol>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();     //prevents whole page from refreshing

    const option = e.target.elements.optionInput.value.trim();

    const error = this.props.handleAddOption(option);
    
    this.setState(()=>{
      return {
        error       //Similar to error : error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionInput" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));