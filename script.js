printList();

function printList() {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
    
        let folkLista = document.getElementById("folkLista");
        folkLista.innerHTML = "";
    
        folkLista.insertAdjacentHTML("beforeend", "<div><h2>Alla personer</h2></div>")
        for (user in data) {
            folkLista.insertAdjacentHTML("beforeend", "<div id='"+data[user].firstName+"'>" + data[user].firstName + " " + data[user].lastName + "</div>")
        }
    
    });
}

document.getElementById("folkLista").addEventListener("click", function(evt) {
console.log("Klick på lista!");
getUser(evt.target.id)
})



function getUser(userName) {
    fetch("http://localhost:3000/users/"+ userName)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    
        let userInfo = document.getElementById("userInfo");

        userInfo.innerHTML = "";

        userInfo.insertAdjacentHTML("beforeend", "<h2>Info om  " + data.lastName + "</h2>")
     
    
    });
}




document.getElementById("saveBtn").addEventListener("click", function(){
    let newUser = {firstName: document.getElementById("firstName").value, lastName: document.getElementById("lastName").value};

    // console.log(newUser);

    fetch("http://localhost:3000/users/new/123456", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        printList();
    });
})