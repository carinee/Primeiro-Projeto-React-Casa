import './App.css';
import Titulo from './componentes/Titulo';
import Doramas from './componentes/Doramas';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > BORA CARINE! < /h1> <
        Doramas / >
        <
        Titulo titulo = "Meu Primeiro Projeto React do Zero" / >
        <
        /header> </div >
    );
}

export default App;