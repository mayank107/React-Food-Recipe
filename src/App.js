import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Recipes from './components/Recipes'
import Axios from 'axios';


const App=()=> {

 
  const [search , setSearch]= useState("");
const [recipes,setRecipes]=useState([])

const APP_ID ="86750780"
const APP_KEY= "353dfe9915f86f0190df5c6b0bfb60d1"	

useEffect(()=>{
  getRecipes();
},[])

const getRecipes= async()=>{
  const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

  setRecipes(res.data.hits);
}


const onInputChange = e =>{
  setSearch(e.target.value)
}

const onSearchClick =()=>{
  getRecipes();
}
  return (
    <div className="App">
     {/* <h1>Food Recipe</h1> */}
     <Header search={search} 
     onInputChange={onInputChange} onSearchClick={onSearchClick}
     />
     <div className="container">
     <Recipes recipes={recipes}/>
     </div>
    </div>
  );
}

export default App;
