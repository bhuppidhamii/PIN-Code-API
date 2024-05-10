
document.addEventListener('DOMContentLoaded', function() {
    let pc=document.getElementById('pincode');
    let getData=function(){
        let pin =this.value;
        let url='https://api.postalpincode.in/pincode/'+pin;
        fetch(url)
        .then(data=>data.json())
        .then(pinData=>{
            let district=pinData[0].PostOffice[0].District;
            let country=pinData[0].PostOffice[0].Country;
            document.getElementById('city').value=district;
            document.getElementById('country').value=country;
        });
    }
    pc.addEventListener('focusout',getData);
});