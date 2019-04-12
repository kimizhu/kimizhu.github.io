<div id="page">

# Handy Tools

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
9/8/2003 2:28:00 AM

-----

<div id="content">

I'm still catching up on blog entries that I've been meaning to post,
here are some of the tools I mentioned in my TechEd New Zealand
sessions.

**FXCop  
**FxCop is a tool that lets you know whether you code conforms to
specific rules like naming guidelines, CLS compliance and much more. 
Just point it to your DLL and you'll get a list of issues with your code
(You can check whether you want to ignore certain errors). Download
[here](http://www.gotdotnet.com/team/fxcop/).

**ASP.NET Version Switcher  
**Have you ever actually tried to run ASP.NET applications that use
different versions of the .NET Framework 1.0, 1.1, *and* Whidbey?  This
is totally possible, but it can be a pain from a configuration
perspective.  The issue is that IIS requires file extensions to be
mapped to a specific ISAPI extension, so to have multiple virtual
directories that use different versions of the framework, you would have
to manually change the file mapping configuration for each virtual
directory. (To do this go to IIS Manager, right click on a Virtual
directory, select configuration... and change the file mappings).  You
can find more information about side-by-side ASP.NET support
on [ASP.NET](http://www.asp.net/faq/SideBySide.aspx).  I mentioned in
my talk Dennis Bauer's (blog
[here](http://www.denisbauer.com/Weblog/)) [ASP.NET Version
Switcher](http://www.denisbauer.com/NETTools/ASPNETVersionSwitcher.aspx)
that can automatically change versions for you. Very cool and easy tool
\[[picture](http://www.denisbauer.com/NETTools/ASPNETVersionSwitcher.jpg)\]. 

**Web Service Studio  
**If you find web services in [uddi.org](http://www.uddi.org),
[xmethods.net](http://www.xmethods.net)
or [SalCentral](http://www.salcentral.com/salnet/webserviceswsdl.asp)
(which calls itself "*The Napster of Web Services"*), you'll find Web
Service Studio to be the easiest way to inspect the service before you
actually start writing code to it. Download it
[here](http://www.gotdotnet.com/Community/UserSamples/Details.aspx?SampleGuid=65a1d4ea-0f7a-41bd-8494-e916ebc4159c).

**CLR Profiler  
**If you want to know how efficiently (or inefficiently) memory is being
used by your application, you need the CLR profiler.  Here's the [link
to download](http://download.microsoft.com/download/a/b/d/abd115c6-a96e-4d8d-b7de-9480deb6cd5c/CLRProfiler.EXE)
it (its difficult to find on MSDN), and you can watch the .NET Show with
Gregor Noriskin who walks through using the
tool [here](http://msdn.microsoft.com/msdntv/episode.aspx?xml=episodes/en/20030729CLRGN/manifest.xml). 

**NetPing and SnippetCompiler**  
Scott Hanselman who always has some awesome tools up his pocket, also
recently mentioned two tools by Jeff Key (blog
[here](http://weblogs.asp.net/Jkey/))
[NetPing](http://www.sliver.com/dotnet/netping/) and [SnippetCompiler](http://www.sliver.com/dotnet/SnippetCompiler/). 
I haven't tried the SnippetCompiler (yet) but NetPing is sweet
\[[picture](http://www.sliver.com/dotnet/netping/netping.PNG)\].

</div>

</div>
