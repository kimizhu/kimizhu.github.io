<div id="page">

# Visual Studio 2005 Community Integration FAQ

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
11/16/2004 5:51:00 PM

-----

<div id="content">

In the [Visual Studio
Connections](http://www.vsconnections.com/devconnections/vs/) keynote, I
demonstrated the new features for finding and sharing content using
Visual Studio 2005. In the demo, I showed how a developer can open up
C\# Express (or just about any VS 2005 product), click File New
Project...Online Template...search for community content and download
them to their machine. I won't spend time going through everything I
showed at VS Connections, I'll save that for another blog post, but I
wanted to quickly discuss the community features showed in the demo in
a FAQ format, based on the questions I've received so far.

**Community Features Quick FAQ**

**Q: What community integration is included in Visual Studio 2005?**  
A: You will be able to ask a question in the newsgroups, submit Product
Feedback, check question status, connect to MSDN developer center's and
our CodeWise community, and even <span class="underline">search for
content directly in the product</span>. Below is a screenshot of the new
top-level Community menu.

![](http://www.danfernandez.com/view/view.aspx?ID=88)

**Q: What Visual Studio 2005 products will include these community
integration features?**  
A: All VS 2005 products from Express up to VSTS, with the exception of
C++ for content search since they use a different project system.

**Q: What exactly is the Community Content Search or online templates
feature?**  
A: I'll use the analogy of Microsoft Word. If you want to create a Fax
cover sheet, resume, or letter in MS Word, all you need to do is click
File New...and select from a list of
<span class="underline">document</span> template. We are using the same
analogy by making it so that developers can have fully built project
templates. So if you wanted to create a Personal Web site it is as easy
as clicking File..New...Personal Web site. An instance of a template for
a Personal Web site would then be created. You can change, customize and
extend the instance without breaking the template itself. We've extended
this feature and made it so that not only will you have templates inside
the product, but you'll be able to <span class="underline">search
online</span> for new templates <span class="underline">built by the
community</span> inside of Visual Studio.

**Q: What problem does the community content solve?  
**A: First, it makes it easy to discover and share content directly in
Visual Studio. Another feature, Export Template, that I'll discuss below
makes it dramatically easier to **package** your content for sharing.
You no longer have to go through an installer or muck around with
setting up an app.config file or other settings, your content will "just
work". No more missing files or installers for samples, you now have a
nice pre-packaged sample. 

**Q: So does this mean that you will ship with new project templates
beyond Windows Forms, Web Forms, class libraries, etc?**  
A: Yes, we are still working on finalizing the list of project and item
templates that will be in Visual Studio 2005. The important part is that
we are also adding a way to search for new templates
**<span class="underline">online</span>** directly in the product.

**Q: What is the user experience like for finding content?  
**A: [Marie Hagman](http://blogs.msdn.com/mhagman/) did a great job of
walking through the [user experience of finding and acquiring community
content](http://blogs.msdn.com/mhagman/archive/2004/11/15/258064.aspx)
in this blog post. Her post walks through click File New Project... to
having the content installed?

**Q: Marie's blog post mentions a new file extension, \*.vsi, what is
that file extension?**  
A: The Visual Studio Installer (vsi) file extension is a new file
extension for Visual Studio 2005. It is basically a zip file that
contains community content and includes XML that describes the community
content, which is in another new file extension, \*.vscontent. Visual
Studio 2005 knows how to handle VSI files. You can find a screenshot of
the [innards of a \*.vsi file
here](http://www.danfernandez.com/view/view.aspx?ID=86). Below is
the contents of a \*.vscontent file.

 \<VSContent\>  
    \<Content\>  
        \<FileName\>CardGame.zip\</FileName\>  
        \<DisplayName\>Card Game Starter Kit\</DisplayName\>  
        \<FileContentType\>VSTemplate\</FileContentType\>  
        \<ContentVersion\>1.0\</ContentVersion\>  
        \<Attributes\>  
         \<Attribute name="language" value="en"/\>  
         \<Attribute name="TemplateType" value="Project"/\>  
        \</Attributes\>  
 \</Content\>  
\</VSContent\>

**Q: What kind of content can be made available through the community
search?**  
A: Starter Kits, Code Snippets, Controls, Add-ins, and more. The nice
part is that you can group content and include a Starter Kit and three
code snippets all within one \*.vsi template file.

**Q: How does the content search work?  
**A: Simply put, When you click File..New Project and search online
templates, Visual Studio calls Web services hosted by MSDN that
aggregate metadata about content. The Web services from MSDN aggregate
metadata from content providers like MSDN and participating [CodeWise
communities](http://msdn.microsoft.com/community/codewise/default.aspx%20).
You'll see a search menu with the list of providers on the right hand
side of the search box (see below).

![](http://www.danfernandez.com/view/view.aspx?ID=89)

**Q: I downloaded the templates, where are they on my machine?  
**A: It depends, you can tell Visual Studio where you want to save this
file, in the Tools...Options...Settings as shown below:

![](http://www.danfernandez.com/view/view.aspx?ID=90)

By default, Visual Studio 2005 uses a new directory structure (see
below) that contains directories for different kinds of content
including - Code Snippets, Item Templates, Projects (which replaces the
"Visual Studio Projects" directory), Project Templates, and your Visual
Studio settings.

![](http://www.danfernandez.com/view/view.aspx?ID=91)

**Q: Cool, how do I go about packaging my own content?  
**A: Craig Skibo, rock star, has implemented the [Export Template
feature](http://blogs.msdn.com/craigskibo/archive/2004/10/04/237950.aspx)
that makes creating a project template as easy as walking through a
Wizard.

**Q: Now that I've packaged my content, how do I share it for the whole
world to see?**  
A: Go to your favorite participating [CodeWise
partner](http://msdn.microsoft.com/community/codewise/default.aspx%20)
and upload your content.

**Q: This feature is great, but I work in an enterprise and don't want
to share \[insert company name here\]'s project templates with the rest
of the world, can I use this feature in my intranet?**  
A: Absolutely, your organization will need to setup a set of Web
services that let you search the content's metadata. You can then tell
Visual Studio to search your custom Web services. The experience in
Visual Studio will be the same and you'll be able to see your company's
content available through the search capabilities.

**Q: When will this feature be available for me to play with?  
**A: This feature will be in the next Community Tech Preview and in Beta
2.

**Q: When is Beta 2?**  
A: This is an excellent time for me to pass the buck and point you to
the new [Developer Division Channel9
Page](https://channel9.msdn.com/DevDiv/default.aspx). Here you'll find
lot's of good information on how we make software, and the latest
updates on how Visual Studio 2005 is coming along.

**Q: I have more questions\!  
**A: Comment away...

 

  

 

</div>

</div>
