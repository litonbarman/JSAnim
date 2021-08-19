/* 
___________________________________________________________
  Background particle simulation
  Creater Liton Barman  
___________________________________________________________  
  
  FUNCTION PROTOTYPE
    
  simulation();   
  simulation(back_id, box_height, box_width, box_particle_background_color, box_particle_size, box_particle_mov_size, box_simul_speed, nOparticle); 
  
  DEFINATION
  
  back_id : is the id of the box inside which would like to generate the particles which could be any html tag or body
  box_height : is the height of the above box
  box_width : is the width of above box
  box_particle_background_color : is the color of particle
  box_particle_size : is the size of particle
  box_particle_mov_size : is the amount by which particle will move or vibrate 
  box_simul_speed : speed of simulation in millisecond
  nOparticle : is the number of particle to generate

  box_particle_style : external class, usuasable as a stylesheet class to aditional particle style declaration
  
  HOW TO USE
  
  Method 1:
      For demo simulation
	    a) create a simple html page with body tag id="background"
	    b) include the particle.js like the below code:
		     <script type="text/javascript" src="particle.js"></script>
		   don't forget to use a valid directory in src section, it may be like src="API/particle.js" 
        c) now call the function like below code
             <script type="text/javascript">
			    simulation();
			 </script>
  Method 2:
     For real use
	    a) create a html page
        b) create any box or element with any style you want and set the variables to pass into the simulation() function, refer the DEFINATION section for variable reference		
	    c) include the particle.js like the below code:
		     <script type="text/javascript" src="particle.js"></script>
		   don't forget to use a valid directory in src section, it may be like src="API/particle.js" 
        c) now call the function like below code, with appropriate arguments or parameter
             <script type="text/javascript">
			    simulation(back_id, box_height, box_width, box_particle_background_color, box_particle_size, box_particle_mov_size, box_simul_speed, nOparticle); 
			 </script>
*/
var back_id="background",box_height=730,box_width=1500,box_particle_background_color="#99f",box_particle_size=5,box_particle_mov_size=1,box_simul_speed=200,nOparticle=900;function simulation(back_id="background",box_height=730,box_width=1500,box_particle_background_color="#99f",box_particle_size=5,box_particle_mov_size=1,box_simul_speed=200,nOparticle=900){function create_particle(){var x=document.createElement('div');x.className ="box_particle_style";x.style.background=box_particle_background_color;x.style.height=box_particle_size+"px";x.style.width=box_particle_size+"px";x.style.borderRadius=box_particle_size+"px";x.style.position="absolute";document.getElementById(back_id).appendChild(x);var posX=Math.round(Math.random()*box_width);var posY=Math.round(Math.random()*box_height);setInterval(function(){if(Math.round(Math.random())==1){posX+=box_particle_mov_size;}else{posX-=box_particle_mov_size;}if(Math.round(Math.random())==1){posY+=box_particle_mov_size;}else{posY-=box_particle_mov_size;}x.style.top=posY+"px";x.style.left=posX+"px";},box_simul_speed);}var a;for(a=0;a<nOparticle;a++){create_particle();}}