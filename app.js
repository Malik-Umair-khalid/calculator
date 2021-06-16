
    function calc(num){
        var data = document.getElementById('screen')
        var lastvalue = data.value.slice(-1)
        var operations = ['+','-','*','/','.']
        // agar calculator ko first condition na 1 milla to is ka matlab ka user na koi number
        //  press kia ha kion ka aghar wo operation press karta to us ko opeeratin walee array 
        // sa wo operation mill jata aur condition !== Walee sahi ho jai gi.
        // && ka bad walee condition ma agar user ka press kia hoa buttion number hoga to condition -1  ho gae gi kio ka number hoga
        // ayr number ki value us ko operation walee array ma nahi milla gi jab ka operation us ko operation walay array ma mill gai ga to condition true ho jae gi
        if (operations.indexOf(lastvalue) !== -1 && operations.indexOf(num) !== -1){
            data.value = data.value.toString().slice(0, -1) + num
        }
        else{
            data.value += num 
        }
        console.log(lastvalue)
    } 
    function math(operation){
        var data = document.getElementById('screen')
        data.value = eval(data.value)
    }
    function del(){
        var data = document.getElementById('screen')
        data.value = data.value.toString().slice(0, -1)
    }
    function allClear(){
        var data = document.getElementById('screen')
        data.value = ''
    }