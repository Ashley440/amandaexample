let x =0;
function myfunc(){
    const left = document.getElementById("cv");
    
    //left.style.backgroundImage="url('res/tuxpi.com.1635941685.jpg')";
    if (x===0){
        left.innerHTML=`<iframe src="res/resume.pdf" height="500px" width="100%" title="MyResume"></iframe>`;
        x++;
    }
    else{
        left.innerHTML=`<h3></h3>`;
        x--;
    }
}