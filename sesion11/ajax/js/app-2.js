document.addEventListener('DOMContentLoaded', function(){
    axios.get('https://reqres.in/api/users?page=1')
    .then(function (dataRes) {
        const tabla = document.getElementById('cuerpoTabla');
        let data =  dataRes.data.data;
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
        tabla.innerHTML = html;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })  
});