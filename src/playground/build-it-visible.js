class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'ShowDetails'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle'
// };

// let visibility = false;

// const toggleDetails = () => {
//     visibility = !visibility;
//     renderFunction();
// };

// const appRoot = document.getElementById('app');

// const renderFunction = () => {
//     const template = ( 
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleDetails}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             <p>{(visibility === true) ? 'displaying details' : ''}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderFunction();

