jQuery(document).ready(function(){

    var click=false;


    $("#click img").mouseenter(function(){
        $(this).css({
            "transform": "scale(1.1)",
            "transition": "transform 0.3s",
        })
    }).mouseleave(function(){
        $(this).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s",
        })
    }).click(function(){
        if(!click){
            $("#show").css({
                "opacity":"100%",
                "transition":"opacity 0.8s",
            });
            $(this).fadeOut(800)
            setTimeout(() => {
                click=true;
            }, 800);
            
        }      
    });    
    
    $("body").click(function(){
        if(click){
            $("#show").css({
                "opacity":"0%",
                "transition":"opacity 0.8s",
            });
            $("#click img").fadeIn(800)
            setTimeout(() => {
                click=false;
            }, 800);
        }      
    })
    $(document).one("click", function(){
        $("audio")[0].play();          
    })
   

    var one_mouse = false;
    var mouse_move = false;

    var mouseX;
    var mouseY;
    document.addEventListener('mousemove', (event) => {
        mouse_move = true;
        if(!one_mouse){
            mouseX = event.clientX;
            mouseY = event.clientY;
            one_mouse = true;
        }
        else{
            new_x = event.clientX
            new_y = event.clientY
            
    
            if(new_x > mouseX ){
                $("#cloud_1").css({
                    "left":"0%",
                    "transition": "left 0.8s",
                }) 
                    
                $("#cloud_2, #up").css({
                    "right":"0%",
                    "transition": "right 0.8s",
                }) 

                $("#back").css({
                    "background-position": "right",
                    "transition": "background-position 1.5s",
                })  
            }
            if(new_x < mouseX ){                        
                $("#cloud_1").css({
                    "left":"-5%",
                    "transition": "left 0.8s",
                })  
                    
                $("#cloud_2, #up").css({
                    "right":"-5%",
                    "transition": "right 0.8s",
                }) 

                $("#back").css({
                    "background-position": "left",
                    "transition": "background-position 1.5s",
                })          
            }
    
            mouseX = new_x
            mouseY = new_y  
            mouse_move = false;            
        }

        
    });
    
    var auto_animation = false; 
    setInterval(function () { 
        if(!mouse_move){
            if(!auto_animation){
                $("#cloud_1").css({
                    "left":"0%",
                    "transition": "left 3s",
                }) 
                    
                $("#cloud_2, #up").css({
                    "right":"0%",
                    "transition": "right 3s",
                }) 

                $("#back").css({
                    "background-position": "right",
                    "transition": "background-position 3s",
                })  
                auto_animation = true;
            }
            else{
                $("#cloud_1").css({
                    "left":"-5%",
                    "transition": "left 3s",
                })  
                    
                $("#cloud_2, #up").css({
                    "right":"-5%",
                    "transition": "right 3s",
                }) 

                $("#back").css({
                    "background-position": "left",
                    "transition": "background-position 3s",
                })       
                auto_animation = false;
            }

        }
    },3500)



    

});