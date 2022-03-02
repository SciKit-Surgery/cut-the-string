# Cut the String

This is a web based game developed to examine some of the challenges encountered in minimally invasive surgery. The game is developed using [Bill Reed's Phaser and webpack tutorial](https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/).

As of now the game is an incomplete prototype, tested on Google Chrome. You may try it out [here](https://scikit-surgery.github.io/cut-the-string/).

## Game Mechanics

The game is inspired by research into endoscopic mosaicking applied to fetal surgery to 
treat [twin to twin transfusion syndrome](https://en.wikipedia.org/wiki/Twin-to-twin_transfusion_syndrome). One treatment for this is to cut the blood vessels that allow the transfer of blood between fetuses. We represent this treatment with a simple string cutting game where the user is required to cut strings using the mouse or touch screen. 

The game progress through levels, progressively introducing more challenges as seen in surgery. Something like:

1. Level 0, only one string.
1. Multiple strings.
1. Strings are moving. 
1. Occlusion and poor lighting
1. Partial visibility, as would be the case for endoscopic treatment.

Finally we introduce mosaicking like in [this paper](https://discovery.ucl.ac.uk/id/eprint/1495954/) to show how our research can address some of these challenges. 

## Using This Project

1. Make a directory somewhere in your file system where you want to keep your project.
1. `cd` into that directory from the command line.
1. Clone this project with `git clone https://github.com/SciKit-Surgery/cut-the-string
1. yarn install
1. yarn run webpack
1. yarn run webpack-dev-server
1. Open up your browser to `http://localhost:8080`.

Because you are running the project through Webpack Dev Server, any time you make a change to your source code, the browser will automatically refresh with your updated code.
