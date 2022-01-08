const req = require("express/lib/request");

// handles adding a song to a playlist from a button on the front end
const addSongToPlaylist = async (e) => {
    e.preventDefault();
    const playlist_id = document.getElementById(`playlist_id`).value;
    const song_id = document.getElementById(`song_id`).value;
    const body = {
        playlist_id: playlist_id,
        song_id: song_id,
    };
    const addSongUrl = `/api/playlists/addSong`;
    const response = await fetch(addSongUrl, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify(body)
    });
    console.log(response);
    if (response.ok) {
        document.location.replace(`/playlists/${playlist_id}`);
    } else {
        alert(`Failed to add new record. Cannot have the same song twice.`);
    }
};

// handles creating a new playlist
const handleAddPlaylist = async (e) => {
    e.preventDefault();
    const body = {
        name: document.getElementById(`playlist-name`).value,
        description: document.getElementById(`playlist-description`).value,
        user_id: document.getElementById(`playlist-user_id`).value,
        isPublic: document.getElementById(`playlist-isPublic`).checked,
    };
    const url = `/api/playlists/add`;
    const response = fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        document.location.replace(``);
    } else {
        alert(`Failed to add new record. Try again!`);
    }
};

document.getElementById(`addSongToPlaylist`).addEventListener(`submit`, addSongToPlaylist);
document.getElementById(`addPlaylist`).addEventListener(`submit`, handleAddPlaylist);