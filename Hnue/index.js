
var list_tk = [
    705105082, 705105057,
]

var list_mk = [
    0355767012, 29102002, 
]

for(var i = 0; i < list_tk.length; i++){
    
    if(localStorage.getItem('tk')){
        tk = JSON.parse(localStorage.getItem('tk'));
    }else{
        tk = [];
    }
    function addlist(id){
        tk.push(id);
                localStorage.setItem('tk',JSON.stringify(tk));  
    }
    if(document.getElementById('nav1_lblHo_ten') != null){
        addlist(list_tk[i])
        document.getElementById('HeaderSV_LoginPanel2_lnkLogout').click()
    }else{
        document.getElementById('LoginControl1_txtusername').value = list_tk[i]
        document.getElementById('LoginControl1_txtpassword').value = list_mk[i]
        document.getElementById('LoginControl1_btnDangNhap').click()
    }

}

