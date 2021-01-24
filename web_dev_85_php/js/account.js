getAccounts()

function getAccounts() {
    $.ajax({
        url: 'api/get.php'
    }).done(function(data) {
        data = JSON.parse(data)
        showAccounts(data.accounts)
    })
}



function showAccounts(accounts) {
    let output = `
    <table border="1">
        <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Detail</th>
            <th>Edit</th>
        </tr>
    `

    for (let account of accounts) {
        output += `
            <tr>
                <td>${account.id}</td>
                <td>${account.name}</td>
                <td>${account.email}</td>
                <td><button onclick="deleteAccount(${account.id})">Delete</button></td>
                <td><a href= "edit.php?id=${account.id}">Edit</a></td>
                <td><a href= "detail.php?id=${account.id}">Detail</a></td>
            </tr>
        `
    }

    output += `</table>`

    $('.accountOutput').html(output)
}

function deleteAccount(id) {
    $.ajax({
        url: `api/delete.php?id=${id}`
    }).done(function(data) {
        getAccounts()
    })
}

function addAccount(e) {
    e.preventDefault()

    let name = $('#newName').val()
    let email = $('#newEmail').val()
    let password = $('#newPassword').val()

    $.ajax({
        url: 'api/post.php',
        method: 'POST',
        data: {
            myName: name,
            myEmail: email,
            myPassword: password
        }
    }).done(function(data) {
        getAccounts()
    })

}

// testParam(2)
// function testParam(m) {
//     m += 2 
//     console.log(m)
//     console.log(Math.pow(m, 4))
// }