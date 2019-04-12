<div id="page">

# Can a PC talk to a Mac in under two hours?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
12/3/2003 11:32:00 AM

-----

<div id="content">

**Happy Thanksgiving everybody\!**

Thanksgiving at my mom's house in DC is a little bit non-traditional as
guests don't arrive until around 8pm, we don't eat until close to
11pm, and we don't stop partying until 2/3 AM.  There were about 30
people at my mom's house this year in D.C. which made it all the more
fun.  
  
My mother's 60th birthday also happened to fall on turkey day this year,
and for a gift, I got her wireless speakers that plug into her PC so
that she can listen to internet radio in the kitchen and bedroom. 
Worked like a charm :)

My oldest sister had been secretly recording testimonials from long-time
friends and family to create a birthday collage for my mom.  The only
problem was that there were still pictures that we needed to add to
the collage, and my sister uses an OS X mac laptop while I run Windows
XP. Oh, and we had to do this all within two hours (before guests
arrived) and we had to do this without my mom finding out.   Below are
the options I went through to transfer still pictures from a PC to a
Mac: 

  - Floppy Disk - My sister didn't have hers so this was a no-go.
  - USB Keychain - The USB keychain that I own didn't seem to work on a
    Mac.  This may be because the keychain has a password app on it that
    requires you to enter a password before you can view the files on
    the keychain.
  - Network - Network Stumbler found two wireless networks, but my
    sister couldn't get on either of these, despite our efforts.  XP got
    on both of these networks without any problems. 
  - IR Port - Her laptop lacked an IR port.
  - CD-ROM Burning - This was the last option that I could think of, as
    my laptop is a DVD-CD/RW combo I could burn a disk for her pretty
    easily.  Unfortunately we didn't have blank CD-Rs at my house, so I
    ran to the local grocery store (the only thing open on turkey day)
    and found blank CD-Rs \<aside\>Back when I first started burning
    disks in '98, the only place you could ever find blank CDs was in
    computer stores, now you can find them in grocery stores\</aside\>.
    After sneaking these into our house, I ran upstairs only to discover
    that I didn't have CD burning software, and after trashing a
    disk trying to get Windows Media Player to act as a burner, I
    started searching the web for burning software.  That's when I
    remembered that [Duncan](http://weblogs.asp.net/duncanma/) had
    posted [Anson's CD burning
    code](http://download.microsoft.com/download/6/9/c/69c5d1b7-e3ac-4986-99f1-0c55dc374d66/xpburn.msi).
    I downloaded the MSI and installed it.  It's a very easy to use,
    well-factored API, and below is the actual code I used to burn files
    to the CD burner (with inserted comments to explain what's going on)

 //Create a new instance of the XPBurn component  
**XPBurn.XPBurnCD cd =** new **XPBurn.XPBurnCD();**

****

//Add files (file path, name of file to use for CD  
**cd.AddFile(@"c:\\pic1.jpg","pic1.jpg");**

//... add all files... ****

/\*  
  Record Disc begins the process,  
  Set 1st param to false if you want to actually burn the disk and not
just simulate a burn  
  Set 2nd param to true if you want the disc to eject after burn

\*/  

**cd.RecordDisc(**false**,** true**);** ****

 With the code written, I placed it in a button click event of a Windows
form and presto, it worked\!  My sister took the freshly burned CD and
was able to read the pictures off the disk with no problem.  My mom
loved the video montage and there was much rejoicing. 

Lessons learned:

  - Communicating between Macs and PCs is still way too difficult
  - C\# saved my mom's birthday :)

</div>

</div>
