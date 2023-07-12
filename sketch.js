
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var circulo, bloco2, bloco3, chao;

function setup() {

	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var chao_option = {
		isStatic: true 
	}
	chao = Bodies.rectangle(600,580,1200,2,chao_option);
	World.add(world, chao); 

	
	//criando a física do bloco1
	var circulo_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	//criando a física do bloco2
	var bloco2_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	//criando a física do bloco3, complete a partir da linha 39 igual o bloco2_options porém alterando os números para testar
	var bloco3_options = {
		
	}


	//Selecione o correto para criar o circulo/bola
	//circulo = Bodies.circle(220,10,10,circulo_options);
	//circulo = Bodies.ball(220,10,10,circulo_options);
	//circulo = Bodies.rectangle(220,10,10,circulo_options);
    World.add(world,circulo);
    
	//Selecione o correto para criar o bloco2 com o formato retangular
	//bloco2 = Bodies.retangulo(110,50,10,10,bloco2_options);
    //bloco2 = Bodies.rectangle(110,50,10,10,bloco2_options);
	//bloco2 = Bodies.circle(110,50,10,10,bloco2_options);
    World.add(world,bloco2);
    
	
    bloco3 = Bodies.rectangle(350,50,10,10,bloco3_options);
	//Selecione o correto para adicionar o bloco 3 ao mundo
    //World.add(world,bloco3);
	//World.ADD(world,bloco3);
	//World.add(world,bloc3);


	fill("pink");
    rectMode(CENTER);
    ellipseMode(RADIUS);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	drawSprites();
	Engine.update(engine);

	rect(chao.position.x,chao.position.y,1200);

	//selecione o correto para mostrar o circulo no canvas
	//ellipse(circulo.position.x,circulo.position.y,30);
	//circle(circulo.position.x,circulo.position.y,30);
	//ball(circulo.position.x,circulo.position.y,30);


	//selecione o correto para mostrar o bloco2 no canvas
	//rectangle(bloco2.position.x,bloco2.position.y,50,50)
	//rect(bloco2.position.x,bloco2.position.y,50,50)
	//square(bloco2.position.x,bloco2.position.y,50,50)
  	
	//Selecione o correto para mostrar o bloco3 no canvas
	//polygon(bloco2.position.x,bloco2.position.y,50,50)
	//octagon(bloco2.position.x,bloco2.position.y,50,50)
  	//rect(bloco3.position.x,bloco3.position.y,100,50)

}



