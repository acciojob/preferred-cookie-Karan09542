//your JS code here. If required.
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const root = document.documentElement;

function parseCookie(cookieString){
	const cookie = {}
	cookieString = cookieString.trim();
	if(cookieString){
		cookieString.split(";").forEach(cookiePair => {
			const parts = cookiePair.split("=");
			const [key, value] = [parts?.[0].trim(), parts?.[1] || ""]
			cookie[key] = value;
		})
	}
	return cookie;
}
window.onload = () => {
	const {fontcolor, fontsize} = parseCookie(document.cookie);
	console.log(fontcolor, fontsize)
	if(fontcolor){
		root.style.setProperty("--fontcolor", fontcolor);
		fontColorInput.value = fontcolor;
	}
	if(fontsize){
		fontSizeInput.value = fontsize;
		root.style.setProperty("--fontsize", `${fontsize}px`)
	}
}

function savePreferences(){
	const fontSize = fontSizeInput.value;
	const fontColor = fontColorInput.value;
	document.cookie = `fontsize=${fontSize}; path=/`;
	document.cookie = `fontcolor=${fontColor}; path=/`;
	
}




