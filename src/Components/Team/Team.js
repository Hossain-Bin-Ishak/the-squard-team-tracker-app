import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../Team/Team.css';
import { useHistory } from 'react-router';

const Team = (props) => {
    const { strTeamBadge, strSport, idTeam } = props.team;
    
  
    const history = useHistory();
    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);
    }
    return (
        <div className='team-container col-md-2 col-sm-12 m-3'>
            <div className=''>
                <img src={strTeamBadge} alt="" />

                <p><b>Sports Type:</b> {strSport}</p>
                               <button className='btn-primary btn-style'
                    onClick={
                        () => handleClick(idTeam)                        
                    }
                >Explore <FontAwesomeIcon icon={faArrowRight} /></button>

            </div>
        </div>
    );
};

export default Team;