const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", () => {
	const navBar = document.querySelector(".nav-bar")
	navBar.classList.toggle("active")
	const fix = document.querySelector(".fix")
	fix.classList.toggle("move")
})
const header = document.querySelector("header")
window.addEventListener("scroll", () => {
	header.classList.toggle("sticky", window.scrollY > 0)
	
	if (window.scrollY > 0) {
		document.querySelector("meta[name='theme-color']").setAttribute("content", "#ffa500")
	}
	else{
		document.querySelector("meta[name='theme-color']").setAttribute("content", "#4c0079")
	}

})