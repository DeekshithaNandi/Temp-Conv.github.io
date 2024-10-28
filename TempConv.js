function convertTemperature() {
    var degrees = Number(document.getElementById("degrees").value);
    var Type = document.getElementById("Type").value;

    const ds = " °";
    var celsius = (degrees-32)*5/9;
    var fahrenheit = (degrees * 9/5) + 32;
    var kelvin = parseFloat(degrees)+273.15;

    
    // Convert to Fahrenheit
    if(Type=="Celsius"){
        
            document.getElementById("Res").value = fahrenheit.toFixed(2)+ds+"F"; 
            // document.getElementById("Res").value=String(fs); 

    }
    if(Type=="Fahrenheit"){

            document.getElementById("Res").value = celsius.toFixed(2)+ds+"C";
            
    }
    // if(Type=="Kelvin"){
         
    //         document.getElementById("Res").value=String(kelvin);
    // }
   
    // document.getElementById('kelvinResult').innerText = Kelvin: ${kelvin.toFixed(2)};
}