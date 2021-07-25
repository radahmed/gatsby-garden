			     Lesson 7.3: COMPLETION

	      ** Command line completion with CTRL-D and <TAB> **

  1. Make sure Vim is not in compatible mode:  :set nocp

  2. Look what files exist in the directory:  :!ls   or  :!dir

  3. Type the start of a command:  :e

  4. Press  CTRL-D  and Vim will show a list of commands that start with "e".

  5. Press `<TAB>`  and Vim will complete the command name to ":edit".

  6. Now add a space and the start of an existing file name:  :edit FIL

  7. Press `<TAB>`.  Vim will complete the name (if it is unique).

NOTE:  Completion works for many commands.  Just try pressing CTRL-D and
       `<TAB>`.  It is especially useful for  :help .