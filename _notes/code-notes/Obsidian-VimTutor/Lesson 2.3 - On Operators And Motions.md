		     Lesson 2.3: ON OPERATORS AND MOTIONS

  Many commands that change text are made from an operator and a motion.
  The format for a delete command with the  d  delete operator is as follows:

  	d   motion

  Where:
    d      - is the delete operator.
    motion - is what the operator will operate on (listed below).

  A short list of motions:
    w - until the start of the next word, EXCLUDING its first character.
    e - to the end of the current word, INCLUDING the last character.
    $ - to the end of the line, INCLUDING the last character.

  Thus typing  de  will delete from the cursor to the end of the word.

NOTE:  Pressing just the motion while in Normal mode without an operator will move the cursor as specified.