<div id="page">

# Go with the flow (layout)

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
3/30/2004 7:04:00 PM

-----

<div id="content">

[Jeff Key](http://weblogs.asp.net/jkey) has a handy tip on [removing the
///
comments](http://weblogs.asp.net/jkey/archive/2004/03/30/104354.aspx)
for the default C\# project templates in VS 2003.  While I don't like
the comments, my pet peeve is that ASP.NET uses “Grid“ layout by
default.  For your sanity, below are the directions for how to “go with
the flow“.

**Changing ASP.NET Pages from grid layout to flow layout**

  - Navigate to the following directory:  
    “C:\\Program Files\\Microsoft Visual Studio .NET
    2003\\VC\#\\VC\#Wizards\\CSharpAddWebFormWiz\\Templates\\1033“
    (assuming C: installation and english version (aka 1033)
  - Before changing any templates it's a good idea to make backup copies
    of them :)
  - Open “webform1.aspx” using Notepad, and remove the MS\_POSITIONING
    attribute from the body tag as shown below:

\<%@ **** Page language="c\#" Codebehind="$FILENAME$.cs"
AutoEventWireup="false" Inherits="$INHERITS$" %\>  
\<\!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" \>**  
**\<html\>  
\<head\>  
    \<title\>**\[\!output SAFE\_ITEM\_NAME\]**\</title\>  
    \<meta name="GENERATOR" Content="Microsoft Visual Studio .NET
7.1"\>  
    \<meta name="CODE\_LANGUAGE" Content="C\#"\>  
    \<meta name=vs\_defaultClientScript content="\[\!output
DEFAULT\_CLIENT\_SCRIPT\]"\>  
    \<meta name=vs\_targetSchema content="\[\!output
DEFAULT\_TARGET\_SCHEMA\]"\>  
\</head\>

****

\<body ~~MS\_POSITIONING="\[\!output DEFAULT\_HTML\_LAYOUT\]"~~\>  
    \<form id="Form1" method="post" runat="server"\>  
    \</form\>  
\</body\>  
\</html\>

Voila\! You're done\!

**Removing Body positioning on a per-project basis** 

If you don't want to mess with the template documents, or you like Grid
layout (I'll withold judgement of you, really) for certain applications,
you can change the behavior for new files on a per project basis in
Visual Studio by right clicking on the project name (Ex:
“WebApplication1)” in Solution Explorer, and select “Properties”. 
This brings up the project properties window, under Common
Properties\>\>Designer Defaults\>\>Page Layout change “Grid” to “Flow”. 

</div>

</div>
