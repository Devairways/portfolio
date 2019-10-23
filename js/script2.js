// scroll animatie trigger
document.addEventListener('load', function(){
  ScrollTrigger.init();
});



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

const actief = (id) =>{
	if (document.querySelector("nav .actief")){
		document.querySelector("nav .actief").classList.remove("actief");
	}
	else if(!id){
		return;
	}
	document.querySelector(`nav ${id}`).classList.add("actief");
}

window.onscroll = logScroll;