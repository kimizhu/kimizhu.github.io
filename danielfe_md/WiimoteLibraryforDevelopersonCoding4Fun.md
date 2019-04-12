<div id="page">

# Wiimote Library for Developers on Coding4Fun

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
3/14/2007 1:12:00
PM

-----

<div id="content">

![](http://www.coding4fun.net/images/ManagedLibraryforNintendosWiimote_E0DF/wmtester1.png)

[Brian Peek](http://brianpeek.com/blogs/default.aspx) just published his
latest article, a [.NET library for easy programming of a Nintendo
Wiimote
controller](http://msdn.microsoft.com/coding4fun/hardware/article.aspx?articleid=1879033).
His article and project on Channel9 includes the full source code for
the library and how he built everything. The cool part is of course how
easy it is to use the library as shown below...  

1.  **Create a Wiimote class**
2.  **Connect to the controller**  
    VB: wm.Connect()  
    C\#: wm.Connect();  
3.  **Add an event handler for the OnWiimoteChanged event**
4.  **Poll the Wiimote State  
    **  
    VB/C\#: wm.WiimoteState.ButtonState.A

 

You can find a Wiimote Test project that walks through all of the
properties available (that's the screenshot above) in [Brian's download
as well.](https://channel9.msdn.com/ShowPost.aspx?PostID=291133) Here's
a very quick example that pops a message box if you hit the **A
button.  
**

**VB Code that checks if Button A is
pressed**

<div class="csharpcode">

``` alt
Imports WiimoteLib
```

    Imports System.Windows.Forms

``` alt
 
```

    Public Class Form2

``` alt
    'Wiimote Class
```

``` 
    Dim WithEvents wm As Wiimote = New Wiimote()
```

``` alt
 
```

``` 
    Private Sub Form2_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
```

``` alt
        wm.Connect()
```

``` 
    End Sub
```

``` alt
 
```

``` 
    Private Sub wm_OnWiimoteChanged(ByVal sender As System.Object, ByVal e As WiimoteChangedEventArgs) Handles wm.OnWiimoteChanged
```

``` alt
        If (wm.WiimoteState.ButtonState.A = True) Then
```

``` 
            MessageBox.Show("You pressed the A button!")
```

``` alt
        End If
```

``` 
    End Sub
```

``` alt
End Class
```

</div>

**C\# Code that checks if Button A is pressed**

``` csharpcode
public partial class Form2 : Form
{
    public Form2()
    {
        InitializeComponent();
    }

    Wiimote wm = new Wiimote();
    private void Form2_Load(object sender, EventArgs e)
    {            
        //use this to listen to Wiimote events
        wm.OnWiimoteChanged += new WiimoteChangedEventHandler(wm_OnWiimoteChanged);
        wm.Connect();
    }

    void wm_OnWiimoteChanged(object sender, WiimoteChangedEventArgs args)
    {            
        if (wm.WiimoteState.ButtonState.A == true)
        {
            MessageBox.Show("You pressed the A button!");                
        }
    }
}
```

``` csharpcode
 
```

``` csharpcode
 
```

</div>

</div>
