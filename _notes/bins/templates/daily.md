---
title: <%tp.file.title%>
aliases: <%tp.date.now("YYYY-MM-DD")%>
tags: [journal, daily, timeline]
date created:<%tp.date.now("MMMM DD, YYYY")%>
---

## On This Day...
---

[[<%tp.date.now("MMMM DD, YYYY", -1)%>]] <== <button class="date_button_today">Today</button> ==> [[<%tp.date.now("MMMM DD, YYYY", 1)%>]]

#### Hey Ali, Whats On Your Mind? 


---
## Start-of-Day Reflections

### I am grateful for...
1.
2.
3.

### What would make today great?/goals

1.
2.
3.

### Affirmation
_I am..._

---

## Schedule

*### Meetings*

*### Work blocks*

--- 

## Work Log

---

## Assorted Thoughts

---

## End-of-Day Reflections

### What did I learn?

### What am I working on?

### What am I struggling with?
#### Is there help I can get from others?

---

<%* if (tp.date.now("M-D") == "1-1") { %>
- [ ] Make Yearly Note
<%* } %>
<%* if (tp.date.now("D") == 1) { %>
- [ ] Make Monthly Note
<%* } %>
<%* if (tp.date.now("ddd") == "Sat") { %>
- [ ] Make Weekly Note
<%* } %>
