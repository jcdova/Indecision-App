console.log("App.js is working");

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; 
        renderFunction();      
    }
    
};

const remove = () => {
    app.options = [];
    renderFunction();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const renderFunction = () => {

    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={remove}>Remove All</button>
        
        <ol>
            {
                app.options.map((opt) => <li key={opt}>{opt}</li>) //took out the {} and return
            }
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

renderFunction();

