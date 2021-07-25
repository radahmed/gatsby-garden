			    Lesson 6.5: SET OPTION

	  ** Set an option so a search or substitute ignores case **

  1. Search for 'ignore' by entering:   /ignore  `ENTER`
     Repeat several times by pressing  n .

  2. Set the 'ic' (Ignore case) option by entering:   :set ic

  3. Now search for 'ignore' again by pressing  n
     Notice that Ignore and IGNORE are now also found.

  4. Set the 'hlsearch' and 'incsearch' options:  :set hls is

  5. Now type the search command again and see what happens:  /ignore `ENTER`

  6. To disable ignoring case enter:  :set noic

NOTE:  To remove the highlighting of matches enter:   :nohlsearch 
NOTE:  If you want to ignore case for just one search command, use  \c
       in the phrase:  /ignore\c  `ENTER`