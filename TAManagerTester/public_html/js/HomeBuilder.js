function run(){
    $.getJSON("./js/courseTab.json", function(json) {
        document.getElementById("banner").innerHTML = json.subject + " " + json.number + " - " + json.semester + " " + json.year + "<br>" + json.title;
    });
    
}