// typ animatie
const typewriter = (i = 0) =>{
	const opties = ['Roy Heeffer', 'Web developer', 'Creative Thinker', 'Roy Heeffer'];
	const writer = document.querySelector("#typed");
	if (i < opties.length){
		woord = opties[i]
		setTimeout(function(){typ(woord,writer,1, i)},500);
	}		
}
// typt het woord
const typ = (woord, writer, i, j) =>{
	writer.innerHTML = woord.substring(0,i);
	i++
	if (i <= woord.length){
	setTimeout(function(){typ(woord,writer,i,j)},150);
	}
	else if (j !== 3){
		setTimeout(function(){bkspce(woord, writer, i, j)},500);
	}
}
// delete het woord
const bkspce = (woord, writer, i, j) =>{
	i--
	writer.innerHTML = woord.substring(0,i);
	
	if (i > 0){
	setTimeout(function(){bkspce(woord,writer,i,j)},150);
	}
	else if (i == 0){
		j+=1
		typewriter(j)
	}
}


typewriter()

// scroll functie
const scroll = (elem)=>{
	document.querySelector(elem).scrollIntoView({behavior: "smooth", block: "start"});
};
// eventlisteners voor navigatie-klikken
const profileNav = document.querySelector("#profielNav").addEventListener("click", () =>{scroll("#profiel")});
const pointer = document.querySelector("#pointer").addEventListener("click", () =>{scroll("#profiel")});
const experienceNav = document.querySelector("#toolsNav").addEventListener("click", () =>{scroll("#tools")});
const skillsNav = document.querySelector("#portfolioNav").addEventListener("click", () =>{scroll("#portfolio")});
const blogNav = document.querySelector("#contactNav").addEventListener("click", () =>{scroll("#contact")});

console.log(window.translateY)
// laad de rest van de css (under fold)
const laadScript = (src) =>{
	console.log("got css")
	if(document.createStyleSheet){
	document.createStyleSheet(src);
	}
	else{
		const stylesheet = document.createElement('link');
		stylesheet.rel = 'stylesheet';
		stylesheet.type = 'text/css';
		stylesheet.href = src;
		document.getElementsByTagName('head')[0].appendChild(stylesheet);
	}
}

// start css toevoeging
window.onload = function(){
	laadScript("./css/css2.css");
	

}