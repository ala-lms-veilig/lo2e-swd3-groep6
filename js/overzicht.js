function showTab(tabName) {
    $('section').hide();
    $('.' + tabName).show();
}

function filterTabel() {
    const input = $('#searchFilter').val().toLowerCase(); 
    $('#aanwezigheidstabel tbody tr').filter(function() {
        $(this).toggle(
            $(this).text().toLowerCase().indexOf(input) > -1
        );
    });
}

function updateAanwezigheid() {
    $.getJSON("json/overzicht.json", function(aanwezigen) {
        const aantalAanwezigen = aanwezigen.length;
        $('#aantalAanwezigen').text(aantalAanwezigen);

        $('#aanwezigheidstabel tbody').empty();

        aanwezigen.forEach(function(collega) {
            const row = `<tr>
                <td>${collega.naam}</td>
                <td>${collega.rol}</td>
                <td>${collega.tijd}</td>
                <td>${collega.lokaal}</td>
            </tr>`;
            $('#aanwezigheidstabel tbody').append(row);
        });

        filterTabel();
    });
}

$(document).ready(function() {
    $('section').hide();
    $('.home').show();
    updateAanwezigheid(); 
});