console.log("app.js is running");

//JSX - JavaScript XML

const app = {
  title : 'indeicisions app',
  subtitle : 'Put your life in computers hand',
  options: ['One','Two' ]
};

const template1 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options && app.options.length) ? 'here' : 'No Options'}
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

const user ={
  userName : "Patrice",
  Age : 26,
  userLocation : "Texas"
};

function getLocation(location){
  if(location)
    return <p>Location : {location}</p>;
}

const template2 = (
  <div>
    <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
    {(user.Age && user.Age >= 18) && <p>Age: {user.Age}</p> }   
    {getLocation(user.userLocation)}
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template1, appRoot);