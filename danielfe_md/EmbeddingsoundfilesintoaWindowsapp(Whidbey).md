<div id="page">

# Embedding sound files into a Windows app (Whidbey)

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/19/2004 3:05:00 PM

-----

<div id="content">

I have to confess: I've been coding again...its my one escape from the
104 flagged emails that need responses or large amounts of work done,
and the as-yet uncovered firedrills which I'm sure are just one
Outlook-sync away. For now, I blog... 

**Recipe**: Embed a sound file  that will play when a Windows form
application is loaded.

**Pre-cooking steps**

  - Open Whidbey M2 PDC (or greater)
  - Create a new Windows Form application
  - Have Solution Explorer and the Properties Window visible in Visual
    Studio

**Step 1 - Add and Embed your resource**

Windows Forms enables you to embed resources (like images, icons, sound
files, etc) directly into your application.  To embed a resource, all
you have to do is:

1.  Right click on your project select “add existing item...“ to open
    the Add Item dialog box
2.  In the add Item dialog box, change the “File Type” dropdown to show
    all files
3.  Navigate to the location of your resource, in our case “sound1.wav“
    and click “Open“ to add it to your project
4.  With “sound1.wav“ selected, change the “Build Action“ property in
    the properties window to “Embedded Resource“
5.  This resource will now be embedded directly into the exe.

**Step 2 - Using an embedded resource**

  -  Since we want to play a sound file when the form loads, simply drag
    and drop the new Sound control from the toolbox onto your Windows
    form application.  This will create an object named sound1 that we
    will programatically set our embedded sound source to.
  - Open up the Form Load event and type  
    **  Stream** \_sound =
    this.GetType().**Assembly**.GetManifestResourceStream 
    ("MyAssemblyName.sound1.wav");  
      sound1.**Stream** = \_sound;  
      sound1.Play();
  - In the first line, I create a stream object that will contain the
    contents of my sound file, and I use reflection to pull in the
    stream from a particular file in the assembly using the
    *AssemblyName.FileName* naming convention.  Next I'll set the Stream
    property for Sound1 to point to our wav file, and then play the
    sound. Done :)
  -  If this was a picture file, you could drag and drop a PictureBox
    onto the control and add the following code.  
    **Stream** \_picture =
    this.GetType().**Assembly**.GetManifestResourceStream("MyAssemblyName.pic1.jpg");  
    System.Drawing.**Bitmap** pic = new
    System.Drawing.**Bitmap**(\_picture);  
    pictureBox1.**Image** = pic;

Gasp, Outlook says I have to go, but that's pretty much it for simple
scenarios, I'll blog more later.

 

</div>

</div>
