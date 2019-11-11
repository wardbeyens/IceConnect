function getLocationsFunction() {
    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);

    $.post('http://wabyte.com/getlocaties.php', pars, function (data) {
        console.log(data);
        $('.emptylistGroup').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.locatieID + '<br>' + this.locatiebijnaam + " " + this.locatienaam);
            $("#GetLocations").append(`
            <ons-card>        
                <ons-fab modifier="mini" class="fabgroup deleteLocation" >
                    <i data-LocatieID="` + this.locatieID + `" class="far fa-trash-alt deleteLocation" id="deleteLocation` + this.locatieID + `"></i>
                </ons-fab> 
                
                <div class="title">
                     <h2 style="font-weight: bold"> <!-- <span class="GetLocationsLocatieIDvanCard"> + this.locatieID + "</span>)" --!>  ` + this.locatiebijnaam + `</h2>
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

$('#deleteLocation9').click(function () {

    console.log("U wilt de lodatie verwijderen met persoonID: " + persoonID);
    // console.log(" locatieID: " + $( ".deleteLocation" ).data( "locatieid"));

    /*

    let pars = {
        persoonID: persoonID,
        locatieID: $(".deleteLocation").data("locatieid")
    };
    console.log(pars);
    console.log("U wilt de lodatie verwijderen met persoonID: " + persoonID + " locatieID: " + $(".deleteLocation").data("locatieid"));

    /*    $.post('http://wabyte.com/getlocaties.php', pars, function (data) {
            console.log(data);

        });*/

});


/*
$('.getLocations').click(function () {

    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);

    $.post('http://wabyte.com/getlocaties.php', pars, function (data) {
        console.log(data);
        $('.emptylistGroup').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.locatieID + '<br>' + this.locatiebijnaam + " " + this.locatienaam);
            $("#GetLocations").append(`
            <ons-card>
                <ons-fab modifier="mini" class="fabgroup" >
                        <!--\` + this.groepID + \`-->
                      <i class="fas">` + this.locatieID + `</i>
                </ons-fab> 
                <div class="title">
   
                  <h2 style="font-weight: bold"> <span class="GetLocationsLocatieIDvanCard">` + this.locatieID + "</span>) " + this.locatiebijnaam + `</h2>
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

    /!*    $('.displayvariable').hide();
        $('#map').show();*!/

});*/
