let fleetData =[];
let filteredData =[];
document.getElementById('fleetForm').addEventListener('submit',function(e){
    e.preventDefault();
    const regno=document.getElementById('regNo').value.trim();
    const category = document.getElementById('category').value;
    const driverName = document.getElementById('driverName').value.trim();
    const isAvailable= document.getElementById("isAvailable").value;
    if(!regNo || !category || !driverName){
        alert('please fill all required fields');
        return;
    }
}
)