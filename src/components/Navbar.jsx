import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/Auth'
import {IoMdLogOut} from 'react-icons/io'




const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
    <div className="user">
      <div className="userHead">
      <img src={currentUser.photoURL} alt="" />
      <span className='name'>{currentUser.displayName}</span>
      </div>
      <button onClick={()=> signOut(auth)} className='log-out'><IoMdLogOut/></button>
    </div>
  </div>
  )
}

export default Navbar