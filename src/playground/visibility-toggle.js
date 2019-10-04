console.log("app.js is running");

//JSX - JavaScript XML
let visibility = false;

const onToggleBtn = (e) =>
{
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
    ReactDOM.render(template,document.getElementById("app"));
};

renderAgain();