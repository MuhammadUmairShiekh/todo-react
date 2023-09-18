import logo from './logo.svg';
import './App.css';
import React, {useState, useSyncExternalStore} from 'react'
import Swal from 'sweetalert2'


// class App extends React.Component{
//   render(){
//     return(
//     <div>
//       <h1>Umair</h1>
//     </div>
//     )
//   }
// }

function App() {

const [list,setlist] = useState([])  
const [userInput,setUserInput] = useState ('')

function addTodo(){
   if(userInput == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      
    })
   }  
   else{ 
   const templist = [...list];
   templist.push(userInput) ;
    setlist(templist)  
    

  }
}

function removeTodo(item){
  const templist = [...list];
  templist.splice(item)
  setlist(templist)
   
   

}

function userStateInput(e){
    setUserInput(e.target.value)
    



}

function deleteList(index){
    const templist = [...list];
    templist.splice(index ,1 )
    setlist(templist)
}

function editBtn(index){
  let templist = [...list]
  templist = prompt(index)
  
  
}


// const [hide,sethide] = useState(false)

// function changeIcone(){
//    sethide(!hide)
// }

  return (
    <div className="App">
      <header className="App-header">     
        
        {/* {hide == false && <p> Hellow World </p> }
        {hide == true && <p> Bolo World  </p>}
        <button onClick={changeIcone}>View Or Hide</button> */}
        <div className='toDO' >
        <h1>  My First ToDO App In React</h1>
       <input  onChange={userStateInput} placeholder='Enter Your Items'  /> 
       <button  onClick={addTodo} className='btn' >Add Do TO</button>
       <button  onClick={removeTodo} className='btn' >Remove All</button>
            <div className='listi' >
          <ul>
            {list.map(function(item , index){
              return <li key={index}  >{item}
               <button onClick={()  => deleteList(index) } className='bttn' >Delete</button> <button onClick={ () => editBtn(index)}  className='btttn' >Edit</button>  </li>
            })}

          </ul>
        </div>

       </div>
      </header>
    </div>
  );
}

export default App;
