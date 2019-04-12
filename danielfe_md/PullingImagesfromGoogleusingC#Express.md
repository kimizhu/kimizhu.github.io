<div id="page">

# Pulling Images from Google using C\# Express

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
7/26/2004 11:41:00 PM

-----

<div id="content">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**\*\*\* Updated Jan
23, 2006 \*\*\*** </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">I finally got around
to updating this for the final release of Visual Studio 2005. [Download
the updated code
here](http://www.danfernandez.com/view/view.aspx?ID=170).</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**\*\*\*\*\*\***</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span> 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">[My Channel9 video
that uses Visual C\#
Express](https://channel9.msdn.com/ShowPost.aspx?PostID=14793) to pull
images from [images.google.com](http://images.google.com) is now
available. You can find the video on
[Channel9](https://channel9.msdn.com/ShowPost.aspx?PostID=14793) and
download the code
[here](http://www.danfernandez.com/view/view.aspx?ID=43).</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

****

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

**Walkthrough**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">I’ll use this blog
post to walk through the basics of the application and point out Whidbey
features along the way.<span style="mso-spacerun: yes">  </span>You’ll
notice a Toolstrip control at the top of the page with an image
containing the C\# Express logo, a textbox and a button. The
ToolStripTextBox uses the new autocomplete features in VS ‘05 (you’ve
probably run into this with Windows or Internet Explorer automatically
populating entries) and uses a custom data source. While you can define
these programmatically by creating an AutoCompleteStringCollection, I
decided to hard code the autocomplete values in at design time by
changing the AutoCompleteCustomSource property and typing in strings.
For example purposes, I'll search for Steve
Ballmer.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span> 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 ![](http://www.danfernandez.com/view/view.aspx?ID=45)

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-fareast-font-family: &#39;Times New Roman&#39;; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA">We
return pictures from Google into a ListView control and when a user
clicks on the ListView control, we populate a large picture box with the
high-resolution image as shown below.</span>

![](http://www.danfernandez.com/view/view.aspx?ID=48)

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">I also added a context
Menu on the high-resolution image so that you can set the selected
picture as your Wallpaper.  
</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 ![](http://www.danfernandez.com/view/view.aspx?ID=49)

**<span style="FONT-FAMILY: Arial"></span>** 

**<span style="FONT-FAMILY: Arial"></span>** 

**<span style="FONT-FAMILY: Arial">How it all
Works</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">If
you’re familiar with how asynchronous operations work with the .NET
Framework 1.1, you’ll realize that while it is a [consistent programming
model](http://blogs.gotdotnet.com/cbrumme/PermaLink.aspx/c7af9311-c46e-42e8-89fe-db22cc07b4a6),
it’s still a little complex (BeginInvoke, IAsyncResult, WaitHandle’s
etc) then you would probably like.<span style="mso-spacerun: yes"> 
</span>VS ‘05 makes async programming a lot easier with the new
BackgroundWorker class that can go execute a long running task in a
background thread without the main UI thread feeling like it has
hanged.<span style="mso-spacerun: yes">  </span>The Background worker
class has some important properties and
    events:</span>

  - **<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">WorkerSupportsProgress</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">
    and **WorkerSupportsCancellation** which hold true/false values that
    let the backgroundworker report progress or cancel an async progress
    respectively.</span>

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">The
    **DoWork** event fires when you call the
    **BackgroundWorker.RunWorkerAsync()**
    method.<span style="mso-spacerun: yes">  </span>You’ll simply need
    to hook up an event handler to the DoWork event that will do
    whatever long running task you want to have run on another
    thread.</span>

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">The
    **ProgressChanged** event fires when you call the **ReportProgress**
    method inside of the **DoWork** event and allows you to show the
    current progress of the long running
    task.</span>

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">The
    **RunWorkerCompleted** event fires when the asynchronous operation
    has
    completed.</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>
    
     

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">As
shown below, the user clicks on the search button and we pass the search
value to the background worker. The background worker calls Google
images, parses the urls for images and we then retrieve all of the
images into local image objects.<span style="mso-spacerun: yes"> 
</span>We return the list of urls and images back to the original
thread.<span style="mso-spacerun: yes">  </span>We then bind the images
to the ListView control.<span style="mso-spacerun: yes">  </span>If a
user clicks on a specific image, we load the high-res image and load it
into the picture box.<span style="mso-spacerun: yes">  </span>If a user
right clicks on the image, they can set the image as the machine’s
wallpaper.  
  
</span>

![](http://www.danfernandez.com/view/view.aspx?ID=46)

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The URL for the image
and the image itself are stored in a generic dictionary class with the
url representing the key and the image representing the value as shown
below:</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">internal</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
<span style="COLOR: teal">Dictionary</span>\<<span style="COLOR: blue">string</span>,
<span style="COLOR: teal">Image</span>\> GoogleImages =
<span style="COLOR: blue">new</span>
<span style="COLOR: teal">Dictionary</span>\<<span style="COLOR: blue">string</span>,
<span style="COLOR: teal">Image</span>\>();</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">RunWorkerAsync
accepts an object type parameter so that you can pass
variables/data<span style="mso-spacerun: yes">  </span>into the
background worker
thread.</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">googleBackgroundWorker.RunWorkerAsync(txtSearch.Text);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Note</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">:
The code that is being executed when the DoWork event fires will run on
a separate thread then the UI. It’s important to remember that code on
this thread cannot change controls on the original UI
thread.<span style="mso-spacerun: yes">  </span>Because of this, we’ll
get all the images and do the actual databinding in the
**RunWorkerCompleted** event.
<span style="mso-spacerun: yes"> </span></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Since
we passed an argument (the text to search) as an object type, we can get
the value out of the
</span><span style="FONT-SIZE: 11pt; COLOR: teal; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">DoWorkEventArgs</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
e
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">by
casting to a string. The GetImagesFromGoogle method calls Google and
returns a list of image URLs by applying a regular expression to a
string that contains the raw html.<span style="mso-spacerun: yes"> 
</span></span>

<span style="FONT-SIZE: 11pt; COLOR: teal; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">WebUtilities</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">.GetImagesFromGoogle((<span style="COLOR: blue">string</span>)e.Argument);</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">With
the list of image URLs parsed from the Google HTML file completed, we
can then loop through each url and load the image by creating a
WebClient object with the image url and reading the image bits into a
stream object. We then convert the bytes in the stream to an image by
calling the **Image.FromStream** method and finally we add our url and
image to our dictionary. We do a try/catch/finally statement in case the
image has been taken off of Google, but we really just want to continue
rather then do anything fancy here (like stop the application) and we
call the finally statement after each image to report progress to the UI
thread. <span style="mso-spacerun: yes">  </span>As we need to make 21
HTTP requests (one for the original images.google.com page and up to 20
request for each image in the results page) we show user progress in a
progress bar as each image is
loaded.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">foreach</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
(<span style="COLOR: blue">string</span> url
<span style="COLOR: blue">in</span>
imgUrls)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">try</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span>{</span>

<span style="FONT-SIZE: 11pt; COLOR: teal; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">      
</span>Stream</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
ImageStream = <span style="COLOR: blue">new</span>
<span style="COLOR: teal">WebClient</span>().OpenRead(url);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">      
</span><span style="COLOR: teal">Image</span> img =
<span style="COLOR: teal">Image</span>.FromStream(ImageStream);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">      
</span>UrlAndImage.Add(url,
img);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span>}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span><span style="COLOR: blue">catch </span>{
}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span><span style="COLOR: blue">finally</span></span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span>{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span>googleBackgroundWorker.ReportProgress(progress++);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">    
</span>}</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"><span style="mso-spacerun: yes">  </span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">The
**ReportProgress** method receives an integer value and we read it out
from the
</span><span style="FONT-SIZE: 11pt; COLOR: teal; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">ProgressChangedEventArgs
</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">e
</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">variable
and increment the progress bar as shown
below</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">void</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
backgroundWorker1\_ProgressChanged(<span style="COLOR: blue">object</span>
sender, <span style="COLOR: teal">ProgressChangedEventArgs</span>
e)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span>googleProgressBar.Value =
e.ProgressPercentage;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">}</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Note</span>**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">:
The WorkerReportsProgress property must be set to true here to report
progress.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Once
we’ve pulled every image, we return our dictionary of urls and images by
setting the e.Result
property.</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">e.Result
=
UrlAndImage;</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">When
our BackgroundWorker async progress is complete, it will then call the
**RunWorkerCompleted** method on the original UI
thread.<span style="mso-spacerun: yes">  </span>We can now manipulate
the Windows Forms controls on this
thread.<span style="mso-spacerun: yes">  </span>At design time, I set a
couple of ListView properties to set the View for the control to
“LargeIcon” and I set the LargeImageList property to my ImageList
control. I need to now loop through each entry in our dictionary and add
the key and the image to the ImageList control which we will use to
store the images.<span style="mso-spacerun: yes">  </span>The key from
our dictionary is important here as we’ll use the key to map the right
url to the right image in our ListView.<span style="mso-spacerun: yes"> 
</span>The **ListView.Items.Add()** method overload I call expects a
string of text to describe the ListView item, which I set to the url,
and a string to represent the image key in the ImageList as I discussed
above.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

<span style="FONT-SIZE: 11pt; COLOR: blue; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">void</span><span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">
backgroundWorker1\_RunWorkerCompleted(<span style="COLOR: blue">object</span>
sender, <span style="COLOR: teal">RunWorkerCompletedEventArgs</span>
e)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span>googleProgressBar.Visible =
<span style="COLOR: blue">false</span>;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span>GoogleImages =
(<span style="COLOR: teal">Dictionary</span>\<<span style="COLOR: blue">string</span>,
<span style="COLOR: teal">Image</span>\>)e.Result;</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span><span style="COLOR: blue">foreach</span>
(<span style="COLOR: blue">string</span> key
<span style="COLOR: blue">in</span>
GoogleImages.Keys)</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span>{</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> 
</span><span style="mso-spacerun: yes">  </span>lowResImageList.Images.Add(key,
GoogleImages\[key\]);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes">   
</span>googlePicturesListView.Items.Add(key,
key);</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"><span style="mso-spacerun: yes"> </span><span style="mso-spacerun: yes"> </span>}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes">}</span>

<span style="FONT-SIZE: 11pt; FONT-FAMILY: &#39;Lucida Console&#39;; mso-no-proof: yes"></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Debugging
The
Code</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Visualizers</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">In
the Channel9 video I showed how you can add a breakpoint to code that’s
running on the background worker thread and I show the HTML visualizer.
If you’ve ever written code to screen scrape a web page, you’ll
definitely appreciate the string visualizers we’ve added in 2005. You
can add a breakpoint to your code and get a rich view of your in-memory
variables. Below are the screenshots from the HTML and Text visualizers
which show you exactly what Google returned either in a browser view or
in a straight text view. Very
cool.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes"></span>

 

![](http://www.danfernandez.com/view/view.aspx?ID=51)

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-fareast-font-family: &#39;Times New Roman&#39;; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA; mso-no-proof: yes">**HTML
Visualizer for Google
Request**</span>

![](http://www.danfernandez.com/view/view.aspx?ID=47)

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial; mso-no-proof: yes">Text
Visualizer for Google Request</span>**

![](http://www.danfernandez.com/view/view.aspx?ID=50)

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>** 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Modifications/Wish
List</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">It’s hard to release a
sample as you know what’s ugly under the covers and all the cool things
you planned to do, but things like sleep get in the
way</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">. If I had
some free time, here’s what I would add/change:</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Small
Changes</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Change
the backgroundWorker method
names</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The
OpenRead(url) method on WebClient class (I thought this was more
readable then the request/response model) expects a string data type
rather then a URI class. Because of this, I decided not to use the URI
class and used the URL variable name to make the distinction clear. This
isn’t much of a problem really, but it would be something I would
consider switching in the future. The change would look like the
following:  </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"> </span>

**internal** Dictionary\<Uri, Image\> GoogleImages = new
Dictionary\<Uri,
Image\>();

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"><span style="mso-spacerun: yes"> </span>Add
a way to cancel the background event. The code is trivial, it just got
Pri
2’d.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Format
the ListView a bit. Rather then have the full url, simply show the file
name. Add the ability to turn checkboxes on and off so that you can
File…Save All images. These were pretty much Pri
3’s</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Add
a status bar and move the Progress bar into the status bar. Use the
status bar to not only show progress, but remove the message box pop-ups
when the Wallpaper changed and instead send that message to a label
on the status bar. Pri 3.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

**<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Larger
Changes</span>**

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Add
a way to see the next page of Google image results. The current model
only shows results from the top page. Again, not too difficult, but Pri
2.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Create
a nice API to read/write/serialize values that the user enters into the
textbox so that way we’ll have a history of those values. Pri
3.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Add
Menus for File, Save All (mentioned above), Exit, Options. The Options
window is the bigger work item here and it would allow you to enter
network configuration information (proxy, port, etc and let you “test”
your connection). The new System.Net classes make this pretty easy Pri
3.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol"><span style="mso-list: Ignore">·<span style="FONT: 7pt &#39;Times New Roman&#39;">       
</span></span></span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Integrate
this with our [RSS Screensaver Starter
Kit](http://blogs.msdn.com/danielfe/archive/2004/06/29/168449.aspx) so
that your screensaver can automatically change background images based
on images in images.Google.com.<span style="mso-spacerun: yes"> 
</span>In general, I’d like to see the RSS screensaver use a provider
model so that images can be source agnostic whether it be file system,
object, database, web service, etc. Pri 3</span>

 

</div>

</div>
