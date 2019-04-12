<div id="page">

# Framework vs Tool

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
1/7/2005 9:24:00 AM

-----

<div id="content">

This handy [Channel9
post](https://channel9.msdn.com/ShowPost.aspx?PostID=28939#28939) shows
how you can create XML Web services using [Visual C\# 2005 Express
Edition
Beta 1](http://go.microsoft.com/fwlink/?LinkId=31769&clcid=0x409). I
have gotten questions like this and I wanted to explain the difference
between Framework support and tool support.

C\# Express ***has full access*** to the .NET Framework. What that means
is that you can create XML Web services using C\# Express, you can can
use ClickOnce deployment, and you can even access remote data from your
favorite database. C\# Express ***does not have full tools*** support
for each of those things.

  - For Web services, it means you'll be able to write the code for your
    Web service using C\# Express, but to run it you'll need IIS and
    you'll have to register your virtual directory manually. (Note: You
    should really be using [Visual Web Developer 2005
    Express](http://go.microsoft.com/fwlink/?LinkId=31772&clcid=0x409) for
    Web development as it has a built-in lightweight Web server). You
    don't get IDE support for Web projects in C\# Express.
  - For ClickOnce, at least for Beta 1 (Note: We've added ClickOnce
    deployment to Express for Beta 2), you'll have to manually create
    XML manifest files, strong names, and all the goo that the IDE does
    for you automatically. You don't, at least for Beta 1, get IDE
    support for ClickOnce.
  - For data, it means your data access code will be manual ADO.NET code
    as opposed to drag/drop data from the Server Explorer. You don't get
    IDE support for remote data.

Coding to a framework is coding to a framework. Assuming you include the
right references, you can do anything the framework can do. This is true
for C\# Express or that other beloved developer tool, Visual Notepad.

\[**STOP:** \*pure\* speculation and personal opinion - read my
[Disclaimer](http://blogs.msdn.com/danielfe/articles/106589.aspx) \]

If the Team System team were to release the Unit Testing Framework say
on MSDN, then you would be able to create unit tests using Visual C\#
Express. That's a big "if", but if it happened, I think it would make a
lot of people happy who can't necessarily afford VSTS but who want unit
testing from Microsoft. You obviously wouldn't get tools support, but
you could still write and run unit tests. You can of course always use
any of the freely available unit testing Frameworks like
[nUnit](http://www.nunit.org/) and others.

</div>

</div>
