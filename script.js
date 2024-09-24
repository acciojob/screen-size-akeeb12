//your JS code here. If required.
const sizeInfo = document.querySelectorAll('sizeInfo');

function updateSize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
	
}
window.addEventListener('resize', updateSize);
updateSize();