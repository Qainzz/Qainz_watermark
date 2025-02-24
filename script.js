document.addEventListener("DOMContentLoaded", function() {
    const playerIdElement = document.getElementById("player-id");

    window.addEventListener("message", function(event) {
        if (event.data.type === "updatePlayerId") {
            playerIdElement.textContent = `ID: ${event.data.id}`;
        }
    });
});
