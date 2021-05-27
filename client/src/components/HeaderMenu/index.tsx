import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMenu.css';
import Logo from './KawaiiDropsSiteLogo.png';

// interface linkState {
//   link: string;
// }
// let leftImage = {
//   link:'logo left =('
// }
  const HeaderMenu = () => {

//   const [image, setImage] = useState<linkState>(leftImage);

//   const getImage = async (title:string) => {

//     try {
//       const response = await fetch(`http://localhost:5000/imagesMenu/${title}`);
//       const jsonData = await response.json();
//       setImage(jsonData);
//       console.log(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };  

//   useEffect(() => {
//     getImage('Logo');
//   }, []);

  return (
    <Fragment>
        <div className="foolSizeHead">
          
          <div>
            <Link to='/'><img src={Logo}></img></Link>
          </div>
          <div className="headerMenuLinks">
            <ul className="headerMenuLinkBlock">
              <li className="headerMenuLinkBlock">
                <Link className="headerMenuLink" to='/secretShop'>
                  SECRETE SHOP
                </Link>
              </li>
              <li>
                <Link className="headerMenuLink" to='/secretShop'>
                  КОНТАКТЫ
                </Link>
              </li>
              <li>
                <Link className="headerMenuLink" to='/secretShop'>
                  UPGRADE
                </Link>
              </li>
              <li>
                <Link className="headerMenuLink" to='/secretShop'>
                  КЛУБ ПОДДЕРЖКИ
                </Link>
              </li>
              <li>
                <Link className="headerMenuLink" to='/secretShop'>
                  РОЗЫГРЫШИ
                </Link>
              </li>
              <li>
                <Link className="headerMenuLink" to='/secretShop'>
                  БОНУСЫ
                </Link>
              </li>
            </ul>
          </div>
          <div className="authorization">
            Авторизации
          </div>

        </div>
        <div className="winnersLine">

        </div>
    </Fragment>
  )
}

export default HeaderMenu