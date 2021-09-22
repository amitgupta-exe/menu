import React, { useContext } from 'react';



//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";

//Components
import Header from './components/Header';
import Search from './components/Search';
import Items from './components/Items';

//Context
import { ItemContext } from './context';


//App Function

const App = () => {

  //Context
  const { item, fullMenu } = useContext(ItemContext);
  const [items, setItems] = item;



  //Filter Functions. VERY VERY IMPORTANT. DONT MESS WITH IT!!!!!!!!

  //By Search Box
  const getItemName =(input) =>{
    setItems(fullMenu.filter((item) => (item.title.toLowerCase().includes(input.toLowerCase()) === true) || (item.tags.includes(input.toLowerCase()) === true)  ));
  
  }

  //By Tag Buttons
  const getItem = (tag) => {
    console.log(tag);
    (tag === "all") ? setItems(fullMenu) : setItems(fullMenu.filter((item) => (item.tags.includes(tag) === true)));
  }


  //APP
  return (
    <main>

      <section><Header /></section>
      <section className="search"><Search getItemName={getItemName}   getItem={getItem} /></section>
      <section><Items /></section>

    </main>
  )
}

export default App;