let search_btn = document.getElementById("search_btn")
let input_form = document.getElementById("input_form")
let input_season = document.getElementById("input_season")
let input_round = document.getElementById("input_round")
let list = document.getElementById("list")

search_btn.addEventListener("click", function () {
 


    event.preventDefault()
    const api_url = `https://ergast.com/api/f1/${input_season.value}/${input_round.value}/driverStandings.json`;
    console.log(api_url)

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            let head =
                `<th scope="col">POS.</th>
            <th scope="col">Name</th>
            <th scope="col">Nationality</th>
            <th scope="col">Sponsor</th>
            <th scope="col">Points</th>`;

            document.getElementById("table_head").innerHTML = head;

            let tab = ``

            for (let r of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
                tab += `<tr>
                <td>${r.position}</td>
                <td>${r.Driver.givenName} ${r.Driver.familyName}</td>
                <td>${r.Driver.nationality}</td>
                <td>${r.Constructors[0].name}</td>
                <td>${r.points}</td>
                </tr>`
            }
            document.getElementById("racers").innerHTML = tab;
        }
    }
    xhr.open('GET', api_url)
    xhr.send()

})



