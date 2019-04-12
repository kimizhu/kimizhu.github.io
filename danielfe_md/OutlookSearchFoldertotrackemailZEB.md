<div id="page">

# Outlook Search Folder to track \*email ZEB\*

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
6/24/2005 1:19:00 PM

-----

<div id="content">

As anyone who reads Microsoft blogs knows, we get a lot of email, \*a
lot\*. We're also on email \*all\* the time. I've had way to many
conversations at midnight or 6am on anything. It consumes you :) To
manage it all, I took a "Managing Action Using Outlook" course circa
2001 which was great. While I'm more of a pragmatist then devout
follower, it's a must have for anyone overwhelmed by email. In the
beginning of the class, they asked person to "confess" how much
**unread** email they had in their inbox. I had \~250 unread emails and
I thought I was bad.  One of the managers in the room had 4,000 unread
emails.  And I thought I was bad\!

Back to the point of this blog post - I'll use the term my manager's
manager, [John Montgomery](https://blogs.msdn.com:443/johnmont/) has
coined, [ZEB - Zero Email
Bounce](https://blogs.msdn.com:443/johnmont/archive/2005/02/24/380064.aspx)
for an Outlook search folder I made to track whether you're caught up on
email. ZEB is derived from ZBB or Zero Bug Bounce which describes when
development has caught up to test and cleared the bug backlog. The ZEB
Search folder let's you track if you have any red or yellow flags that
haven't been responded to in two days, but you can change this as you
see fit :)

**Steps to create your Email ZEB Search Folder**

  - From Outlook 2003, Click File New...Search Folder...
  - In the New Search Folder Dialog Box scroll down to the bottom and
    select "Create a Custom Search Folder"
  - Select Choose...
  - Give your Search folder a name like "Email ZEB" and select Criteria
  - Click the Advanced Tab and add the following
  - Field: Received, Condition: On or before, Criteria: "Two days ago"
    (or whatever you want your incoming threshold to be)
  - Field: Flag Color, Condition: Equals, Criteria: Red Flag
  - Field: Flag Color, Condition: Equals, Criteria: Yellow Flag
  - Click OK to save you're Search Folder
  - Move the Search Folder to your Folder Favorites
  - Right click on the ZEB folder and select Properties...and select
    "Show Total Number of Items"

Voila, you now have a way to track your incoming email bugs (red flag is
P1, yellow is P2) and see how badly you're behind on email. I'm at 53,
better get cracking...

 

 

 

 

</div>

</div>
