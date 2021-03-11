import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import Header from '../Header/Header';
import '../Home/Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className="header container">
            <Header></Header>


            <div className='row m-auto container'>


                {
                    teams.map(team => <Team team={team}></Team>)
                }


            </div>

        </div>
    );
};

export default Home;