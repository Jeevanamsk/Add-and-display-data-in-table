let arr =[]

function displayTable(){
    var html = "<table  border='1|1'class='table'>";
    setTimeout(()=> {
        html +="<thead>";
        html +="<b>";
        html +="<tr>";
        html += "<td>" + 'ID' + "</td>";
        html += "<td>" + 'Name' + "</td>";
        html += "<td>" + 'Profession' + "</td>";
        html += "<td>" + 'Age' + "</td>";
        html += "<td>" + 'Action' + "</td>";

        html+="</tr>";
        html +="</b>";
        html+="</thead>";

        for(var i=0 ; i<arr.length;i++){
            var id = i +1;
            html +="<tr>";
            html +="<td>" + id + "</td>";
            html +="<td>" + arr[i].name+ "</td>";
            html +="<td>" + arr[i].profession+ "</td>";
            html +="<td>" + arr[i].age+ "</td>";
            html +="<td>" + `<button type="button" class="btn btn-danger" onclick='deleteData(${arr[i].id})'>Detele</button>`+ "</td>";
            html+="</tr>";
        }
        html +="</table>";
        document.getElementById("table").innerHTML = html
    },200);
    
}
displayTable();

function addonclick(){
    var nameInput = document.getElementById('name').value;
    var professionInput = document.getElementById('profession').value;
    var ageInput = document.getElementById('age').value;
   
    if(nameInput && professionInput && ageInput){
        let id =arr.length +1;
        arr.push({name:nameInput, profession:professionInput, age:ageInput, id:id})
        document.getElementById("success").innerHTML = "Employee added successfully";
        document.getElementById("error").innerHTML = "";
        displayTable();
        clearData();
    }
    else if(nameInput === "" || professionInput === "" || ageInput === "") {
        document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("success").innerHTML = "";
      } 
    }


function clearData(){
    document.getElementById('name').value=""
    document.getElementById('profession').value=""
    document.getElementById('age').value=""
}

function deleteData(rec){
    var dlte =  arr.filter((a,i)=>{
        if(rec ==a.id){
            arr.splice(i,1);
            displayTable();
        }
    })
}