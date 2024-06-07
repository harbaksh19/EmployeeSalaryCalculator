console.log('Js Live');
function Cal(){
var nameofemp = document.getElementById('name').value;
var monthlysalary = document.getElementById('monthlysalary').value;
var leaves = document.getElementById('leaves').value;
var advancetaken = document.getElementById('advance').value;
var salperday = Number(monthlysalary / 30);
var deductedsal = salperday * leaves;
var finalsal=monthlysalary-deductedsal-advancetaken;
var r=document.getElementById('amount');
r.innerHTML='Net Salary of '+ nameofemp + ' is ' + finalsal;
}





