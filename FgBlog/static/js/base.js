function func1(){
    $("#NameMain").html("申请账号");
}


function func2(){
    $("#NameMain").html("功能2");
}

function func3(){
    $("#NameMain").html("功能3");
}

function func4(){
    $("#NameMain").html("功能4");
}

function boxAllClick() {
    if (document.getElementById("boxAll").checked==true){
        $("input[type='checkbox']").prop('checked', true);
    }else{
        $("input[type='checkbox']").prop('checked', false);
    }
    
}


$(document).ready(function(){
    $("#ButtonMain").click(function(){    
        a = 0
        if (document.getElementById("box0").checked==true){
            a=1;
            $.get("/getUser/user0",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box1").checked==true){
            a=1;
            $.get("/getUser/user1",function(data){
                alert("数据：" + data);   
            });
        }
        if (document.getElementById("box2").checked==true){
            a=1;
            $.get("/getUser/user2",function(data){
                alert("数据：" + data);     
            });
        }
        if (document.getElementById("box3").checked==true){
            a=1;
            $.get("/getUser/user3",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box4").checked==true){
            a=1;
            $.get("/getUser/user4",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box5").checked==true){
            a=1;
            $.get("/getUser/user5",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box6").checked==true){
            a=1;
            $.get("/getUser/user6",function(data){
                alert("数据：" + data);     
            });
        }
        if (document.getElementById("box7").checked==true){
            a=1;
            $.get("/getUser/user7",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box8").checked==true){
            a=1;
            $.get("/getUser/user8",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box9").checked==true){
            a=1;
            $.get("/getUser/user9",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box10").checked==true){
            a=1;
            $.get("/getUser/user10",function(data){
                alert("数据：" + data);      
            });
        }
        if (document.getElementById("box11").checked==true){
            a=1;
            $.get("/getUser/user11",function(data){
                alert("数据：" + data);       
            });
        }
        if (a==0){
            alert("请选择账号类型");
        }
        
    });
  });


