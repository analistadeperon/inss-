
function calcular() {
  var comissao = (parseFloat($("#valorPorcentagem").val())/100) * parseFloat($("#valor_vendedor").val());
  $("#comissao").val(comissao);
}


/* Adiciono Plano */
var AddTableRow = function(el) {
        var tbody = $(el).closest('table').find('tbody');
        var row = tbody.find('tr:last').clone();
        var name = row.find('.calcular').attr('name');
        var index = parseInt(name.match(/usuarios\[(\d+)\]\[comissao_vendedor\]/)[1], 10) + 1;
        row.find('[name^="usuarios["]').each(function() {
            if (this.name) {
                this.name = this.name.replace(/^usuarios\[\d+\]/, "usuarios[" + index + "]");
            }
        });
        tbody.append(row);
    };
