<div id="page">

# It's all a matter of style

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/24/2003 2:47:00 AM

-----

<div id="content">

Probably one of the most religious issues for developers (at least those
using the same platform and programming language) is bracing style. 
There are several styles available, with the two most popular being K\&R
style & Allman style.  I found this nice description on the different
indent styles [here](http://www.wkonline.com/d/indent_style.html), and
pasted the different indentation styles below:

***'K\&R style'** -- Named after Kernighan & Ritchie, because the
examples  
in K\&R are formatted this way. Also called \`kernel style' because
the  
Unix kernel is written in it, and the \`One True Brace Style' (abbrev.  
1TBS) by its partisans. In C code, the body is typically indented by  
eight spaces (or one tab) per level, as shown here. Four spaces are  
occasionally seen in C, but in C++ and Java four tends to be the rule  
rather than the exception.  
   
if () {    
     
**'Allman style'** -- Named for Eric Allman, a Berkeley hacker who wrote
a  
lot of the BSD utilities in it (it is sometimes called \`BSD style').  
Resembles normal indent style in Pascal and Algol. It is the only
style  
other than K\&R in widespread use among Java programmers. Basic indent
per level shown here is eight spaces, but four (or sometimes three)  
spaces are generally preferred by C++ and Java programmers.  
   
if ()  
{             
   
**'Whitesmiths style'** -- popularized by the examples that came with  
Whitesmiths C, an early commercial C compiler. Basic indent per level  
shown here is eight spaces, but four spaces are occasionally seen.  
   
if ()  
        {              
     
**'GNU style'** -- Used throughout GNU EMACS and the Free Software  
Foundation code, and just about nowhere else. Indents are always four  
spaces per level, with \`{' and \`' halfway between the outer and
inner  
indent levels.  
   
if ()  
  {  
  
*My "religious" preference is definitely Allman style, but from what I
understand authors tend to prefer K\&R so that they don't lose precious
book space when printing source.  The cool thing is that Whidbey lets
you format your code and use whatever indentation style you prefer
(there's 60+ other choices you can make to format your code).  What
style do you use, and are you religious about it?  Say you found a
sample on a web site that used a different bracing style, would you
change the bracing style before running the app? I would, but only if I
were planning on keeping the code...

</div>

</div>
