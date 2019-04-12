<div id="page">

# Good Question on WMA support for Windows Forms

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/19/2004 6:19:00 PM

-----

<div id="content">

 J. Daniel Smith in the comments to my last post writes:  
“

*Why doesn't the new Sound control support WMA files? (Yes, I know it's
just a wrapper around the Win32 control...) *

*But still, this "mixed messaging" from Microsoft is a bit annoying at
times: use WMA (and not MP3)...unless you want to embed it in your
application, then you have to use WAV.“*

 

**Response**:

Very good questions, and I have to give a good response to someone with
“Daniel“ in their name:)  You are correct, the sound control does not
support wma files (or MP3 file for that
matter).<span style="mso-spacerun: yes">  </span>

 

Since I don't work on the team that built that control, don't consider
my answer definitive (someone from that team, feel free to chime in
here), but I'll give you my best guess.<span style="mso-spacerun: yes"> 
</span>One of the issues with playing sound files is that you need the
codec that translates bits into music, and each music file type will
have its own.<span style="mso-spacerun: yes">  </span>For example in MP3
files, you must license the codec from the Franhofer institute which
owns the patent for MP3 (also known as Moving Picture Experts Group
Layer-3 Audio), and this codec is currently in Windows Media Player,
*not* in Windows.

 

Aside: For a short view on the history of MP3,
visit <http://www.du.edu/~yuchang/history.htm>

 

For wma files, again Windows Media Player is the application that
contains the codec and not Windows itself. Rather then discuss how great
it would be from a development perspective if you could assume that
Windows OS had better support for great sound codecs built-in, (was
there a lawsuit about us adding more features to Windows?? Nah, everyone
loves us), I'll stop here and tell you how you can solve this issue by
using Windows Media Player:

 

**What do you do if you want to play a WMA file in your Windows
application?**

You can easily play wma files by drag/dropping a Windows Media Player
control onto your application, which will add the ability to play files
just like WMP, and even includes other WMP features like playlist
support.  This is done by adding a reference to the control - right
click on the toolbox, select add items, select the COM tab, and scroll
down to Windows Media Player (for reference it's at:
“C:\\windows\\system32\\wmp.dll“).

 

I've included some links to code samples using WMP, including some by
[**Duncan**](http://blogs.msdn.com/duncanma/) and
[**Eric**](http://blogs.msdn.com/ericgu/).

 

  - 
    
    <div class="MsoNormal" style="MARGIN: 0in 0in 0pt">
    
     Playing with music files
    <http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dncodefun/html/code4fun01242003.asp?_r=1>
    
    </div>

  - 
    
    <div class="MsoNormal" style="MARGIN: 0in 0in 0pt">
    
    Building a lightweight message passing system -
    <http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dncscol/html/csharp09182003.asp>
    
    </div>

  - 
    
    <div class="MsoNormal" style="MARGIN: 0in 0in 0pt">
    
    WMP SDK Reference -
    <http://msdn.microsoft.com/library/default.asp?url=/library/en-us/wmform/htm/sampleapplications.asp>
    
    </div>

  - 
    
    <div class="MsoNormal" style="MARGIN: 0in 0in 0pt">
    
    Sound Effects Rack using WMP -
    <http://www.codeproject.com/useritems/soundplayer.asp>
    
    </div>

 

</div>

</div>
