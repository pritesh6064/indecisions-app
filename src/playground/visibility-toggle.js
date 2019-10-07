class Visiblity extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleBtn = this.onToggleBtn.bind(this);
        this.state = {
            visible: false
        };
    }

    onToggleBtn(e) {        
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    };
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleBtn}>
                    {this.state.visible ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Now You can See!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visiblity />, document.getElementById('app'));
/*console.log("app.js is running");

//JSX - JavaScript XML
let visibility = false;

const onToggleBtn = (e) => {
    visibility = !visibility;
    renderAgain();
};

const renderAgain = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleBtn}>
                {visibility ? "Hide Details" : "Show Details"}
            </button>
            {visibility && (
                <div>
                    <p>Now You can See!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
};

renderAgain();*/