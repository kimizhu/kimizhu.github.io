<div id="page">

# TechEd Monday - Thursday

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/10/2003 3:45:00 AM

-----

<div id="content">

**Confessional:** Please forgive me, it's been about a week since my
last blog, but I haven't had any free time.

Dallas was exhausting, but all the locals were great and really made the
trip worth it. I met so many great people in such a short amount of
time\!

**Monday**

Thank you to everyone who attended my C\# Past, Present, and Future talk
on Monday.  If you did attend my C\#, Past, Present, & Future talk for
academia  on Sunday or the same session on Monday, here are some links
you might be interested
    in:

  - [SSCLI](http://www.microsoft.com/downloads/details.aspx?FamilyId=3A1C93FA-7462-47D0-8E56-8DD34C6292F0&displaylang=en)
    ("Rotor")
  - [SSCLI Community](http://www.sscli.net) web site
  - [Gyro](http://research.microsoft.com/projects/clrgen/) (Generics on
    SSCLI)
  - [Gyro Community](http://gyro.sscli.net/) web site
  - [C\#ide](http://csharp-ide.sscli.net/) (Pronounced Seaside)
  - [DrC\#](http://sourceforge.net/projects/drcsharp/) (Dr. CSharp,
    which I found out about through
    [Morris](http://blogs.gotdotnet.com/morriss))
  - [O'Reilly Network walkthrough of
    Rotor](http://www.ondotnet.com/pub/a/dotnet/2002/07/22/rotor.html)
  - [SSCLI Essentials book](http://www.oreilly.com/catalog/sscliess/)
  - [Peter Drayton discusses extending the
    SSCLI](http://research.microsoft.com/collaboration/university/europe/events/dotnetcc/Version2/Extending_the_SSCLI.ppt)

I'm looking to post both the slides and the demos once I get a team site
setup on GotDotNet. 

The [TechEdBloggers](http://www.techedbloggers.net) meeting was on
Monday night and I think it went really well so big thanks to
[Drew](http://www.drewby.net). You can find more recaps on
[TechEdBloggers](http://www.techedbloggers.net) or
[Brian's](http://blogs.gotdotnet.com/briankel/PermaLink.aspx/b8404466-ba2c-4558-b674-e3979f9cc728)
(B1's) Blog.

**Tuesday**

I met with MikeH who I used to work with while in DC.  He's done a lot
of neat stuff using Active Directory, Exchange and .NET, but he also had
some valid complaints about not being able to find .NET samples on the
web for this stuff.  For those of you interested, there are some nice
add-ins to the Server Explorer like the [AD
add-in](http://www.microsoft.com/downloads/details.aspx?FamilyId=C82D7AB5-40A5-4DD4-9595-53A79FF2C5BC&displaylang=en)
(seems to only work with VS 7.0), [WMI
extensions](http://www.microsoft.com/downloads/details.aspx?familyid=62d91a63-1253-4ea6-8599-68fb3ef77de1&displaylang=en),
and the [Web Services Toolkit for
Exchange](http://www.microsoft.com/exchange/techinfo/development/2000/enablekit.asp).
[Harry also
blogged](http://www.devhawk.net/Default.aspx?date=6%2f2%2f2003) on some
newly announced VS.NET Power Toys. If you're interested in using AD for
applications, make sure you check out [AD Application
Mode](http://www.microsoft.com/windowsserver2003/adam/default.mspx)
(pronounced Adam).

**Wednesday**

After working all night on demos, my Middle Tier apps with C\#
presentation went well, again thank all of you who attended\!  The bad
part was that my web service security demo proved too secure to work in
front of the crowd.  Luckily, I was able to draw parallels between why
people watch Nascar and technical presentations...it's all about the
crashes.  The reason my demo didn't work, or didn't work without a
network connection, is that it was trying to validate against my
corporate domain, which it did successfully in my hotel room when
connected to the network, but failed in front of my now most intimate
acquaintances:).  I've received a lot of great feedback on my demos and
I promise to upload them soon to my team page, once I get it setup on
GDN.  I'll also probably post a blog entry that walks through the code
for those interested.  
*\<aside\>*I'm also looking to create a simple P2P remoting application
that shares images in a specific directory Napster-style between users
and adds those images to a screensaver.  I'll get to it in  my "free"
time. *\<aside\>*

Wednesday night we also had a "Hang with the C\# Team" event and while
we didn't have great attendance, there was a lot of really good
conversation points.  These lucky attendees also walked away with C\#
t-shirts and the ever-so-coveted C\# press-on tattoo.

**Thursday**

On Thursday
[EricGu](http://www.gotdotnet.com/team/csharp/team/ericgu/default.aspx)
and I went to go meet with one of our local customers that's doing a lot
of cool stuff with .NET today.  They gave us fantastic feedback into
what's difficult today and how we can make their lives easier. I really
think we can make some great changes in the next couple of revs of VS
that will absolutely change the way developers work.

Thursday evening, EricGu and I had a C\# User Group meeting in Irving,
Texas.  This was another awesome meeting and it's always enlightening to
get about 60 developers with varied backgrounds in a room talking about
programming language design, and what features will make the next killer
application.  We had the user group vote for what they want in the next
release (\#1 release framework source, \#2 Edit & Continue).  What was
interesting was that some of the requests people asked for are currently
available in the .NET Framework or VS.NET (it's almost like we have
clairvoyance).  In case others don't know about these, I'll comment on
some of them here:

  - *Suggestion: Borland has a shortcut key, CTRL+click, that jumps to
    the definition. Add this to VS.NET. * You can Right click on a
    member and select Go To Definition or click F12 to go directly to a
    class definition in VS.NET.
  - *Suggestion: Make remoting work through firewalls*. Remoting can be
    used between firewalls, and while DCOM could, it was quite a pain.
    Simply specify that the formatter will be
    [SOAP](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfSystemRuntimeSerializationFormattersSoap.asp)
    and not binary.
  - *Suggestion: Make working with client events available for Remoting*
    - This is possible, check out Ingo's article on [CAO through
    firewalls](http://www.ingorammer.com/RemotingFAQ/CAOS_INTERNET_FIREWALL.html)
    and this tutorial on working with [remoting
    events](http://www.dotnetjunkies.com/Tutorial/ShowContent.aspx?cg=BFB598D4-0CC8-4392-893D-30252E2B3283&forumid=4262)
    on [DotNetJunkies](http://www.dotnetjunkies.com).

After the user group meeting, (PS to those of you in Dallas, I'm mailing
about 16 shirts for those who didn't get one after the meeting), Eric
and I drove to the attendee party.  This was a lot of fun, but since we
didn't get out of the UG meeting until late, we only had about 1 1/2
hours to frag other attendees at Halo.  I think we stood our own, and
from what I hear, the C\# team is outstanding at Halo.  The attendee
party stopped at midnight, but we were just getting started.  Brian
(B2), me and several other members of our team went to the Velvet Hookah
where I met [Donny Mack](http://dotnetjunkies.com/webLog/donnymack/) and
company and had an amazing time\! This place completely resurrected my
opinion of Dallas nightlife. Read [Donny's
post](http://dotnetjunkies.com/weblog/donnymack/archive/06062003.aspx)
for more details...

By Friday, I was at the WiFi-enabled DFW airport where I had my first
"celebrity" run-in, a TechEd attendee screamed out my name on the tran
to tell me he had been to my session and really enjoyed it, which made a
week's worth of sleep deprivation worth it.

  

</div>

</div>
