import icon from '../../assets/Profile/icon.svg'
import icon2 from '../../assets/Profile/icon2.svg'
import icon3 from '../../assets/Profile/icon3.svg'
import icon4 from '../../assets/Profile/icon4.svg'
import '../../assets/Profile/profile.css'

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_DATA = gql`
  query CompanyQuery {
  company {
    ceo
    cto
    name
  }
  roadster {
    apoapsis_au
  }
}
`;

const Profile = () => {
    const { loading, error, data } = useQuery(GET_DATA);
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='profile__page'>
        <nav>
            <img src={icon} alt="" />
        </nav>
        <div className="content">
            <section className="details">
                <div className="logo">
                    <img src={icon2} alt="" />
                    <h4>{data.company.name}</h4>
                </div>
                <div className="ceo">
                    <p>CEO</p>
                    <h4>{data.company.ceo}</h4>
                </div>
                <div className="cto">
                    <p>CTO</p>
                    <h4>{data.company.cto}</h4>
                </div>
            </section>
            <section className="more">
                <span className='soon'>
                    <img src={icon3} alt="" />
                    Coming soon
                </span>
                <img src={icon4} alt="" />
                <div className="notif">
                    <h4>📫 Notifications</h4>
                    <p>Receive notifcations about your rider performance, efficiency reviews and a lot more</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Profile