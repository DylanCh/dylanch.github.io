'use strict';

const ic = 3900.00;
const checkingMinimumBalance = 1500.00;
const out = [
  {type:'Groceries',amt:200.00},
  {type:'Food',amt:150.00},
  {type:'MetroCard',amt:120.00},
  {type:'To Savings Account',amt:250.00},
  {type:'Rent',amt:450.00},
  {type:'Health Insurance',amt:330.00},
  {type:'flexible',amt:100.00}
];

var balance = ic;
var data = [] , labels = [];
for (const e of out){
  balance = balance - e.amt;
  data.push(e.amt);
  labels.push(e.type);
}

balance = (balance<0) ? 0 : balance;

labels.push('Save-ups per month');
data.push(balance);

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: data,
      backgroundColor: [
        'rgb(255, 99, 132)', // red
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(255,192,203)', //pink
        'rgb(105,105,105)',
        'rgb(0,0,0)' // black
      ],
      label: 'Spendings and Balance'
    }],
    labels: labels
  },
  options: {
    responsive: true
  }
};

window.onload = function() {
  var ctx = document.getElementById("chart-area").getContext("2d");
  window.myPie = new Chart(ctx, config);
};

var monthOrMonths = (estimateTime)=>{
  if(estimateTime===1)
    return estimateTime.toString()+' month';
  return estimateTime.toString()+' months';
};

var calculateWaitTime = (alreadyHave,monthlySaveUps,priceTotal)=>{
  let estimateTime = (priceTotal - alreadyHave + checkingMinimumBalance)/monthlySaveUps;
  return (isNaN(estimateTime)) ?  'Cannot calculate'
                               : monthOrMonths(Math.floor(estimateTime));
};

var calculateTotalCost = (diamond,ring,warranty)=>{
  diamond = diamond.toString().replace(',','');
  ring = ring.toString().replace(',','');
  let total = parseFloat(diamond) + parseFloat(ring);
  total = 0.045*total +total;
  console.log(warranty);
  if(warranty!==undefined && !(typeof warranty === typeof '' && warranty.trim()==='')){
    warranty =warranty.toString().replace(',','');
      total+= parseFloat(warranty);
  }
  return total;
};

var diamondFunCtrl = ($scope)=>{
  $scope.currentBalance = 2334.62;
  $scope.checkingMinimumBalance = checkingMinimumBalance;
  $scope.currentBalanceMinusCheckingMinimum = ($scope.currentBalance - $scope.checkingMinimumBalance);
  $scope.diamondPrice = 0;
  $scope.ringPrice = 0;
  $scope.salesTax='4.5%';
  $scope.warranty=100;
  $scope.estimateWaitTime = '';
  $scope.calculateWaitTime = ()=>{
    let estimateWaitTime = calculateWaitTime(parseFloat($scope.currentBalanceMinusCheckingMinimum),
                  balance,
                  calculateTotalCost($scope.diamondPrice,
                                     $scope.ringPrice,
                                    $scope.warranty));
    $scope.estimateWaitTime = estimateWaitTime;
  };
};

var app = angular.module('diamondFundApp',[]);
app.controller('diamondFunCtrl',
               ['$scope',diamondFunCtrl]);
