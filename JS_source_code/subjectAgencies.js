//Establish an index to traverse through the agency objects
var agencyIndex = 0;
//Make sure the document is loaded
document.addEventListener("DOMContentLoaded", updateAgencies() );
function updateAgencies() {
//Establish the agency Objects
var agency1 ={agency: "Social Security Administration", sector:
 "US Government", govLink: '<a href=\"https://www.ssa.gov\"> SSA Link </a>'}

var agency2 ={agency: "Health and Human Services", sector:
 "US Government", govLink:  '<a href=\"https://www.hhs.gov/programs/topic-sites/autism/index.html\"> HHS Link </a>'}

  //Create an Array of Objects
var agencys =[agency1, agency2];
//Establish an index to traverse through the book objects
var agency = document.getElementById("agency");
var sector = document.getElementById("sector");
var govLink = document.getElementById("govLink");
agency.innerHTML=agencys[agencyIndex].agency;
sector.innerHTML=agencys[agencyIndex].sector;
govLink.innerHTML=agencys[agencyIndex].govLink;
agencyIndex++;
  if (agencyIndex >= agencys.length) {agencyIndex=0}  
  }  

