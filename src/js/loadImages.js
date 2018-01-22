export default function loadFullImages() {
	let imageEls = document.querySelectorAll('.hero-pic');
	for (let imageEl of imageEls) {
		loadFullImage(imageEl);
	}

	function loadFullImage(item) {
		const img = new Image();
		img.src = item.href;
		img.className = 'reveal';
		if (img.complete) {
			phaseInImg(item, img);
		} else {
			img.addEventListener('load', function fullImageLoaded() {
				phaseInImg(item, img);
				img.removeEventListener('load', fullImageLoaded);
			})
		}
	}

	function phaseInImg(item, img) {
		removePreviewFeatures(item);
		item
			.appendChild(img)
			.addEventListener('animationend', function phaseOutPreview(e) {
				let previewImage = item.querySelector('.hero-preview');
				item.removeChild(previewImage);
				e.target.classList.remove('reveal');
				e.target.removeEventListener('animationend', phaseOutPreview);
			})
	}

	function removePreviewFeatures(item) {
		item.classList.remove('replace');
		item.addEventListener('click', function(e) {
			e.preventDefault();
		})
	}
}