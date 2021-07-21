<%* if (tp.file.title.charAt(0) == "{") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Book")%>
<%* } else if (tp.file.title.charAt(0) == "@") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Person")%>
<%* } else if (tp.file.title.charAt(0) == "!") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Tweet")%>
<%* } else if (tp.file.title.charAt(0) == "%") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Podcast")%>
<%* } else if (tp.file.title.charAt(0) == "+") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Youtube")%>
<%* } else if (tp.file.title.charAt(0) == "(") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Article")%>
<%* } else if (tp.file.title.charAt(0) == "&") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Paper")%>
<%* } else if (tp.file.title.charAt(0) == "=") { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/Thought")%>
<%* } else { %>
<%tp.file.cursor(1)%><%tp.file.include("Templates/Inputs/New")%>
<%* } %>