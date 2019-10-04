console.log("app.js is running");

//JSX - JavaScript XML

const app = {
  title : 'Indecisions app',
  subtitle : 'Put your life in computers hand',
  options: []
};

const onFormSubmit = (e) =>{
  e.preventDefault();     //prevents whole page from refreshing

  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = "";
    renderAgain();
  }
};

const removeAll = () => {
  app.options = [];
  renderAgain();
};

const onMakeDecision = () => {
  const rNo = Math.floor(Math.random()*app.options.length);
  const option = app.options[rNo];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderAgain = () => {
  const template1 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options && app.options.length) ? 'Here are your options' : 'No Options'}        
        <p><button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I Do?</button>      
        <button onClick={removeAll}>Remove All</button></p>        
        <ol>
            {
              app.options.map( (option) => <li key={option}>{option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
    </div>
);
ReactDOM.render(template1,appRoot);
}

renderAgain();