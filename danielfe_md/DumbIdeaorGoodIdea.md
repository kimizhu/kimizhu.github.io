<div id="page">

# Dumb Idea or Good Idea?

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
3/16/2004 7:48:00 PM

-----

<div id="content">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">One of the most often
used terms you hear in a meeting at Microsoft is
“*<span class="underline">that's the dumbest thing I have ever
heard</span>*“. Sometimes this is true (remember Hailstorm?), sometimes
its not (combine Excel and Word into one suite of well-integrated
products).  I've been kicking around ideas for starter kits for
Whidbey.  A starter kit is an out-of-the box pre-built app that should
solve a specific customer problem (check the existing [**ASP.NET starter
kits**](http://www.asp.net/starterkits/)). I asked two colleagues for
their opinions on my idea.  **[One said](http://blogs.msdn.com/joen/)**
“*That's the dumbest thing I have ever heard*“ (PS: you rock Joe), the
[**other said**](http://www.thespoke.net/MyBlog/shredas/MyBlog.aspx)
“*that's a great idea, I spent the last summer doing this\!”*  (PPS:
you rock too Shreyas).</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">****</span> 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**Your mission**:
Decide who's right :)</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span> 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**The Idea**</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The idea is to create
an intranet web site starter kit for a corporate IT department,
including features like asset tracking, a help desk ticket system,
reporting, FAQs, employee phone book, dynamic Org Chart,
downloads, etc.  A customer could get the starter kit, change some
settings and be up and running in minutes (rather then months).  </span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span> 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**Why**</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Why create this
starter kit? Because our developer division doesn't focus much
attention on IT apps (try and find good examples on using Active
Directory) and I think we could create a compelling application that you
could drop into your company and get working easily.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span> 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**Additonal
feedback**</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">PS - If you **do**
like this idea, prioritize/stack rank the features you think are most
important.  Each feature has a letter next to it, so if you think
something is a must have, add it as a PRI 1 in your response.</span>

  - 
    
    <div class="MsoNormal" style="MARGIN: 0in 0in 0pt">
    
    <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Ex:  
    </span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">*Pri 1 -*
    </span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">*Features
    a,b,c  
    *</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">*Pri 2 -*
    </span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">*Features d,e,f  
    *</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">*Pri 3 -*
    </span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">*all the
    rest*</span>
    
    </div>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">**MyHelpDesk Starter
Kit**</span><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 **Details**

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[a\] MachineTrack
    web page</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This consists
        of a Hosted Windows Forms Control embedded on a web page
        (similar in concept to ActiveX) that polls your local machine
        using WMI for information an admin wants to track like CPU, RAM,
        registry keys, HD space remaining, Operating System, etc and
        adds it into the company asset tracking
        database.<span style="mso-spacerun: yes">  </span>The user
        clicks a button, and similar to Windows Update, the control
        inspects the machine
        configuration.<span style="mso-spacerun: yes">  </span></span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Data is then
        stored in the company asset tracking database, which can have
        multiple copies of the same machine information at different
        times (Jan, Feb, Mar) and also store multiple machines per
        user.</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Extensibility
        - Code could be added to automatically suggest software to
        install – ex: Check for Norton Antivirus, if not installed, show
        the user a link on a web page to install.</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[b\] MyPC</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This would be
        a user report front-end of the contents of your PC using ASP.NET
        or SQL Reporting Services. You would be able to see all the info
        captured in \[a\].</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[c\] HelpDesk
    Ticket System</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Have a
        mechanism for users to submit helpdesk requests (for a specific
        category) which go into a queue of open helpdesk
        tickets.<span style="mso-spacerun: yes">  </span>The user also
        receives an email confirming the ticket has been opened. </span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">The helpdesk
        ticket is then assigned to (or picked up by) a support person
        who then contacts the user to fix the request.</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">When the
        support person closes the ticket, an email is sent confirming
        this to the user, and the support person can add comments on the
        ticket.</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Extensibility
        – In the “close ticket” email, you coudl include a link to a
        unique survey form which asks the user to rate the support
        person’s help.</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[d\] FAQ</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This an engine
        to create and organize Frequently Asked Questions for
        administrators.</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">You can
            define multiple FAQs (rather then one large one) and also
            create categories to better organize FAQ
            questions.<span style="mso-spacerun: yes">  </span>All this
            is done through a web-based
    interface.</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"><span style="mso-spacerun: yes">\[e\]
    </span>Downloads</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This would be
        a list of all corporate approved downloads ranging from
        utilities like WinZip to corporate TrueType fonts. All downloads
        would be categorized and include some other attributes like file
        name, description, vendor URL, version, location (install from
        the closest copy to you geographically), download count, user
        ratings, and comments. </span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[f\] Phone
    Book</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Using
        Exchange/Active Directory, create a simple web front-end for the
        corporate phone directory. Users can insert/update their phone
        numbers and search for the phone numbers of other employees
        (should this be separate or rolled into the org chart?)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[g\] Organization
    Chart</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Using
        Exchange/Active Directory, admins can create a report-to
        chain.<span style="mso-spacerun: yes">  </span>Using ASP.NET’s
        treeview control, you can create a simple visual employee
        hierarchy. Which shows you, your manager, your manager’s
        manager, etc.<span style="mso-spacerun: yes">  </span>Clicking
        on an employee shows their information (office, phone, email,
        title, etc)</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Extensibility
        – Easily add the ability to have a picture associated with
        each employee.<span style="mso-spacerun: yes">  </span>Users can
        only change their picture</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[h\]
    Contacts</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Typical
        contact/about page</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[i\]
    Announcements</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Simple user
        control listing announcements as html (no admin gui for
        this)</span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[j\]
    Administrative
    Reports<span style="mso-tab-count: 3">                         
    </span></span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">This is a
        group of reports that takes the information gathered in
        AssetTrack and the HelpDesk system</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Asset
        Track</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Want to
            see how many users hard drive is \>90% full?</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Want to
            see which employees have the lowest RAM/CPU speed?</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Want to
            see which employees are still on old operating
            systems?</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">HelpDesk</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Who closed
            the most support tickets?</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Who
            average the most closed per hour?</span>
          - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Who has
            the best review scores?</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Extensibility
        – Add the ability to see all of the above reports over time
        (trend up/trend down)? </span>
  - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">\[k\] Active
    Directory user management</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">I don’t know
        what to do here (if anything).<span style="mso-spacerun: yes"> 
        </span>What are the common tasks you would want to manage in a
        web interface?</span>
      - <span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">Logged-in
        users?</span>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

So what do you think? Also, is making Active Directory and Windows
authentication a requirement okay?  Does the app need to play with
Windows Sharepoint Services and Sharepoint Portal Server?

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

Vote today\!

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></span>

 

</div>

</div>
