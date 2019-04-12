<div id="page">

# Build and Publish Web Sites with Popfly Explorer Beta

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/9/2007 4:13:08 PM

-----

<div id="content">

I'm back in Seattle after attending TechEd Europe earlier in the week.
It was an absolute blast and thanks to everyone who came to the
overflowed Popfly session\!

Tony Goodhew and I did demos in
[Soma's](http://blogs.msdn.com/somasegar) keynote, check out Patrik and
Andrew's blogs for a recap on the keynote:

  - Patrik Löwendahl's:  [Live from the keynote with
    Somasegar](http://www.lowendahl.net/showShout.aspx?id=167)
  - Andrew Woodward: [TechEd 2007 EMEA
    keynote](http://www.21apps.com/2007/11/teched-2007-emea-key-note.html)

In my demo, I showed off **AddOn Studio for World of Warcraft**
(separate post on that later) and the now-available [Popfly
Explorer](http://go.microsoft.com/fwlink/?LinkID=104063).

### Popfly Explorer Beta

New with Popfly Explorer Beta for Visual Studio (works in 2005 & 2008
Express Editions-through-VSTS) is its ability publish custom Web pages
as well as add Popfly mashups/gadgets to any existing Web site easily.
More [info here](http://www.popfly.ms/Overview/Explorer.aspx).

### Everything you need to get started

**Free HTML/JavaScript Tool**: Visual Web Developer Express is a visual
Web design tool that, with the 2008 version adds the same HTML rendering
engine and CSS support in tools like Expression Web as well as much
improved support for JavaScript.

  - Download [Visual Web Developer Express 2008
    Beta 2](http://msdn2.microsoft.com/en-us/express/future/bb421471.aspx)

**Free HTML Hosting**: Using Popfly Explorer Beta, you can now publish
HTML, CSS, JavaScript, images, and XML files directly to your own Popfly
space.

  - [Download Popfly
    Explorer](http://go.microsoft.com/fwlink/?LinkID=104063)

**Free Learning Materials**: If you're new to HTML or CSS, we also offer
a number of free learning content like

  - [HTML 4 for
    Dummies](http://msdn.microsoft.com/vstudio/express/beginner/web/tier1/html/)
  - [Creating Web Pages All-in-One Desk Reference for
    Dummies](http://msdn.microsoft.com/vstudio/express/beginner/web/tier1/webpages/)
  - [Introduction to
    CSS](http://msdn.microsoft.com/vstudio/express/beginner/web/tier1/css/)
  - [Introduction to
    JavaScript](http://msdn.microsoft.com/vstudio/express/beginner/web/tier1/javascript/)

 

**Getting Started with Popfly Explorer**

After installing (note it may take a while as it has to apply settings
to every VS product you have. I have 9 Express products and two VSTS
products so it took close to 10 minutes).

In VWD, select File New Project...**Popfly Web
Site**

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_1.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_4.png)

 

When you click File...New Item... in the project, you'll get a filtered
list of item templates that work with Popfly. I'll choose a **Style
Sheet**
template.

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_2.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_6.png)

 

When you add the page, it dumps you into the CSS editor. As I prefer a
GUI for styles, simply right click and select **Build
Style...**

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_11.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_24.png)

This will display the visual style builder shown below with styles
grouped in categories and a live preview of what the style will look
like.

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_6.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_14.png)

You can then apply that style to your Web page and design the HTML as
you see fit either by hand coding HTML or using the built-in designer
and HTML toolbox
controls:

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_12.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_26.png)

You can build HTML, forms or AJAX applications In the page below is a
simple form that uses JavaScript to update an embedded Popfly Gadget
that displays images from Windows Live
Images.

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_15.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_32.png)

In the Popfly Explorer Window, you can just drag and drop Popfly
projects directly onto the Web page and it will automatically build an
\<iframe\> for you with the
project. 

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_13.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_28.png)

After dragging onto your page, it creates the following
HTML:

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_16.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_34.png)

 

### Send data from a Web page to mashup

Popfly Explorer is also a great tool for enabling mashup to Web page
communication using the **User Input** Popfly block.

The **User Input** block enables you to send data from your Web page
directly to a mashup by using the **getQueryParameter**
operation.

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_14.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_30.png)

With a couple of lines of code, we can update the src property of the
Popfly \<iframe\> to pass in a query string parameter named
"**first.**"

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_19.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_40.png)

 

The finished product is a page that updates a Silverlight mashup
:)

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_18.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_38.png)

### Saving to Popfly

To share your page(s) with the world, in the Popfly menu, select **Save
to
Popfly.**

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_20.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_42.png)

You can then open your newly uploaded project by clicking **View on
Popfly**

[![image](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_thumb_21.png)](https://msdnshared.blob.core.windows.net/media/TNBlogsFS/BlogFileStorage/blogs_msdn/danielfe/WindowsLiveWriter/PopflyExplorerandTechEdEurope_A507/image_44.png)

 

**Play at home**

Here are my projects that you can play with live

  - [My Web page](http://www.popfly.ms/users/Dan/MyNewSite1)
  - [User Input Silverlight
    Gadget](http://www.popfly.ms/users/Dan/UserInputSlideshow.details)
    Project Details Page

One thing to note is the only mildly annoying issue is that all files
must be in the root directory, subfolders are not allowed. This isn't a
killer, but it can be annoying as I like to separate content into
subfolders (like "images").

</div>

</div>
