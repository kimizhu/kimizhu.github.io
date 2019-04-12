<div id="page">

# .NET Framework Source Code Libraries now available

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
10/3/2007 12:33:00 PM

-----

<div id="content">

Check out Scott Guthrie's blog post for [information and
screenshots](http://weblogs.asp.net/scottgu/archive/2007/10/03/releasing-the-source-code-for-the-net-framework-libraries.aspx).
 

Yes, you'll have to sign a license for it ([reference
license](http://www.microsoft.com/resources/sharedsource/licensingbasics/referencelicense.mspx)),
but this is huge and a big request from customers to be able to step
into actual .NET/BCL code. Currently available is Windows Forms, Windows
Presentation Foundation, Base Class Libraries (BCL), and more coming
soon (ex: LINQ).

BIG KUDOS to [Shawn Burke](http://blogs.msdn.com/sburke/) for driving
this, getting executive support and making it happen and on such a huge
scale. This all started back in 2004 with Kit George, [Brad
Abrams](http://blogs.msdn.com/brada/), (and me) wanted to release the
PDB (debugging files) for the BCL, and we did end up doing a private
drop to MVPs, but due to resources, it never got off the ground. Shawn
not only resurrected the effort, but he also got more parts of the .NET
Framework added and he also solved the bigger issue which was the
implementation.

**Implementation**: The way this works is using the symbol server, a
built-in feature of Visual Studio 2005 that enables you to effectively
point where the source code is for the .NET Framework. The real value
here is that instead of releasing a ton of downloadable versions (.NET
Framework x64 SP1 with GDR 123 attached), the Symbol server will
"automagically" know what framework/SP/GDR you're running and show you
the appropriate code.This means you don't have to worry about not having
the right PDB files setup or if you have the latest refresh as it's all
taken care of you and you get full debugging support.

This is just awesome\!

</div>

</div>
