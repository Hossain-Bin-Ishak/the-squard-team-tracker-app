import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import './TeamDetail.css';
import Male from '../../Photo/male.png';
import Female from '../../Photo/female.png';
import Facebook from '../../Icon/Facebook.png';
import Twitter from '../../Icon/Twitter.png';
import YouTube from '../../Icon/YouTube.png';
import Website from '../../Icon/website.png';
import TeamDetailHeader from '../TeamDetailHeader/TeamDetailHeader';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => {
                setTeam(data.teams[0])
                console.log(data.teams[0]);
            })
    }, [teamId]);

    return (
        <div className='team-detail container'>
            <div className="team-detail-header">
                <TeamDetailHeader> </TeamDetailHeader>
            </div>
            <div className="team-detail-info row m-2">
                <div className="team-info-text col-md-6 mt-4 order-sm-1 order-2">
                    <h1>{team.strTeam}</h1>
                    <p><b> <FontAwesomeIcon icon={faPodcast} /> Founded:</b> {team.intFormedYear}</p>
                    <p><b> <FontAwesomeIcon icon={faFlag} /> Country:</b> {team.strCountry}</p>
                    <p><b> <FontAwesomeIcon icon={faFutbol} /> Sports Type:</b> {team.strSport}</p>
                    <p><b> <FontAwesomeIcon icon={faMars} /> Gender:</b> {team.strGender}</p>
                </div>
                <div className="team-info-img col-md-6 col-sm-12 order-1">
                
                    <img src={team.strGender==='Female'? Female : Male} alt='sports' />

                </div>
            </div>
            <div className='row'>
                <div className="team-description col-md-12 text-justify">
                    <p><b>Stadium Description :</b> {team.strStadiumDescription}</p>

                    <p>{team.strDescriptionEN}</p>

                    <p>{team.strDescriptionES}</p>
                </div>

            </div>
            <div className="social-icon">

                <a href={`https://${team.strFacebook}`} target='_blank' rel="noreferrer"><img src={Facebook} alt="" /></a>
                <a href={`https://${team.strYoutube}`} target='_blank' rel="noreferrer"><img src={YouTube} alt="" /></a>
                <a herf={`https://${team.strWebsite}`} target='_blank' rel="noreferrer"><img src={Website} alt="" /></a>
                <a herf={`https://${team.strTwitter}`} target='_blank' rel="noreferrer"><img src={Twitter} alt="" /></a>

            </div>
        </div>
    );
};

export default TeamDetail;

