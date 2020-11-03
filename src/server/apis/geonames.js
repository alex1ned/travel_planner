// Template code for geonames project ... still need to refactor
const getDataFromGeoNames= async (username,city)=>{
    const url=`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`;
    
    try {
        return await axios.get(url) 
        .then(res=>{
            return {
                lat:res.data.geonames[0].lat,
                lng:res.data.geonames[0].lng
            }
        });

    } catch(error) {
        console.log(e);
    }
}