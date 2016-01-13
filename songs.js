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
console.log("songs", songs);
songs.unshift("White Lies - by Odesza on the album In Return")
console.log("songs", songs);
songs.push("How Did I Get Here - by Odesza on the album Summer's Gone")
console.log("songs", songs);

// get rid of shitty characters and replace >
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
}
console.log("songs", songs);

var songListElement = document.getElementById("parent-list");
console.log("songListElement", songListElement);
var songList = songListElement.innerHTML;
console.log("songList", songList);

for (var i = 0; i < songs.length; i++) {
	songList += "<li> " + songs[i] + "</li>";
}
console.log("songList", songList);

songListElement.innerHTML = songList;