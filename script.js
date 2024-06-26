const player = document.getElementById('audio-player');
const songName = document.getElementById('song-name');
const duration = document.getElementById('duration');

// Handle file drop event
function handleFileDrop(event) {
	event.preventDefault();
	const file = event.dataTransfer.files[0];
	playSong(file);
}

// Handle file dragover event
function handleFileDragOver(event) {
	event.preventDefault();
	event.dataTransfer.dropEffect = 'copy';
}

// Play the selected song
function playSong(file) {
	const fileReader = new FileReader();
	fileReader.onload = function(event) {
		const audioBlob = new Blob([event.target.result], { type: file.type });
		const audioUrl = URL.createObjectURL(audioBlob);
		player.src = audioUrl;
		songName.textContent = file.name;
		const audio = new Audio(audioUrl);
		audio.onloadedmetadata = function() {
			const minutes = Math.floor(audio.duration / 60);
			const seconds = Math.floor(audio.duration % 60);
		
