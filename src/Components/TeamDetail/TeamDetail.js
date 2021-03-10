import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import './TeamDetail.css';

const TeamDetail = () => {
    const {teamId} = useParams();
const [team, setTeam] = useState({});
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
     },[teamId]);
    return (
        <div className='team-detail'>
            <div className="team-detail-info">
            <h1>This is Team Detail: {teamId}</h1>
            <h3>{team.strTeam}</h3>
            <p><b> <FontAwesomeIcon icon={faPodcast} /> Founded:</b> {team.intFormedYear}</p>
            <p><b> <FontAwesomeIcon icon={faFlag} /> Country:</b> {team.strCountry}</p>
            <p><b> <FontAwesomeIcon icon={faFutbol} /> Sports Type:</b> {team.strSport}</p>
            <p><b> <FontAwesomeIcon icon={faMars} /> Gender:</b> {team.strSport}</p>
            </div>
            <div className="team-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem similique numquam unde sit molestias obcaecati ipsum aperiam, aut voluptates laborum aspernatur repudiandae deserunt quam facere ab eius saepe. Libero.</p>
            </div>
        </div>
    );
};

export default TeamDetail;

