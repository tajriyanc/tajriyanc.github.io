$(document).ready(function() {
    $("#class-projects").click(function() {
        $("#projects-table").show();
        $("#discussions-table").hide();
    });

    $("#class-discussions").click(function() {
        $("#projects-table").hide();
        $("#discussions-table").show();
    });
});

function changeColor(color) {
    document.body.style.backgroundColor = color;

    // Store the selected color in local storage
    localStorage.setItem('backgroundColor', color);
}

// Check if there is a stored background color
const storedColor = localStorage.getItem('backgroundColor');
if (storedColor) {
    document.body.style.backgroundColor = storedColor;
}

