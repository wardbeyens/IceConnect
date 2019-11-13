function getLocationsFunction() {
    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);

    $.post('https://wabyte.com/getlocaties.php', pars, function (data) {
        console.log(data);
        $('.emptylistGroup').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.locatieID + '<br>' + this.locatiebijnaam + " " + this.locatienaam);
            $("#GetLocations").append(`
            <ons-card>        
                <ons-fab modifier="mini" ripple="true" class="fabgroup" onclick="fn.deleteLocation(` + this.locatieID + `)">
                    <i data-LocatieID="` + this.locatieID + `" class="far fa-trash-alt deleteLocation" id="deleteLocation` + this.locatieID + `"></i>
                </ons-fab> 
                
                <div class="title">
                     <h2 style="font-weight: bold">  ` + this.locatiebijnaam + `</h2>
                </div>

                <div class="content mt-4" id="GetLocationCard` + i + `">
                    <ons-list>
                        <ons-list-item>
                             ` + this.straat + `&emsp;&emsp;` + this.huisnummer + `
                        </ons-list-item>
                        <ons-list-item>
                           ` + this.postcode + `&emsp; &emsp; ` + this.dorp + `
                        </ons-list-item>
                        <ons-list-item>
                             ` + this.land + `
                        </ons-list-item>
                    </ons-list>             
                </div>
            </ons-card>
            `);
        });
    });
}

getLocationsFunction();

window.fn.deleteLocation = function (locatieID) {
    // console.log("u wilt de locatie verwijderen met ID: ", locatieID);
    let locatieIDfromFunction = locatieID.toString();
    let pars = {
        persoonID: persoonID,
        locatieID: locatieIDfromFunction
    };
    console.log(pars);
    console.log("U wilt de locatie verwijderen met persoonID: " + persoonID + " locatieID: " + locatieIDfromFunction);

    $.post('https://wabyte.com/removeLocation.php', pars, function (data) {
        console.log(data);
    })

    document.getElementById('content').load('locations.html');


};
