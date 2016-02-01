var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.
songs.unshift("White Lies - by Odesza on the album In Return")

songs.push("How Did I Get Here - by Odesza on the album Summer's Gone")


// get rid of shitty characters and replace >
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
}


var songListElement = document.getElementById("parent-list");
var songList = songListElement.innerHTML;

for (var i = 0; i < songs.length; i++) {
	songList += "<li>" + songs[i] + "</li>";
}

songListElement.innerHTML = songList;

document.getElementById("add-song-button").addEventListener("click", function() {
	var nameInput = document.getElementById("addName");
	var artistInput = document.getElementById("addArtist");
	var albumInput = document.getElementById("addAlbum");
	var newName = nameInput.value;
	var newArtist = artistInput.value;
	var newAlbum = albumInput.value;
	var newSong = `${newName} - by ${newArtist} on the album ${newAlbum}`;
	songs.push(newSong)
	songList = "";
	for (var i = 0; i < songs.length; i++) {
		songList += "<li>" + songs[i] + "</li>";
	}
	songListElement.innerHTML = songList;

	nameInput.value = "";
	artistInput.value = "";
	albumInput.value = "";

	viewList();
})

