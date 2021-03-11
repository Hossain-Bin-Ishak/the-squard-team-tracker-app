import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetailHeader.css';

const TeamDetailHeader = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    console.log(team);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => {
                setTeam(data.teams[0])
                console.log(data.teams[0]);
            })
    }, [teamId]);

    return (
        <div className='header-dynamic-img' style={{ 
            backgroundImage: `url(${team.strTeamBanner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
           
            <img src={team.strTeamBadge} alt="Team Badge" />            
           
        </div>

    );
};

export default TeamDetailHeader;