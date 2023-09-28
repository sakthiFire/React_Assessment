import './side-nav.css'

function SideNavBar(){
    return(
        <div className="side-nav-bar d-flex flex-column justify-content-start align-items-center ">
            <img src="../src/assets/hamburger-menu-svgrepo-com.svg" alt="" className='mt-3'/>
            <div className="d-flex flex-column aside align-items-center ">
                <img src="../src/assets/icons8-home.svg" alt="" className='mb-3'/>
                <img src="../src/assets/checklist-pen-tab-list-tick-approve-accept-svgrepo-com (1).svg" alt="" />
            </div>
        </div>
    )
}

export default SideNavBar;