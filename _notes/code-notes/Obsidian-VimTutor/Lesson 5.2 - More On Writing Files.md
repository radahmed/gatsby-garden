		      Lesson 5.2: MORE ON WRITING FILES

     ** To save the changes made to the text, type  :w FILENAME. **

  1. Type  :!dir  or  :!ls  to get a listing of your directory.
     You already know you must hit `ENTER` after this.

  2. Choose a filename that does not exist yet, such as TEST.

  3. Now type:	 :w TEST   (where TEST is the filename you chose.)

  4. This saves the whole file (the Vim Tutor) under the name TEST.
     To verify this, type    :!dir  or  :!ls   again to see your directory.

NOTE: If you were to exit Vim and start it again with  vim TEST , the file
      would be an exact copy of the tutor when you saved it.

  5. Now remove the file by typing (MS-DOS):    :!del TEST
				or (Unix):	:!rm TEST