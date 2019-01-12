import React from 'react'

// const Clock = function (){
//     return <h1>React is cool</h1>;
// }

class Clock extends React.Component {
    constructor(props){
        super(props);

        console.log('Passou no construtor');

        this.state = {
            time: new Date().toLocaleString(),
        };

        
    }

    componentWillMount (){
        console.log('Componente vai montar');
    }

    componentDidMount (){
        console.log('Componente Montou')
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString(),
            })
        }, 1000)
    }

    shouldComponentUpdate(){
        console.log('Componente deve atualizar');
        return true
    }

    componentWillUpdate(){
        console.log('Componenete vai atualizar');
    }

    componentDidUpdate(){
        console.log('Componente atualizou?');
    }


     render() {
        console.log('Passou no render');

         const name = this.props.name;
         const phrase = this.props.phrase;
         const time = this.state.time;
         
        return (
            <div>
             <h1> {name}! </h1> 
             <h2>{phrase}</h2>
             <h3>{time}</h3>
             </div>
        );
    }

    

}

export default Clock;