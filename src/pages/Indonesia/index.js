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
             setPstf(response.data.perawatan)
             setSem(response.data.sembuh)
             setMen(response.data.meninggal)
         });
    }, []);
  


    return (
        
    <div className="left">
         <div className="test-container">
             <h3>Positif
                <p><CountUp start={0} end={con} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h3>
                     </div>
                     <div className="test2-container">
             <h3>Sembuh
                <p><CountUp start={0} end={rec} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h3>
                     </div>
                     <div className="test1-container">
             <h3>Meninggal
                <p><CountUp start={0} end={det} delay={1.5} separator=",">
                     {({ countUpRef }) => (
                 <span ref={countUpRef} />)} 
                     </CountUp> </p></h3>
                     </div>
    </div>


            );
};
export default Indonesia;