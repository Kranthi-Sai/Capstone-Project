import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Fotter.js';
import Quiz from './Pages/Quiz/Quiz';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import {useState} from 'react';
function App() {
   const[name,setName] =useState("");
   const [questions, setQuestions] = useState("");
   const [score,setScore] = useState(0);

   const fetchQuestions = async (category = "",difficulty = "") => {
      const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
         category && `&category=${category}`
       }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
     );
   setQuestions(data.results);
     
   };
 return(
  <BrowserRouter>
  <div className="App" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/white-question-mark-background-minimal-style_1017-25235.jpg?w=740&t=st=1675632980~exp=1675633580~hmac=29c12b0947e2769dc9aa93f61ea7f6228a37e1c3235bc78f5cf949eb9f21bded)" }}>
     <Header />
     <Routes>
      <Route 
      path="/Capstone-Project" exact element = {
      <Home 
      name = {name} 
      setName = {setName}
      fetchQuestions = {fetchQuestions} 
      />
      }
      />
     
      <Route path="/quiz" exact element={
      <Quiz
       name = {name}
       questions = {questions}
       score = {score}
       setScore = {setScore}
       setQuestions = {setQuestions}
      />} />

      <Route path="/result" exact element={<Result
      name={name}
       score={score}
       />
       }
       />
      
      </Routes>
   </div>
   <Footer/>
   </BrowserRouter>
 );
}

export default App;
