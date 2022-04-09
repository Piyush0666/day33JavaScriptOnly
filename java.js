let id ="";
// localStorage.clear();
selectData();
function manageData(){
    document.getElementById('msg').innerHTML="";
    let name = document.getElementById('name').value;
    if (name=='') {
        document.getElementById('msg').innerHTML=
        'Please enter your name';
        
    }else{
        if (id ==''){
            let arr = JSON.parse(localStorage.getItem('Entry'));
            if(arr==null)
            {
                let data=[name];
                localStorage.setItem('Entry',JSON.stringify(data));

            }
        else{
            arr.push(name);
            localStorage.setItem('Entry',JSON.stringify(arr));
            
        }
        document.getElementById('name').value;
        document.getElementById('msg').innerText=
        'Data added';
    }
    else{

    }
        selectData();
    }
}
function selectData(){
let arr = JSON.parse(localStorage.getItem('Entry'));
if (arr!=null) {
    let html ='';
    let sno =1;
    for(let k in arr){
        html = html+
        `<tr><td>${sno}</td><td>${arr[k]}</td></tr>`;
        sno++;
    }
    document.getElementById('root').innerHTML=html;
    
}
}


function editData(){




}
function deleteData() {
    
}