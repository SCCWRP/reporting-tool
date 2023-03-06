
const fetchData = async (data) => {
   const response = await fetch(`https://nexus.sccwrp.org/smc-audit-demo/${data}`, {
      method: 'POST',
      headers: {
         "Content-Type": "application/json",
      },
      body: stationJSON
   })

   if (response) {
      console.log(response)
   }

   return response
}

const dataService = {
   fetchData
}

export default dataService