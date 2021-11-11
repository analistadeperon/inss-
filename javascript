function calcular(calcInss){

      var vencimentos = document.calcInss.vencimentos.value; 

        if (vencimentos &lt;= 1693.72){
   
          var desconto = parseFloat(8 * vencimentos) /100;
   
      }else{
        if(vencimentos &lt;= 2822.91){
          var desconto = parseFloat(9 * vencimentos) /100;

      }else{
        if(vencimentos &lt;= 5645.80){
          var desconto = parseFloat(11 * vencimentos) /100;
      }
      else{
        if(vencimentos &gt; 5645.80){
          var desconto = 621.04;
          }
      }
      }
    }


    document.calcInss.desconto.value = "R$ " + desconto;
   
  }
        
      
