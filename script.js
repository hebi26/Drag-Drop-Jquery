$(document).ready(function(){


    $( ".mm" ).draggable();

    var mmens=$(".mm").length;
    var count=0;
    var decount=6;

    $( "#drop" ).droppable({
      drop: function (){
        count++;
        decount--;

        if(decount > 0){
        $("#bla").html('<h3>il reste  '+decount+ ' m&m\'s à rentrer !</h3>');
        }
        else{
        $("#bla").html('<h3>Bravo !</h3><a href="index.html"><button id="bt">Rejouer</button>');
        }

        // if (count == mmens){
        //   alert("Bien joué tout les M&M's sont dans le paquet !!");
        // }

      }
    });

  });
