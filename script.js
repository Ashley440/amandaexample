let x =0;
function myfunc(){
    const left = document.getElementById("cv");
    
    //left.style.backgroundImage="url('res/tuxpi.com.1635941685.jpg')";
    if (x===0){
        left.innerHTML=`<object data="res/resume.pdf" type="application/pdf" height="500px" width="80%" title="MyResume"></object>`;
        x++;
    }
    else{
        left.innerHTML=`<h3></h3>`;
        x--;
    }
}
