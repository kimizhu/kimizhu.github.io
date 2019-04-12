<div id="page">

# Most complex data structure ever?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
1/27/2005 8:57:00 AM

-----

<div id="content">

**Reader Question**: What's the most complex data structure you've ever
run into or had to program against?

My personal one was the "[Mortgage Industry Standards Maintenance
Organization](http://www.mismo.org)" (you can download it if you're
bored) which is a monster DTD that includes just about everything a real
estate/mortgage or financial company could want.  In any case, creating
"fake" data \[for a customer prototype using BizTalk\] for this thing
was tough, and showing how each different partner organization could use
part of this data in their application as part of an orchestrated
process was tougher.

Here's another one (although I haven't written code for this), the
Visual Studio 2005 has a way to export your IDE settings into a
\*.vssettings file. So I did this with C\# Express and I got a nice 400K
size text file. Ouch\! To be fair, most of the size appears to be Base64
encoded data which bloats the file size quite a bit.

**Back to the question:** What's the most complex data structure you've
ever run into or had to program against?

</div>

</div>
