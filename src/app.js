import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      baseAmount: 0,
      selectedCurrency: ""

    },
    computed: {
      convertedFromEuros: function(){
        return (this.baseAmount * this.rates[this.selectedCurrency]) //to amend decimales with toFixed and pass the number of decimals on the brackets
      }
    },
    filters:{
      twoDecimalsPlaces: function(number){
        return number.toFixed(2)
      }
    },
    mounted(){
      fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => {
        data.rates['EUR'] = 1;
        this.rates = data.rates;
      }) // no semicolon, if you don't want all of it, then only call the part of the object you need. data at the begging is a call back
    }
  })
})
