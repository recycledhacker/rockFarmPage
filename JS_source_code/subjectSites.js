//Establish an index to traverse through the web site objects
var siteIndex = 0;
//Make sure the document is loaded
document.addEventListener("DOMContentLoaded", updateSites() );
function updateSites() {
//Establish the website Objects
var site1 ={subject: "Advocacy", entity: "Autism Society", 
bzlink: '<a href=\"https://www.autism-society.org/\"> Autism-Society Link </a>'}

var site2 ={subject: "Education and Advocacy", entity: "FSU Autism Institute", 
bzlink: '<a href=\"http://www.firstsigns.org/\"> FSU First Signs Link </a>'}

var site3 ={subject: "Research and Solutions", entity: "Autism Speaks", 
bzlink: '<a href=\"https://www.autismspeaks.org/about-us"> Autism Speaks Link </a>'}

//Create an Array of Objects
var sites =[site1, site2, site3];
//Establish an index to traverse through the web site objects
var subject = document.getElementById("subject");
var entity = document.getElementById("entity");
var bzLink = document.getElementById("bzLink");
subject.innerHTML=sites[siteIndex].subject;
entity.innerHTML=sites[siteIndex].entity;
bzLink.innerHTML=sites[siteIndex].bzlink;
siteIndex++;
  if (siteIndex >= sites.length) {siteIndex=0}  
  }  

