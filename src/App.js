// import './App.css';
// import AddIcon from '@mui/icons-material/Add';
// import ClearIcon from '@mui/icons-material/Clear';
// import EditIcon from '@mui/icons-material/Edit';
// import React from 'react';
// // import data from './mockData.json'


// const handleSubmit = (event) => {
//   console.log(event.target.value)
// }

// const handleEdit = () => {
//   console.log("edit mode is activated")
// }

// const onChange = (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// }

// const handleDelete = () => {
//   console.log("deleted ")
// }

// function App() {
//   return (
//     <form >
//       <header>
//         <nav className="navbar">
//           <div className="container-page">
//             <span className="heading">
//               TODOLIST
//             </span>
//             <div>
//               <input type="text" id="name" onChange={onChange} />
//               <button type="submit" onClick={handleSubmit}><AddIcon /></button>
//             </div >
//             <label className="checkbox-field">
//               <input type="checkbox" input />
//               <input type="text" />
//               <button type="submit" className="edit-button" onClick={handleEdit}><EditIcon /></button>
//               <button type="submit" className="delete-button" onClick={handleDelete} > <ClearIcon /></button>
//               <span />
//             </label>
//           </div>
//         </nav>
//       </header>

//     </form>


//   );
// }

// export default App;

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;