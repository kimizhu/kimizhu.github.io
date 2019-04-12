<div id="page">

# Coding4Fun Pushing the .NET Envelope

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/21/2007 12:08:41 PM

-----

<div id="content">

[Coding4Fun](http://msdn.com/coding4fun) is off the hook lately\! Check
out these great apps that are pushing the envelope in fun and cool
ways

 

[![](https://channel9.msdn.com/Photos/284221.jpg)](https://channel9.msdn.com/Photos/284221.jpg "https://channel9.msdn.com/Photos/284221.jpg")

#### [Scott Hanselman's](http://www.hanselman.com/blog/) [Controlling a Microbric Viper Robot using Windows PowerShell Logo](http://msdn.microsoft.com/coding4fun/hardware/robotics/article.aspx?articleid=1720128&title=Part+2%3a+Controlling+a+Microbric+Viper+Robot+with+an+IR+Serial+Port+using+.NET+and+PowerShell)

Yeah,PowerShell logo embedded into a Windows Form that can
programatically control Robots. ([Video
demo)](https://channel9.msdn.com/ShowPost.aspx?PostID=284221#284221)

 

 

  
[Video: Programming Unreal Tournament AI
bots](http://soapbox.msn.com/video.aspx?vid=44100721-6a96-4e75-9ea5-acf31aabbd08 "Programming Unreal Tournament AI bots")

#### Andy Sterland, James Lissiak, and Tom Randell [.NET Powered Unreal Tournament AI Bots](http://msdn.microsoft.com/coding4fun/gaming/arcade/article.aspx?articleid=1719502&title=Creating+.NET+AI+Bots+for+Unreal+Tournament)

To show off how easy it is to program Unreal Tournament bots, I created
my own "bot" which searches for a player called Dan and kills him
on-site. It's that easy\! Andy, James, and Tom wrote this while students
at University of Hull (UK), and they even held a tournament with
students competing to create the best bot.

**Visual
Basic**

<div class="csharpcode">

``` alt
   1:      Protected Overloads Overrides Sub PerformActions()
```

``` 
   2:          If Me.CurrentGameState.PlayersVisible.Count > 0 Then
```

``` alt
   3:              'You have someone visible you can shoot at
```

``` 
   4:              Dim allPlayers As List(Of UTBotOppState) = Me.CurrentGameState.PlayersVisible
```

``` alt
   5:              For Each player As UTBotOppState In allPlayers
```

``` 
   6:                  If player.Name = "Dan" Then
```

``` alt
   7:                      Console.WriteLine("Attack Dan, His health is: " & player.Health)
```

``` 
   8:   
```

``` alt
   9:                      'the "false" is asking to use alt fire (ex: grenades)
```

``` 
  10:                      Me.BotCommands.Shoot(player.Location, False)
```

``` alt
  11:   
```

``` 
  12:                  End If
```

``` alt
  13:              Next
```

``` 
  14:   
```

``` alt
  15:          Else 'If no visible players, jump and rotate by 90 degrees
```

``` 
  16:              Me.BotCommands.Jump()
```

``` alt
  17:              Me.BotCommands.RotateBy(90)
```

``` 
  18:          End If
```

``` alt
  19:      End Sub
```

</div>

 

**Visual
C\#**

<div class="csharpcode">

``` alt
   1:  protected override void PerformActions()
```

``` 
   2:  {           
```

``` alt
   3:      //Get a count of visible players
```

``` 
   4:      if (this.CurrentGameState.PlayersVisible.Count > 0)
```

``` alt
   5:      {
```

``` 
   6:          //You have someone visible you can shoot at
```

``` alt
   7:          List<UTBotOppState> allPlayers = this.CurrentGameState.PlayersVisible;
```

``` 
   8:          
```

``` alt
   9:          foreach (UTBotOppState player in allPlayers)
```

``` 
  10:          {
```

``` alt
  11:              if (player.Name == "Dan")
```

``` 
  12:              {
```

``` alt
  13:                  Console.WriteLine("Attack Dan, His health is: " + player.Health);
```

``` 
  14:                  //the "false" is asking to use alt fire (ex: grenades)
```

``` alt
  15:                  this.BotCommands.Shoot(player.Location, false);
```

``` 
  16:              }
```

``` alt
  17:          }
```

``` 
  18:      }
```

``` alt
  19:      else //if no visible players, jump and rotate by 90 degrees
```

``` 
  20:      {                
```

``` alt
  21:          this.BotCommands.Jump();
```

``` 
  22:          this.BotCommands.RotateBy(90);
```

``` alt
  23:      }
```

``` 
  24:  }
```

</div>

 

![](http://www.coding4fun.net/images/ComputerControlledRCCarwithCamera_525E/CIMG02193.jpg)

#### [Brian Peek's](http://www.brianpeek.com/blogs/) [Computer-Controlled R/C Car with Wireless Camera](http://msdn.microsoft.com/coding4fun/hardware/robotics/article.aspx?articleid=1507304&title=Computer-Controlled+R%2fC+Car+with+Camera)

Brian shows how to hack an R/C controller to drive an R/C from your
computer, all using Microsoft Robotics Studio. This is so cool that I've
asked him to send me one so I can create "Drive my car" Web app for
Microsofties to take the car for a spin
remotely.

 

![](http://www.coding4fun.net/images/iAccelerate/figure3.png)

#### [Mark Harbakus](http://blogs.claritycon.com/blogs/mike_harkabus/default.aspx) [iAccelerate](http://msdn.microsoft.com/coding4fun/windows/utility/article.aspx?articleid=1709215&title=iAccelerate) Application

See how fast and furious your car is by using an Accelerometer. This is
too tempting to try out
:)

 

 

![](http://www.coding4fun.net/images/DesktopSearchBrowser_81E8/Image3_thumb1.jpg)

#### [Arian Kulp's](http://www.ariankulp.com/) [iTunes-Style Desktop Search](http://msdn.microsoft.com/coding4fun/windows/utility/article.aspx?articleid=1561920&title=Creating+an+Enhanced+File+Search+Dialog+\(Part+1\))

 It works on Vista and it's very cool\! My favorite features is the
search by Old-ness and the dynamic categories. I was easily able to
search for pictures from last year with a 200 ISO speed in fractions of
a second. Arian has another mod (part 2) that I'm sure will be equally
cool and useful.

 

This is just a sampling of recently posted articles by our rock-star
authors...we have lots more cool content coming down the pipeline :)

</div>

</div>
