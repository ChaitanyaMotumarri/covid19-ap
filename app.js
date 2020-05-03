$('#btn').click(function(){
    $.ajax({
        method:'GET',
        url:'https://api.covid19india.org/v2/state_district_wise.json',
        dataType:'JSON',
        success:function(data){
           let districts=data[6].districtData;
               displayData(districts);
        }
    })
})

let displayData=function(districts){
    $('#count').text(districts.length);
    let tableBody=$('#tbody');
    let tableRow='';
    for(let district of districts){
        tableRow+=`<tr>
                      <td>${district.district}</td>
                      <td>${district.confirmed}</td>
                      <td>${district.active}</td>
                      <td>${district.recovered}</td>
                      <td>${district.deceased}</td>
                    </tr>`
    }
    tableBody.empty().append(tableRow);
}