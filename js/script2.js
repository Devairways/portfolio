// scroll animatie trigger
document.addEventListener('load', function(){
  ScrollTrigger.init();
});

const projecten = [
{
	naam: "Profiler",
	cat: 'Fullstack',
	stack: "React.js + Redux, Node.js, Postgresql",
	demo: "https://facebook.com",
	code: "https://github.com",
	beschrv:"profielensite"
},
{
	naam: "Profiler",
	cat: "Fullstack",
	stack: "React.js + Redux, Node.js, Postgresql",
	demo: "https://facebook.com",
	code: "https://github.com",
	beschrv:"profielensite"
},
{
	naam: "Profiler",
	cat: "Fullstack",
	stack: "React.js + Redux, Node.js, Postgresql",
	demo: "https://facebook.com",
	code: "https://github.com",
	beschrv:"profielensite"
},
{
	naam: "Profiler",
	cat: "Fullstack",
	stack: "React.js + Redux, Node.js, Postgresql",
	demo: "https://facebook.com",
	code: "https://github.com",
	beschrv:"profielensite"
},

]


// formulier versturing
document.querySelector("#contact-form").addEventListener("submit",(e)=>{
	e.preventDefault();
	var xhttp = new XMLHttpRequest();
	naam = document.querySelector("#naam").value;
	email = document.querySelector("#afzender").value;
	bericht = document.querySelector("#bericht").value;

	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	  	console.log("succes",this.responseText);
	  }
	};

	xhttp.open("POST", "https://formspree.io/xznnprnx", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(`name=${naam}&email=${email}&bericht=${bericht}`);
	document.querySelector("#succes").style.display = "inline";
	naam.value = '';
})

const logScroll = () =>{

	if (profiel.getBoundingClientRect().top < 60) {
        document.querySelector("#logo").style.display = "none";
		document.querySelector("nav").classList.add("sticky");
		actief("#profielNav");
	}
	else {
        document.querySelector("#logo").style.display = "";
		document.querySelector("nav").classList.remove("sticky");
		actief();
	}
	if(tools.getBoundingClientRect().top < 80 ){
		actief("#toolsNav");
	}
	if(portfolio.getBoundingClientRect().top < 80 ){
		actief("#portfolioNav");
	}
	if(contact.getBoundingClientRect().top < 80 ){
		actief("#contactNav");
	}
	
}
// nav huidige sectie
const actief = (id) =>{
	if (document.querySelector("nav .actief")){
		document.querySelector("nav .actief").classList.remove("actief");
	}
	else if(!id){
		return;
	}
	document.querySelector(`nav ${id}`).classList.add("actief");
}

// const portfolio = (button) =>{
// 	let filter = button
// 	case "portAlle" :
// 	{
// 		document.querySelectorAll("All").classList.add("zichtbaar")
// 		portPyth.classList.add("zichtbaar")
// 		portJvscrp.classList.add("zichtbaar")
// 	}
//     case "portFull":
//     {
//     	portPyth.classList.add("onzichtbaar")
//     	portJvscrp.classList.add("zichtbaar")
//     }

// }

const portfolioDisplay = (button)=>{
	let array = [...projecten];
	array.map(project =>{
		project.cat == button;
	})
	return array;
}

const renderPort = (button)=>{
	let render = portfolioDisplay(button);

 console.log(render)
}

renderPort("Fullstack")
window.onscroll = logScroll;