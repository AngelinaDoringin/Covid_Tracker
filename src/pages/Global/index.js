import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountUp from "react-countup";


const Global = () =>{
    const[con, setPstf] = useState([])
    const[rec, setSem] = useState([])
    const[det, setMen] = useState([])
    useEffect(() => {
        axios
         .get("https://covid19.mathdro.id/api")
         .then((response) => {
             setPstf(response.data.confirmed.value)
             setSem(response.data.recovered.value)
             setMen(response.data.deaths.value)
         });
    }, []);
  


    return (
    <div> 
        <h3>Jumlah kasus di Dunia</h3>
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
export default Global;