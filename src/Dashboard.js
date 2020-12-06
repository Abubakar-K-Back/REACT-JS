import React, {useEffect}from 'react'
import Navigations from './Navigations'
import Papa from 'papaparse';
import table from 'react-bootstrap'

export default function Dashboard() {
    
    Papa.parse("./HBL.csv".files[0], {
        complete: function(parsedOutput) {
            console.log(parsedOutput);
        }
    });
    


    return (
        <>
        <Navigations/>
        <h1>
            Dashboard
            Analytics
            
        </h1>
        </>
    )
}
