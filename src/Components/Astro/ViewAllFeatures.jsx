import React, { useState } from 'react';


const  ViewAllFeatures = () => {
     
     const [ featureList, setFeatureList ] = useState([]);
     const [ lat, setLat ] = useState('');
     const [ lon, setLon ] = useState('');
     const [ elevation, setElevation ] = useState('');
     
     const [ fYear, setFyear ] = useState('');
     const [ fMonth, setFmonth ] = useState('');
     const [ fDay, setFday ] = useState('');
     const [ tYear, setTyear ] = useState('');
     const [ tMonth, setTmonth] = useState('');
     const [ tDay, setTday ] = useState('');

     const [ hrs, setHr ] = useState('');
     const [ min, setMin ] = useState('');
     const [ sec, setSec ] = useState('');



     const fetchFeatures = () => {
          fetch(`https://api.astronomyapi.com/api/v2/bodies/positions?latitude=${lat}&longitude=${lon}&elevation=${elevation}&from_date=${fYear}-${fMonth}-${fDay}&to_date=${tYear}-${tMonth}-${tDay}&time=${hrs}:${min}:${sec}`, {
               method: 'GET',
               headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic NzUzOTE0ZjAtZTVjZi00YmJmLWI3ZDctMDIyN2U0NDY0NjFjOjI2MjQwYWRlMTk1MTk5ODk5OWMxYjhiYmM3ZWFlMjJkNTc3YjhlZDFmMTY2YTI5ZTM1ODA2MWEzOTM0OWJjZTc1NDhlZmE2NDIzZDI0NWU1OTdlYmM2MTBkMDYwN2IxM2QxYzM0N2I4MjlkMDU1ZDE3YjliNzFkYmVkMGY1MWIwNmY3ZDljYmU4NmE4NTU5M2JiZmFkMjdhNjcxMGEzZWVkZTE4YzU4ZDE3OTIxZTEyNzY2MWM0NDM2NzViNzY2ZGQzNWE0MGQzZDI2OGFlZTJmOGQ3Y2YzYWFmM2M5YmZk'
               })
          }).then( (res) => res.json())
          .then((logData) => {
               setFeatureList(logData)
               console.log(logData);
          })
     }

     return(
          <h1>View All Features</h1>
     );
}

export default ViewAllFeatures;