export default function stationSearch() {
   const inputObj = {search: inputValue}
   const searchJSON = JSON.stringify(inputObj)

   fetch('https://nexus.sccwrp.org/smc-audit-demo/stations', {
      method: 'POST',
      headers: {
         "Content-Type": "application/json",
      },
      body: searchJSON
   })
   .then(response => response.json())
   .then(stations => console.log("stations: ", stations))
   .catch(error => {
      console.error(error)
    })
}