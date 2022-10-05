Cut the String
==============

.. image:: https://img.shields.io/badge/code_style-standard-brightgreen.svg
   :target: https://standardjs.com

.. image:: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg
   :target: CODE_OF_CONDUCT.md

.. image:: https://img.shields.io/twitter/follow/scikit_surgery?style=social
   :target: https://twitter.com/scikit_surgery?ref_src=twsrc%5Etfw
   :alt: Follow scikit_surgery on twitter

Author: Stephen Thompson


cut-the-string is a browser based game developed to examine some of the challenges encountered in minimally invasive surgery. The game is developed using `Bill Reed's Phaser and webpack tutorial`_

As of now the game is an incomplete prototype, tested on Google Chrome. You may try it out `here`_.

cut-the-string is developed with the support of the `Wellcome EPSRC Centre for Interventional and Surgical Sciences`_ as part of the `SciKit-Surgery`_ software project.

Game Mechanics
--------------

The game is inspired by research into endoscopic mosaicking applied to fetal surgery to 
treat `twin to twin transfusion syndrome`_. One treatment for this is to cut blood vessels within the placenta that allow the transfer of blood between fetuses. cut-the-string represents this treatment with an abstract string cutting game. 

The player is presented with a screen showing a representation of two fetuses sharing a common blood supply. Some strings (or vessels) run from the common supply to a single fetus, some strings link the fetuses directly. The player is required to identify those linking strings and cut them, whilst avoiding strings that supply only one fetus, like in `this video from GIFT-Surg`_.

The game progress through levels. The game mechanics remain the same, with the player being required to identify and cut string, however we progressively introduce more challenges to make it more like surgery. Something like:

0. Level 0, only one string.
1. Multiple strings.
2. Strings are moving.
3. Occlusion.
4. Poor lighting
5. Image noise.
6. Partial visibility, as would be the case for endoscopic treatment.
7. Finally we introduce mosaicking like in `Tella et al. 2016`_ to explore how our research can address some of these challenges. 

Target Audience
---------------

The game mechanics and appearance are intended to be suitable for all age groups. The scientific content is targeted at people interested in treatment for `twin to twin transfusion syndrome`_ or for endoscopic vasculature surgery more generally.


Using This Project
------------------

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
.. _`here`: https://scikit-surgery.github.io/cut-the-string/
.. _`Bill Reed's Phaser and webpack tutorial`: https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/
.. _`twin to twin transfusion syndrome`: https://en.wikipedia.org/wiki/Twin-to-twin_transfusion_syndrome
.. _`Tella et al. 2016`: https://discovery.ucl.ac.uk/id/eprint/1495954/
.. _`this video from GIFT-Surg`: https://youtu.be/XhKJiaZyke0?t=83
