<div id="page">

# Popfly Game Creator Alpha Launches\!

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
5/2/2008 2:09:40 PM

-----

<div id="content">

[Popfly Game Creator Alpha](http://www.popfly.com/gamecreator/) launches
today and It's amazing. Kudos to Adam
[Nathan](http://blogs.msdn.com/adam_nathan/) as he's really shown how
Silverlight can build incredibly rich applications. I can only imagine
what he'll do when Popfly moves to Silverlight 2\!

  - Here's the [Channel 9 interview with Adam building three Popfly
    games from
    scratch](https://channel9.msdn.com/ShowPost.aspx?PostID=401969)
  - Here's [how difficult it was to make games before
    Popfly](http://www.on10.net/blogs/tina/Popfly-Game-Creator/)

While Popfly Game Creator is designed for non-developers, I'm sure many
developers will also want to have fun with it, so here's my quick
explanation of Popfly for .NET
developers.

 

![menu](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/menu_3.png)

 

**Scenes == A Windows Forms/ASP.NET Page Designer**: Scenes are the
equivalent to a Window or ASP.NET page. You can have multiple scenes in
an application, you'll get a start, main, and end scene to begin with,
and you can of course switch to a certain scene based on something
happening in the game (ex: taking a transporter, dying, etc). In a
specific scene, you will go go in and add your actors to the scene in a
visual layout.

 

**Actors == Form/Page Controls**: Actors are any object you place in a
scene. Here's a screenshot and notice that everything, including the
background is an
actor.

[![actors](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/actors_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/actors_2.png)

 

**Game == Files/Properties**: This is where you can add properties like
a game score, or add custom files like pictures of friends.

 

**Behaviors == Brains**: Behaviors are the brains of a Popfly game. A
scene can have behaviors (like to reset a score when it loads) and each
actor can have behaviors. To set behaviors, look for this
icon

![behaviors](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/behaviors_3.png)

If you want an actor (control) to move around, play a sound, shoot,
appear, disappear, etc, this list of behaviors is what you'll want to
click and
specify

[![behavior\_all](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/behavior_all_thumb.jpg)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/behavior_all_2.jpg)

Here, for example, are a set of behaviors for a car that add steering,
adding to the high score and disappearing when the game is over

[![behavior
list](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/behavior%20list_thumb.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/behavior%20list_2.png)

 

**Shortcuts == IntelliSense Code Snippets**: One of the convenience
things that the Popfly team did was add shortcuts which are a pre-built
set of behaviors. What this means is that rather than having to manually
add behaviors for moving up/down/left/right using arrow keys, you can
just select that shortcut and it will automagically add those behaviors
to the selected
actor.

![snippets](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/snippets_3.png)

 

And of course, as developers, you simply need to look for the Code icon
to drop into custom XAML and JavaScript, but one can only imagine how
nice it'll be when they add VB/C\# support in Silverlight
2.

![custom](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyGameCreatorAlphaLaunches_9CD3/custom_88befc35-6652-4681-93e2-6c7540a81e1e.png)

 

Kudos to the team, Popfly Game Creator rocks\!

</div>

</div>
