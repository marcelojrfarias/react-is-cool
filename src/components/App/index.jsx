import React from 'react'
import Clock from '../Clock'

 class App extends React.Component {
     render() {

         return (
             <div>
                 <Clock
                    name = "Ariane"
                    phrase = "LIER"
                    />
             </div>
         );
     }
 }

export default App;