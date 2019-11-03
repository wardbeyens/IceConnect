function getGroepenInCard(){
    let pars = {
        persoonID: persoonID,
    };

    console.log("U vraagt nu al alle groepen op");

    $.post('http://wabyte.com/getgroepen.php', function (data) {
        console.log(data);
        $('.emptylistGroup').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.groepnaam + '<br>' + this.locatieID + " " + this.locatiebijnaam);
            /*            $("#GetGroepenTabellen").append('<table style="width: 100%" id=' + i + '>');
                        $("#GetGroepenTabellen").append('<tr>');
                        $("#GetGroepenTabellen").append('<th>' + this.groepnaam + '</th>');
                        $("#GetGroepenTabellen").append('</tr>');
                        $("#GetGroepenTabellen").append('<tr>');
                        $("#GetGroepenTabellen").append('<td>' + 'GroepID: ' + this.groepID + '</td>');
                        $("#GetGroepenTabellen").append('</tr>');
                        $("#GetGroepenTabellen").append('<tr>');
                        $("#GetGroepenTabellen").append('<td>' + 'samenkomen in: ' + this.locatiebijnaam + '</td>');
                        $("#GetGroepenTabellen").append('</tr>');
                        $("#GetGroepenTabellen").append('<tr>');
                        $("#GetGroepenTabellen").append('<td>' + 'adres: ' + this.locatienaam + '</td>');
                        $("#GetGroepenTabellen").append('</tr>');*/
            $("#GetGroepenCard").append(`
            <ons-card>
                <ons-fab modifier="mini" class="fabgroup" >
                        <!--\` + this.groepID + \`-->
<!--                      <i class="fas fa-plus addUserToGroup"></i>-->
                      <i class="fas fa-plus"></i>                 
                </ons-fab> 
                <div class="title">
   
                  <h2 style="font-weight: bold">` + this.groepnaam + `</h2>
                <!--
                    <ons-fab modifier="mini" >
                     \` + this.locatieID + \`
                    </ons-fab>
                -->
                </div>

                <div class="content mt-4" id="GetGroepenCard` + i + `">
                    <ons-list>
                        <ons-list-header>
                            ` + this.locatiebijnaam + `
                        </ons-list-header>
                        <ons-list-item>
                             ` + this.straat + `&emsp;&emsp;` + this.huisnummer + `
                        </ons-list-item>
                        <ons-list-item>
                           ` + this.postcode + `&emsp; &emsp; ` + this.dorp + `
                        </ons-list-item>
                        <ons-list-item>
                             ` + this.land + `
                        </ons-list-item>
                        <!--<ons-fab modifier="mini" class="addUserToGroupInCard">
                            <i class="fas fa-user-plus"></i>                 
                        </ons-fab>-->
                    </ons-list>             
                </div>
            </ons-card>
            `);
        });
    });
};

getGroepenInCard()

