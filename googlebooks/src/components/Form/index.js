import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
export function Input() {
  return (
    <div>
      <input id="bookQuery" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
          <button  type="submit" onClick={this.searchGBooks} >
            Search for Books </button>
          
    </div>
  );
}

  
