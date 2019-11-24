function getGroepenInCard() {
    let pars = {
        persoonID: persoonID,
    };

    console.log("U vraagt nu al alle groepen op");

    $.post('https://wabyte.com/getgroepen.php', function (data) {
        console.log(data);
        $('.emptylistGroup').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.groepnaam + '<br>' + this.locatieID + " " + this.locatiebijnaam);
            $("#GetGroepenCard").append(`
            <ons-card>
<!--                <ons-fab modifier="mini" class="fabgroup" >
                      <i class="fas fa-plus"></i>                 
                </ons-fab> -->
                    <ons-fab modifier="mini" >
                     ` + this.groepID + `
                    </ons-fab>
                <div class="title">
   
                  <h2 style="font-weight: bold">` +
                // "<span class=\"groepIDvanCard\"> " + this.groepID + ".</span> " +
                this.groepnaam + `</h2>
                <!--
                    <ons-fab modifier="mini" >
                     \` + this.locatieID + \`
                    </ons-fab>
                -->
                </div>

                <div class="content mt-4" id="GetGroepenCard` + i + `">
                    <ons-list>
                        <ons-list-header> 
                            <h3>
                            ` + this.locatiebijnaam + `
                            </h3>
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

getGroepenInCard();

var showAddUserToGroupDialog = function () {
    var dialog = document.getElementById('addUserToGroupDialog');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('addUserToGroupDialog.html', {append: true}).then(function (dialog) {
            dialog.show([animation = "slide"]);
        });
    }
};

$('#openaddUserToGroupDialog').click(function () {
    console.log("i want to join a group!")
    showAddUserToGroupDialog();
});

var showAddGroupDialog = function () {
    var dialog = document.getElementById('addGroupDialog');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('addGroupDialog.html', {append: true}).then(function (dialog) {
            dialog.show([animation = "slide"]);
        });
    }
};

$('#openaddGroupDialog').click(function () {
    console.log("i want to add a group!")
    showAddGroupDialog();
});

