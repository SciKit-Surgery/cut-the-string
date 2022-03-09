Cut the String
==============

.. image:: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg
   :target: CODE_OF_CONDUCT.md

.. image:: https://img.shields.io/twitter/follow/scikit_surgery?style=social
   :target: https://twitter.com/scikit_surgery?ref_src=twsrc%5Etfw
   :alt: Follow scikit_surgery on twitter

Author: Stephen Thompson


cut-the-string is a browser based game developed to examine some of the challenges encountered in minimally invasive surgery. The game is developed using [Bill Reed's Phaser and webpack tutorial](https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/).

As of now the game is an incomplete prototype, tested on Google Chrome. You may try it out [here](https://scikit-surgery.github.io/cut-the-string/).

cut-the-string is developed with the support of the `Wellcome EPSRC Centre for Interventional and Surgical Sciences`_ as part of the `SciKit-Surgery`_ software project.

Game Mechanics
--------------

The game is inspired by research into endoscopic mosaicking applied to fetal surgery to 
treat [twin to twin transfusion syndrome](https://en.wikipedia.org/wiki/Twin-to-twin_transfusion_syndrome). One treatment for this is to cut the blood vessels that allow the transfer of blood between fetuses. We represent this treatment with a simple string cutting game where the user is required to cut strings using the mouse or touch screen. 

The game progress through levels, progressively introducing more challenges as seen in surgery. Something like:

0. Level 0, only one string.
1. Multiple strings.
2. Strings are moving. 
3. Occlusion and poor lighting
5. Partial visibility, as would be the case for endoscopic treatment.

Finally we introduce mosaicking like in [this paper](https://discovery.ucl.ac.uk/id/eprint/1495954/) to show how our research can address some of these challenges. 



## Using This Project

0. Make a directory somewhere in your file system where you want to keep your project.
1. `cd` into that directory from the command line.
2. Clone this project with `git clone https://github.com/SciKit-Surgery/cut-the-string
3. yarn install
4. yarn run webpack
5. yarn run webpack-dev-server
6. Open up your browser to `http://localhost:8080`.

Because you are running the project through Webpack Dev Server, any time you make a change to your source code, the browser will automatically refresh with your updated code.

Licensing and copyright
-----------------------

Copyright 2022 Stephen Thompson.
cut-the-string is released under the BSD-3 license. Please see the `license file`_ for details.


Acknowledgements
----------------

Supported by `Wellcome`_ and `EPSRC`_.

.. _`Wellcome`: https://wellcome.ac.uk/
.. _`EPSRC`: https://www.epsrc.ac.uk/
.. _`license file`: https://github.com/SciKit-Surgery/what-is-it/blob/master/LICENSE
.. _`SciKit-Surgery`: https://github.com/SciKit-Surgery/
.. _`Wellcome EPSRC Centre for Interventional and Surgical Sciences`: http://www.ucl.ac.uk/weiss

