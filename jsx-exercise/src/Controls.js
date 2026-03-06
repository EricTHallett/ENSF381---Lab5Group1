import React from 'react';

function Delete() {
    return (
    <div>
        <input></input>  
        <button>Delete</button>
    </div>
  );
}

function Controls() {
    return (
    <div>
        <Delete />
        <p>
            <button>Sort by ID</button>
            <button>Sort by Group</button>
            <button>Grid/List</button>
        </p>
    </div>
  );
}

export default Controls;