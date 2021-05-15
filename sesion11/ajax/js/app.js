$(document).ready(function(){
    $.ajax({
        type: "GET", // GET POST PUT DELETE
        url: "https://reqres.in/api/users?page=1",
        dataType: "JSON"
    })
    .done(function(dataRes){
        let data =  dataRes.data;
        let html = ``; // alt + 96
        data.forEach(item => {
            html += `<tr>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td><figure><img src="${item.avatar}"></figure></td>
            </tr>`
        });
        $('#cuerpoTabla').append(html);
    })
    .fail(function(){
        console.log('Ha sucedido un error, lo sentimos!')
    })
}); 