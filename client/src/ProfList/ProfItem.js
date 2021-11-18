import { Link } from 'react-router-dom';
import React from 'react';
import {
  HiLocationMarker,
  HiInformationCircle
} from "react-icons/hi";


function ProfItem({ prof }) {
  return (
    <div className="link_to_prof_page">
      <React.Fragment>
        <Link to={{ pathname: `${prof._id}`, state: { prof } }}>
          <div className="prof_card">
            <div className="prof_card_first_row">
              <div className="profile_pic_prof_card">
                <img src={prof.image} className="profile_pic_prof_card" alt="profile"/>
              </div>
              <div className='profile_info_prof_card'>
                <h3>{prof.firstName} {prof.lastName}</h3>
                <p>{prof.profession}</p>
              </div>
              <div className="prof_info_button">
                <HiInformationCircle/>
              </div>
            </div>
            <div className="prof_card_location">
              <p><HiLocationMarker /> {prof.city}</p>
            </div>
          </div>
        </Link>
      </React.Fragment>
    </div>
  )
}

export default ProfItem;