function updateBar(currentState, maxState) {
    document.getElementById("pointbar").innerHTML = currentState + "/" + maxState
    document.getElementById("pointbar").style = "width:" + (currentState/maxState) * 100 + "%;"
}

function updateLevel(currLevel) {
    document.getElementById("curr_level").innerHTML = parseInt(currLevel);
    document.getElementById("pro_level").innerHTML = parseInt(currLevel) + 1;
}

levlerUpdate = function() {
    get("UserData!F1:F2", function(userData) {
        get("Levels!B1:B100", function(levelData) {
            updateLevel(userData[0][0]);
            updateBar(userData[1][0], levelData[parseInt(userData[0][0]) - 1][0])
        });
    });
}
