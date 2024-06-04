// import '../../common/style.css';
import './Header.css';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Profile from '../../assets/Profile.png'


const Header = () => {
    return (
        <div className="header font">
            <div>
                <h1 style={{marginLeft: '4vw'}}>Welcome back, Jane!</h1>
            </div>
            <div className='userDetails'>
                <div style={{marginRight:'2vw'}}>
                    <NotificationsOutlinedIcon />
                </div>
                <div>
                    <img src={Profile} />
                </div>
            </div>
        </div>
    )
}


export default Header