		      Lesson 7.2: CREATE A STARTUP SCRIPT

			  ** Enable Vim features **

  Vim has many more features than Vi, but most of them are disabled by
  default.  To start using more features you have to create a "vimrc" file.

  1. Start editing the "vimrc" file.  This depends on your system:
	:e ~/.vimrc		for Unix
	:e $VIM/_vimrc		for MS-Windows

  2. Now read the example "vimrc" file contents:
	:r $VIMRUNTIME/vimrc_example.vim

  3. Write the file with:
	:w

  The next time you start Vim it will use syntax highlighting.
  You can add all your preferred settings to this "vimrc" file.
  For more information type  :help vimrc-intro