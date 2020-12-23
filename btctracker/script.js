(function(){
    const API_URL = "https://api.coinbase.com/v2/prices/";
    window.onload = () => {
        document.getElementById("year").innerHTML = new Date().getFullYear();
    };
    document.getElementById("crypto-dropdown").onchange = (e) => {
        let selectedCrypto = e.target.value;
        document.getElementById("crypto-price-header").innerHTML = selectedCrypto + " Current Price:";
        axios.get(API_URL + selectedCrypto + "-USD/buy")
            .then(function (response) {   
                $({ countNum: $('#crypto-price').text()}).animate({ countNum: response.data.data.amount },                
                { 
                  duration: 2000, easing:'linear', 
                  step: function() { $('#crypto-price').text(Math.floor(this.countNum)); },
                  complete: function() { $('#crypto-price').text('$'+this.countNum);} 
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})();
