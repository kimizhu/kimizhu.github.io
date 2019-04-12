<div id="page">

# Response: Visual Studio should be part of Windows

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
8/10/2006 6:18:00 PM

-----

<div id="content">

Jeroen van den Bos somewhat recently penned a blog post where he made
the case for adding [Visual Studio into
Windows](http://jvdb.org/blog/2006/06/23/why-visual-studio-should-be-part-of-windows/). 
In it, he reflects on the old days:

> *Starting up your C64 would show you a prompt that would allow you to
> start typing in the first lines of your next program straight away.
> And it was easy to get started: the standard Commodore manual that
> came with the computer explained the BASIC syntax, complete with
> examples of how to program with sprites. And if you bought a typical
> C64 magazine it would always come with a bunch of listings that you
> could type in to get some cool working program. Just having to type it
> in confronted you with the concepts of programming.*

As well as the problem with discoverability:

> *My only worry is that a lot of potential will stay untapped because
> it’s getting less and less likely that kids find out how easy it is to
> get into this world. Yesterday I had to tell a co-worker (who’s a
> great programmer) that he could download an Express Edition of Visual
> Studio and use it at home for free. If he didn’t come across it, how
> can we expect more casual computer users and kids to find it?*

To Jeroen's credit, the biggest blocker for Express adoption is
awareness and beginner-level content.  If a programmer in the industry
doesn't know about a product offering, how is Joe or Jane Coder? I'll
need to dedicate a blog post to getting ideas for how to raise awareness
some other day, but let me at least respond to Jeroen's idea. The short
answer is that yes we have thought about it and, at least for Vista,
we're not doing it in the operating system for just some of the reasons
listed below:

  - 
    
    <div>
    
    **Legal**: No really, this was an issue. I'm not going into details,
    but this is a "deal-breaker" if you will.
    
    </div>

  - 
    
    <div>
    
    **Setup**: Dropping bits on a CD is an easy task, but creating a way
    to service those bits (and every piece of the Windows OS is
    serviceable) is not straightforward. Without getting into the weeds
    of why this is, the short answer is that Windows have a wholly
    different setup (and therefore servicing model) than
    Visual Studio does. Servicing would basically be \*way\* too much
    work for the benefit. If, however, the setup/installer technologies
    were unified, this would be much easier.   
    
    </div>

  - 
    
    <div>
    
    **Vista Bar**: To ensure quality, Vista has a number of criteria
    that need to be met and meeting this bar could add a huge amount of
    work that the dev team didn't have schedule for.
    
    </div>

  - 
    
    <div>
    
    **Localization**: A minor one to consider, but Visual Studio Express
    is only localized in 9 languages while Windows is in some [80+
    languages or dialects](http://support.microsoft.com/kb/292246/). Our
    default answer here is to provide the English language when no
    localized version is available so this isn't a showstopper
    
    </div>

  - 
    
    <div>
    
    **Versions**: There are five different versions of Visual Studio
    Express. Do we include all? Who's our customer? Which version are
    they most likely to use? Do we include Web tools? Which version of
    Vista does it make sense to integrate in (we only went for
    Ultimate).
    
    </div>

**Good, Better, Best  
**Given the whole slew of issues, we considered alternatives. The "good
enough" alternative is to have customers just go to MSDN to download
Express. It's not hard and millions are actually doing it today. Second,
Vista does include VB and C\# compilers so if you wanted to go old
school, you could use Notepad and vbc/csc to compile in much the same
way you could circa 1980's which is basically responding to folks who
want the "You Did it in DOS with Basic" point.

A better solution was rather than adding the Express products natively,
we could just add items in the Start\>\>Programs\>\> menu that would
link directly to MSDN and start installing on your first run. The
thinking here would be that it's easy to do and whenever we ship Visual
Studio Express "Orcas", we can update the link to get the latest version
so customers would have more dynamic software.  Another solution that is
possible and we are pursuing is inclusion by OEM (Original Equipment
Manufacturers) like Dell, HP, Compaq, etc.  The OEM channel gets past
all of the issues outlined above and you could see a company like Dell
could including VS Express in their high-end gaming rigs with some cool
custom game-modder content (ex: *Get the Dell XPS M170 with custom
Unreal Tournament Modder content\!*). Gamers get value in that they want
a screaming fast dev box and we would provide free tutorials, videos,
etc to get started developing or modding games.

The best solution of course is to just have this in the operating
system, but as the comments in your post show, there are many folks who
do not want cruft in their operating system. No promises, but we're of
course hoping to get developer tools in as many places as possible.

 

</div>

</div>
