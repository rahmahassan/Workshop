function adjustStyle() {
    var width = 0;
    if(window.innerHeight)
    {
        width = window.innerWidth;
    }
    else if(document.documentElement &&document.documentElement.clientHeight){
        width = document.documentElement.clientWidth;

    }
    else if(document.body){
        width = document.body.clientWidth;
    }
    if(width<1300){
        document.getElementById("image").setAttribute("src","static/img/subNav_accent.png");
        document.getElementById("style").setAttribute("href", "static/css/simple.css");
    }
    else {
        document.getElementById("image").setAttribute("src","static/img/django/logo");
        document.getElementById("style").setAttribute("href","static/css/style.css");

    }



}
window.onresize  = function () {
    adjustStyle();


};
window.onload = function () {
    adjustStyle();

};
