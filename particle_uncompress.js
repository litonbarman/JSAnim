/* 
___________________________________________________________
  Background particle simulation
  Creater Liton Barman  
___________________________________________________________  
     
  simulation(back_id, box_height, box_width, box_particle_background_color, box_particle_size, box_particle_mov_size, box_simul_speed, nOparticle) 

*/
var back_id="background", box_height = 730, box_width = 1500, box_particle_background_color = "#99f", box_particle_size = 5, box_particle_mov_size=1, box_simul_speed=200, nOparticle =900;

function simulation(back_id="background" ,box_height = 730, box_width = 1500, box_particle_background_color = "#99f", box_particle_size = 5, box_particle_mov_size=1, box_simul_speed=200, nOparticle =900){
  function create_particle(){
    var x = document.createElement('div');
	x.className ="box_particle_style";
    x.style.background = box_particle_background_color;
    x.style.height = box_particle_size+"px";
    x.style.width = box_particle_size+"px";
    x.style.borderRadius = box_particle_size+"px";
    x.style.position = "absolute";
	
    document.getElementById(back_id).appendChild(x);

    var posX =Math.round(Math.random()*box_width);
    var posY =Math.round(Math.random()*box_height);

    setInterval(
    function(){
      if(Math.round(Math.random())==1){
        posX+= box_particle_mov_size;
      }
      else{posX-=box_particle_mov_size;}
      if(Math.round(Math.random())==1){
        posY+=box_particle_mov_size;
      }
      else{posY-=box_particle_mov_size;}
      x.style.top =  posY+"px";
      x.style.left =  posX+"px";
    }
    ,box_simul_speed);
  }

var a;
for(a=0; a<nOparticle; a++){
 create_particle();
}
}