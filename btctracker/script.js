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
                $('#crypto-price').each(function() {
                    var $this = $(this);
                    $({ countNum: $this.text()}).animate({ countNum: response.data.data.amount },                
                    {                
                      duration: 3000,
                      easing:'linear',
                      step: function() { $this.text(Math.floor(this.countNum)); },
                      complete: function() { $this.text('$'+this.countNum);}                 
                    }); 
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})();
