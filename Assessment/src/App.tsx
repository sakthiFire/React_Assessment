import './App.css'
import NavBar from './components/nav-bar/nav';
import UploadImage from './components/uploadImage/UploadImage';
import PersonalInfo from './components/personal-info/PersonalInfo';
import Profile from './components/profile/profile';
import SideNavBar from './components/side-navbar/side-nav';

function App() {

  return (
    <div className='d-flex main'>
      <SideNavBar/>
      <div className='w-100'>
        <NavBar/>
        <div className='ms-4 main-content'>
          <UploadImage/>
          <PersonalInfo/>
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default App;
