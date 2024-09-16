window.addEventListener("scroll",()=>{
    var scrollTop= document.documentElement.scrollTop || window.scrollY
    var window_height = window.innerHeight;
    var document_height = document.documentElement.scrollHeight;
    //console.log("hhello")


    var scroll_present = scrollTop/(document_height-window_height)*100;
    console.log(scroll_present)

    if(scroll_present>=80){
        document.getElementById("line_2").classList.remove("hide");
        document.getElementById("hideble_logo").classList.remove("hide");
        document.getElementById("form").classList.remove("hide");
    }
    if(scroll_present<=40){
        document.getElementById("line_2").classList.add("hide");
        document.getElementById("hideble_logo").classList.add("hide");
        document.getElementById("form").classList.add("hide");
    }
})

