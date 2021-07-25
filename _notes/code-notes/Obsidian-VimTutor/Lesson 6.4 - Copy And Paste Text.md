			Lesson 6.4: COPY AND PASTE TEXT

	  ** Use the  y  operator to copy text and  p  to paste it **

  1. Go to the line marked with ---> below and place the cursor after "a)".
  
  2. Start Visual mode with  v  and move the cursor to just before "first".
  
  3. Type  y  to yank (copy) the highlighted text.

  4. Move the cursor to the end of the next line:  j$

  5. Type  p  to put (paste) the text.  Then type:  a second `ESC` .

  6. Use Visual mode to select " item.", yank it with  y , move to the end of
     the next line with  j$  and put the text there with  p .

--->  a) this is the first item.
      b)

  NOTE: you can also use  y  as an operator;  yw  yanks one word.