console.log ("Hi Praveen");
    var h = 10;
    var w = 10;
    let a = 1;
    document.getElementById("imag").src = "DSC_6096.jpg";
    function height() {
        h = h+10;
        document.getElementById("imag").height = h;
    }
    function width() {
        w = w+10;
        document.getElementById("imag").width = w;
    }
    function height_width_h() {
        var ani = setInterval(function() {
        h = h+1;
        w = w+1;
        document.getElementById("imag").height = h;
        document.getElementById("imag").width = w;
        if(h == 500 && w == 500) {
            clearInterval(ani);
            height_width_o();
        }
        }, 25);
    }
    function height_width_o() {
        var ani = setInterval(function() {
        h = h-1;
        w = w-1;
        document.getElementById("imag").height = h;
        document.getElementById("imag").width = w;
        if(h == 10 && w == 10) {
            clearInterval(ani);
        }
        }, 1);
    }
    function i_change() {
        var animation = setInterval(function() {
        if(a == 1) {
            document.getElementById("imag").src = "a.jpg";
            a = 0;
        }
        else{
            document.getElementById("imag").src = "DSC_6096.jpg";
            a = 1;
        }
    },1000);
    }