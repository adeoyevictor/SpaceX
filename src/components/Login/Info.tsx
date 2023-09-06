import icon from '../../assets/Login/icon.svg'
import info1 from '../../assets/Login/info1.svg'
import info2 from '../../assets/Login/info2.svg'
import info3 from '../../assets/Login/info3.svg'
import info4 from '../../assets/Login/info4.svg'


const Info = () => {
  return (
    <div className="login__page__info">
        <img src={icon} alt="" />
        <h2 className='title'>Hi there, see what’s new</h2>
        <p className='body'>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
        <section className="info">
            <img src={info1} alt="" />
            <div>
                <h4>Monitor your Earnings</h4>
                <p>Easily see how much your busineses are earning  on each transaction and watch your earnings rise. </p>
            </div>
        </section>
        <section className="info">
            <img src={info2} alt="" />
            <div>
                <h4>Manage your Businesses</h4>
                <p>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
            </div>
        </section>
        <section className="info special">
            <img src={info3} alt="" />
            <div>
                <h4>Delegate to Staff</h4>
                <p>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
            </div>
            <img src={info4} alt="" />
        </section>
    </div>
  )
}

export default Info