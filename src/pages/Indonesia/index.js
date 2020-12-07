import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountUp from "react-countup";


const Indonesia = () =>{
    const[con, setPstf] = useState([])
    const[rec, setSem] = useState([])
    const[det, setMen] = useState([])
    useEffect(() => {
        axios
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) => {
             setPstf(response.data.jumlahKasus)
             setSem(response.data.sembuh)
             setMen(response.data.meninggal)
         });
    }, []);
  


    return (
    <div> 
        <h3>Jumlah kasus di Indonesia</h3>
        <div className="left">
         <div className="positif">
             <h3>Positif
                <p><CountUp start={0} end={con} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h3>
                     </div>
                     <div className="sembuh">
             <h3>Sembuh
                <p><CountUp start={0} end={rec} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h3>
                     </div>
                     <div className="meninggal">
             <h3>Meninggal
                <p><CountUp start={0} end={det} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h3>
                     </div>
        </div>
    </div>


            );
};
export default Indonesia;