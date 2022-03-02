export class CutTheString extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.rope;
        this.count = 0;
    }

    preload ()
    {
        this.load.image('bg', 'assets/background-grave.png');
        this.load.image('snake', 'assets/pipe1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
	//(x.pos, y.pos, name, what?(texture frame), number_of_points) 
	//the length of the rope is controlled by the image, i.e snake
	
	//this is the rope we want to cut, can we set the points first
	this.base_target_points = [];
	this.target_points = [];
	for (let i = 0; i < 32; i++)
	{
		this.base_target_points.push(new Phaser.Math.Vector2(i * 800/31, 300));
	}
	this.target_points = this.base_target_points;
	console.log(this.target_points);
        this.target_rope = this.add.rope(0, 0, 'snake', null, this.target_points);

        //  By providing 2 values to the `setAlphas` function
        //  we can set the alpha across the whole Rope from top to bottom:
        this.target_rope.setAlphas(1, 0.9);

	//some stuff for drawing
	this.lineGraphics = this.add.graphics();
	this.input.on("pointerdown", this.startDrawing, this);
        this.input.on("pointerup", this.stopDrawing, this);
        this.input.on("pointermove", this.keepDrawing, this);
        this.isDrawing = false
    }

    startDrawing(){
        this.isDrawing = true;
    }
    keepDrawing(pointer){
        if(this.isDrawing){
            this.lineGraphics.clear();
            this.lineGraphics.lineStyle(1, 0x00ff00);
            this.lineGraphics.moveTo(pointer.downX, pointer.downY);
            this.lineGraphics.lineTo(pointer.x, pointer.y);
            this.lineGraphics.strokePath();
        }
    }
    
    stopDrawing(pointer){
	//this.lineGraphics.clear();
        this.isDrawing = false;
    }
    update ()
    {
        this.count += 0.1;

        //let points = this.target_rope.points;

        for (let i = 0; i < this.target_points.length; i++)
        {
		//we don't want to update until all the points are drawn
            this.target_points[i].y = this.base_target_points[i].y +  Math.sin(i * 0.15 + this.count) * 0.5;
        }
	//without setDirty the rope doesn't move
        this.target_rope.setDirty();
    }

    
}
