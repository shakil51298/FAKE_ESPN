import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import Carts from '../Carts/Carts';
import MainHeaderimg from '../MainHeaderimg/MainHeaderimg';
import './league.css'


const LeagueContainer = () => {
    const [LeagureCard,setLeagueCard] = useState([]);
    const sliceOfLeagueCard = LeagureCard.slice(0,21);


    useEffect(()=>{
        const url ='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        axios(url)
        .then(data => setLeagueCard(data.data.leagues))
    },[])
    
    return (
        <div className=' bgGradient'>
            <MainHeaderimg></MainHeaderimg>
            <CardColumns className="container mt-5">
                {
                    sliceOfLeagueCard.map(cartData => <Carts cartData ={cartData} key={cartData.idLeague}></Carts>)
                }
            </CardColumns>
            <div className="footer text-danger text-center">
                <p className="text-dark">
                ©2021 | All rights reserved |<span className='text-danger'> Programmer Hero</span> 
                </p>
            </div>
        </div>
    );
};

export default LeagueContainer;<h2>this is league container</h2>