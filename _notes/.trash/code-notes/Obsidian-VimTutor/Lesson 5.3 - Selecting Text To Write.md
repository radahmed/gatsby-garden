> OBSIDIAN NOTE: Even thought you can't do Steps 3 through 5. This is worth reading and trying Step 1 and 2. Also read the "NOTE" at the end of this file.

		    Lesson 5.3: SELECTING TEXT TO WRITE

	** To save part of the file, type  v  motion  :w FILENAME **

  1. Move the cursor to this line.

  2. Press  v  and move the cursor to the fifth item below.  Notice that the text is highlighted.

  3. Press the  :  character.  At the bottom of the screen  :'<,'> will appear.

  4. Type  w TEST  , where TEST is a filename that does not exist yet.  Verify
     that you see  :'<,'>w TEST  before you press `ENTER`.

  5. Vim will write the selected lines to the file TEST.  Use  :!dir  or  :!ls
     to see it.  Do not remove it yet!  We will use it in the next lesson.

NOTE:  Pressing  v  starts Visual selection.  You can move the cursor around to make the selection bigger or smaller.  Then you can use an operator to do something with the text.  For example,  d  deletes the text.