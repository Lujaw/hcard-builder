import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className='jumbotron text-center d-flex'>
      <h1 className='display-4'>Not Found!</h1>
      <p>Sorry, could not find the requested page.</p>
      <p className='lead mt-2'>
        <Link to='/'>
          <button className='btn btn-primary btn-lg' type='button'>
            Home Page
          </button>
        </Link>
      </p>
    </div>
  );
};


export default NotFound;
