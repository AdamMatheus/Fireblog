import React from 'react';
import {Button} from 'react-bootstrap';

function Navbar() {
    return (
      <>  
        <div className='p-4 box mt-3 text-center'>Welcome to our webpage</div>
        <div className='d-grid gap-2'>
            <Button variant='primary'>Logout</Button>

        </div>
      </>
    )
}

export default Navbar
