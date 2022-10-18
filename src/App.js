import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
     <h2>Forms</h2>
     <MyForm user={{ name:"Kamila", email: "kamila@gmail.com", bio: "Sou editora", role: "admin" }}/>
    </div>
  );
}

export default App;
