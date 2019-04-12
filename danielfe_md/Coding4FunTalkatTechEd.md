<div id="page">

# Coding4Fun Talk at TechEd

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/11/2008 5:22:42 PM

-----

<div id="content">

At TechEd this year, I gave what can only be described as an overly
ambitious talk given I only had 45 minutes:

**Coding4Fun:** *The Secrets to Programming YouTube, iTunes, Microsoft
Zune, Windows Vista Peer-to-Peer APIs, and Even World of Warcraft*

I say overly ambitious as YouTube, Vista P2P, and Warcraft could easily
have been dedicated 75 minute sessions so covering all of them enough to
be meaningful in 45 minutes was....a challenge. As promised, here's a
quick recap of my slides and code. The full slide [deck can be found
here](http://code.msdn.microsoft.com/Project/Download/FileDownload.aspx?ProjectName=C4FTechEd08&DownloadId=2319),
and thanks everyone for showing up\!

 

### iTunes

  - Demo project shows using the iTunes COM library to play, pause, move
    backwards and forwards through tracks, and how to search your iTunes
    music collection
  - Download: [Code in VB and
    C\#](http://code.msdn.microsoft.com/C4FTechEd08)

[![Slide3](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide3_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide3_1.png)

[![Slide4](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide4_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide4_1.png)

 

### Peer-to-Peer using the Coding4Fun P2P Toolkit

The [Coding4Fun P2P Toolkit](http://www.codeplex.com/C4FP2P) includes
samples that show off sharing images, files, audio, video and of course
chat applications.

Download: Install the
[Toolkit](http://www.codeplex.com/C4FP2P/Release/ProjectReleases.aspx?ReleaseId=8510)
as it includes code samples in VB, C\#, Windows Forms, and
WPF.

 

[![Slide13](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide13_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide13.png)

[![Slide14](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide14_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide14.png)

[![Slide15](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide15_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide15.png)

 

### World of Warcraft

  - The first WOW demo, WriteData, showed how .NET applications can
    share information with a Lua AddOn by updating an AddOns files or
    its saved variables. It effectively uses an AddOn's saved variables
    as a "communication bridge" that a .NET application can read or
    write to. The challenge here is that if you make a change to the
    saved variables, they will not be picked up by Warcraft until you
    reload the UI so it isn't an "instant" communication bridge.
  - The second WOW demo was where I showed AddOn Studio for World of
    Warcraft, which is a sweet (if I may say so myself) example of what
    you can do with the Visual Studio Shell to build a custom IDE for
    \*anything\*, including World of Warcraft. In the demo (you can see
    almost the same demo given at TechEd Europe), I show how to capture
    the PLAYER\_TARGET\_CHANGED and COMBAT\_LOG\_EVENT\_UNFILTERED (the
    new 2.4 combat log) events. If the target changed, the code examines
    the level of the target and changes a Texture based on whether it's
    a lower, same, or higher level than me. For the combat log events,
    If there are multiple kill events within 15 seconds, it'll play some
    Halo audio clips.
  - Download: [AddOn Studio sample
    projects](http://www.codeplex.com/WarcraftAddOnStudio/Wiki/View.aspx?title=SampleProjects)

[![Slide17](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide17_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/Coding4FunTalkatTechEd_74B3/Slide17.png)

 

 

### Resources

  - InnerTube Demo – *Coming Soon\!*
  - iTunes [COM SDK](http://developer.apple.com/sdk/itunescomsdk.html)
    (Library ships with iTunes)
  - Zune DB API (ships with Zune), [tutorial available
    here](http://soapitstop.com/blogs/fleamarket/archive/2008/03/03/read-the-zune-collection-in-net-from-zune-s-own-api.aspx)
  - [ffmpeg](www.ffmpeg.org) - The Swiss army knife of media format
    conversion 
  - [YouTube
    API](http://code.google.com/apis/youtube/developers_guide_protocol.html)
  - Coding4Fun [P2P Toolkit](www.codeplex.com/C4FP2P)
  - [AddOn Studio for World of
    Warcraft](www.codeplex.com/warcraftaddonstudio/)
  - [Halo Game sounds](http://nikon.bungie.org/)
  - [World of Warcraft Programming Book](http://www.wowprogramming.com/)
  - [Channel 9](https://channel9.msdn.com) 
  - Coding4Fun Book – [Coming Soon, Pre-order
    now\!](http://www.amazon.com/Coding4Fun-Projects-NET-Programmers-Developers/dp/0596520743/ref=pd_bbs_sr_1?ie=UTF8&s=books&qid=1213214737&sr=8-1)
  - [Coding4Fun Site](http://blogs.msdn.com/coding4fun)

</div>

</div>
