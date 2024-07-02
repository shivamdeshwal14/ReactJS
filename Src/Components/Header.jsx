import { LOGO_URL } from "../utils/constansts";
export const Header=()=>{
    return (
        <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
                    <h2 className="website-name">Foodferry</h2>
                </div>
                
                <div className="nav-items">
                    <ul>
                        <li>Search</li>
                        <li>Offers</li>
                        <li>Help</li>
                        <li>Sign in</li>
                        <li>cart</li>
                    </ul>
                </div>

        </div>
    )
}
export default Header;