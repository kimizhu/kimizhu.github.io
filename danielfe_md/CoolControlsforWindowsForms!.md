<div id="page">

# Cool Controls for Windows Forms\!

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/17/2004 9:25:00 AM

-----

<div id="content">

[Robert Green
blogs](http://blogs.msdn.com/rgreen_msft/archive/2004/06/11/153858.aspx)
about the release of the VB.NET PowerPack.  The PowerPack is a set of 7
cool new Windows Forms controls written in Visual Basic.NET.  Don't let
the “VB“ in the title or your own language bias fool you, you can use
these controls in any .NET language.  You can download the controls from
the [GotDotNet
workspace](http://www.gotdotnet.com/Community/Workspaces/workspace.aspx?id=167542e0-e435-4585-ae4f-c111fe60ed58).  My
favorite control is the NotificationWindow control, which you've seen in
MSN Messenger, SharpReader and several other applications. The code
below creates a notification window, that when clicked, changes the
label on a
form.

![](http://www.danfernandez.com/view/view.aspx?ID=29)

 <span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;">private</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">
<span style="COLOR: blue">void</span>
Form1\_Load(<span style="COLOR: blue">object</span> sender,
System.EventArgs
e)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span><span style="COLOR: green">//Create
Toast</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span>NotificationWindow toast = <span style="COLOR: blue">new</span>
NotificationWindow();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span>toast.TextIsHyperLink =
<span style="COLOR: blue">true</span>;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span>toast.ShowStyle =
NotificationShowStyle.Slide;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 3">               
</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span><span style="COLOR: green">//Create Message for 6K milliseconds
</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span>toast.Notify("Hello World\!",
6000);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span>toast.Click += <span style="COLOR: blue">new</span>
NotificationWindow.ClickEventHandler(toast\_Click);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 2">          
</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;">private</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">
<span style="COLOR: blue">void</span>
toast\_Click(<span style="COLOR: blue">object</span> sender, EventArgs
e)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span><span style="COLOR: green">//Event fires when a user clicks on
the
toast</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;"><span style="mso-tab-count: 1">    
</span>label1.Text = "You clicked Hello
World";</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;">}</span><span style="mso-bidi-font-size: 10.0pt"></span>

If you are a true language snob (shame on you) and don't want to use
these b/c it's called a VBPowerPack, you can always use a using alias at
the top of your file as shown below: 

using PowerPack = VbPowerPack;

 

</div>

</div>
