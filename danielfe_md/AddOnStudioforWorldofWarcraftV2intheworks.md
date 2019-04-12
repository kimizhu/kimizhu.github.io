<div id="page">

# AddOn Studio for World of Warcraft V2 in the works

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
5/14/2008 3:03:35 PM

-----

<div id="content">

I recently posted a high-level feature specification for version 2.0 of
[AddOn Studio for World of
Warcraft](http://www.codeplex.com/WarcraftAddOnStudio) on the projects
Wiki which you can [check out
here](http://www.codeplex.com/WarcraftAddOnStudio/Wiki/View.aspx?title=SneakPreviewOfVersion2.0&referringTitle=Home).

 

**Note:** If you're new to Warcraft programming or are interested in
getting started, I highly recommend getting [World of Warcraft
Programming: A Guide and Reference for Creating WoW
Addons](http://www.amazon.com/World-Warcraft-Programming-Reference-Creating/dp/0470229810/ref=pd_bbs_sr_1?ie=UTF8&s=books&qid=1210792812&sr=8-1)
([Wiley](http://www.wiley.com/WileyCDA/WileyTitle/productCd-0470229810.html)
Page) my [full 5/5 star review is
here](http://www.amazon.com/review/R9LXBL0RQ5LLW/ref=cm_cr_rdp_perm).

![warcraftprogramming](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/warcraftprogramming_7bf9208d-82b1-44e1-a2a3-12222ee2fa40.jpg)

 

Better yet, [Gabor Ratky](http://rgabostyle.com/) sent me some sneak
peek screenshots of the new features in builds and it's very cool
stuff.  Below is just a quick sampling and is not the full list of
features and the vast majority are based directly on feedback from the
project's [Issue
Tracker](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/List.aspx)
(the full list has been copy/pasted at the bottom of this email).

 

**Import from WowAce repository**

Be able to instantly open and import any of the 600+ [WowAce
AddOns](http://www.wowace.com/wiki/Category:Addons) without having to
manually save files to disc and then build a custom project. The vast
majority of this work is possible because of the reuse of
[AnkhSVN](http://ankhsvn.open.collab.net/).

[![aceimport](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/aceimport_thumb_1.jpg)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/aceimport_4.jpg)

****

**Table of Contents (TOC) File structure support**

v1 of AddOn Studio automagically build the TOC file for you, but in some
cases, this was a bad thing as developers need control of the order of
files in the TOC or what files to include/exclude. Version 2 adds the
ability to easily and graphically modify the TOC file order and
files.

 [![fileeditor](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/fileeditor_thumb.jpg)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/fileeditor_3.jpg)

 

**Dramatically improved support for WYSIWYG**

Version 2.0 makes a big step forward in WYSIWYG support by adding much
deeper support for BLP and Blizzard textures. In fact, one of the key
things the team is doing is testing the built-in Blizzard frames to see
how well they render directly in the designer. While I don't know if
this will ever be perfect, it's remarkable how close it can
get.

[![QuestLogFrame](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/QuestLogFrame_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/QuestLogFrame_2.png)

**Graphical/GUI testing with WowBench**

One of the difficulties in testing AddOns is that you have to fully exit
and reload Warcraft for every single change. This can be both tedious
and time-consuming. [WowBench](http://www.wowwiki.com/WoWBench) is an
open source project that enables you to simulate events in Warcraft,
it's basically a big mock object.  Let's say you want to simulate what
happens when a player changes his target. You can use WowBench to fake
firing the target changed event and see what your code does from there.
The next version of AddOn Studio integrates WowBench directly into the
IDE (instead of via command line) so you can run commands directly
against the world and addon as well. This will be a "must-have" feature
for debugging and testing addons.

**Loading the
world**

 ![wowbench1\_sml](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/wowbench1_sml_19587a91-1f6d-472f-baca-8d7976540572.jpg)  

**Debugging the Outfitter
AddOn**![wowbench2\_sml](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/AddOnStudioforWorldofWarcraf.0intheworks_A976/wowbench2_sml_f5a720e3-ba0d-408e-a529-8177b4d21b71.jpg)

Again all of this is subject to change and there are also several more
features being added in the future.

 

Here's the full list of work items addressed in version 2.0

  - **Work Item**: [Add: Import Existing
    AddOn](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=695)
  - **Work Item**: [Add: Add Subversion check-in/check-out
    Window](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=694)
  - **Work Item**: [Add: Improve the auto-generated TOC
    experience/check-out
    Window](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=696)
  - **Work Item**: [Add designer support for different
    frames](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=678)
  - **Work Item**: [Designer support for texture
    browsing](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=911)
  - **Work Item**: [Add WYSIWYG for different fontstring
    sizes](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=680)
  - **Work Item**: [Designer should not replace
    XML](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=679)
  - **Work Item**: [Renaming Frame.xml file does not rename \<script\>
    tag](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=841)
  - **Work Item**: [AddOn Studio not rendering Blizzard FrameXML
    files](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=707)
  - **Work Item**: [Add GUI for WowBench function
    emulator](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=700)
  - **Work Item**: [Add Immediate Window for lua
    functions](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=702)
  - **Work Item**: [IntelliSense support missing for Lua
    functions](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=684)
  - **Work Item**: [Add IntelliSense support for Wow
    Globals](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=690)
  - **Work Item**: [IntelliSense doesn't show up for locals or custom
    functions](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=686)
  - **Work Item**: [IntelliSense shows local declarations out of their
    scope](http://www.codeplex.com/WarcraftAddOnStudio/WorkItem/View.aspx?WorkItemId=643)

</div>

</div>
