<div id="page">

# How To Manually Create Outlook Calendar Appointments

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/8/2006 9:38:00 AM

-----

<div id="content">

Here's a gem from David Goodhand, a Microsoft vet that arguably taught
me everything I needed to know about giving technical presentations on
how to manually create Outlook Calendar appointments.

Copy/Pasted from David's
    email

1.  <span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: Verdana"></span>
    
    *If you’re try to write an appt directly into someone’s
    Exchange-based calendar, then use the Exchange CDO object
    model.*

2.  <span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: Verdana"></span>
    
    *If you are trying to generate an appt that the user can click on
    and add to their calendar, look into the .VCS (vCalendar) file
    format. For example, look up an item on ebay and click the click
    “Add to Calendar”. The server generates a .VCS file which the user
    then clicks on. As the user downloads or opens the .VCS file,
    Outlook snags it and makes an appt. out of it.*

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: Verdana"></span>

<span style="FONT-SIZE: 10pt; COLOR: blue; FONT-FAMILY: Verdana"></span>

  
*Here’s what an example VCS looks like:* 

BEGIN:VCALENDAR  
BEGIN:VEVENT  
SUMMARY:eBay Reminder: SONY DIRECTV ULTIMATETV W60  HU REMOTE V3.5  
DESCRIPTION:The end time for eBay listing number 3061186172 is scheduled
to end soon\! Click here to go to the page:
<http://cgi.ebay.com/ws/eBayISAPI.dll?ViewItem&item=3061186172&sspagename=calrem>

DTSTART:20031128T025334Z  
DTEND:20031128T045334Z  
END:VEVENT  
END:VCALENDAR

*Learn more about this file format at*
[*http://www.imc.org/pdi/*](http://www.imc.org/pdi/)*.*

 

</div>

</div>
