import Phaser from 'phaser'
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JPanel;

export class CutTheString extends Phaser.Scene {
    MyPanel(){
        this.setPreferredSize(new Dimension(500,500));
    }
    public void paint(Graphics g) {
        Graphics2D g2D = (Graphics2D) g;
        g2D.setPaint(Color.blue); // colour of line
        g2D.setStroke(new BasicStroke(5)); //thickeness of line 
        g2D.drawline(0, 0, 500, 500);

        g2D.drawRect(0, 0, 100, 200);
    }
}



