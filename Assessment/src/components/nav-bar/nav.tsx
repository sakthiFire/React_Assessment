import './nav.css';

function NavBar(){
    return(
       <>
        <div className="nav-bar d-flex justify-content-around flex-wrap" id="nav-bar-lg">
            <div className='pt-4 pb-4 ps-3 pe-3 col-3 d-flex justify-content-center '>
                <a href="#" className='text-decoration-none text-dark'>Program Files</a>
            </div>
            <div className='active pt-4 pb-4 ps-3 pe-3 col-3 d-flex justify-content-center'>
                <a href="#" className='text-decoration-none text-white'>Application Form</a>
            </div>
            <div className='pt-4 pb-4 ps-3 pe-3 col-3  d-flex justify-content-center'>
                <a href="#" className='text-decoration-none text-dark'>Workflow</a>
            </div>
            <div className='pt-4 pb-4 ps-3 pe-3 col-3  d-flex justify-content-center'>
                <a href="#" className='text-decoration-none text-dark'>Preview</a>
            </div>
        </div>
        <div className="nav-bar d-flex justify-content-start flex-wrap" id="nav-bar-sm">
            <a href="#" className='text-decoration-none text-dark ps-1 pe-1'>Program Files</a><img src="../src/assets/right-arrow-svgrepo-com.svg" alt="" />
            <a href="#" className='text-decoration-none ps-1 pe-1'>Application Form</a><img src="../src/assets/right-arrow-svgrepo-com.svg" alt="" />
            <a href="#" className='text-decoration-none text-dark ps-1 pe-1'>Workflow</a><img src="../src/assets/right-arrow-svgrepo-com.svg" alt="" />
            <a href="#" className='text-decoration-none text-dark ps-1 pe-1'>Preview</a>    
        </div>
        </>
    )
}

export default NavBar;