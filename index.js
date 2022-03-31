function myLove() {
    var nam1 = document.getElementById("name1").value;
    var nam2 = document.getElementById("name2").value;
    if (nam1.length <= 2) {
        alert("at least 3 characters")

    }
    if (nam2.length <= 2) {
        alert("at least 3 characters")
    } else {

        var love = Math.random() * 100;
        love = Math.floor(love);
        document.getElementById("lov").value = love
        console.log(love)
    }
}