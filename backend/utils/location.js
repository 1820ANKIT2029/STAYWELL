async function location_value(){
    const loc = document.getElementById("location").value;


    const url="http://localhost:5000/search/location?loc="+loc;

    const response = await fetch(url);
    if(!response){
        console.log("location fetch fail");
    }
    const data = await response.json();
    console.log(data);
}
document.getElementById('location').addEventListener(onfocus, await location_value);