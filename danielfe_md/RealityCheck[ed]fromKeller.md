<div id="page">

# Reality Check\[ed\] from Keller

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
9/4/2003 6:52:00 PM

-----

<div id="content">

\[Sorry for not posting, but I've been \*way\* too busy, and blogging is
the first thing to cut when push comes to shove\]

After my last post on Pascal's Triangle, Brian Keller and I were in his
office when he shot me a concerned look and wondered why anyone would
care about Pascal's triangle.  Some examples include calculating
the odds of winning a pick six lotto ticket, or knowing how many
possible hands you can have with a deck of cards.  Given an N of 52
(cards), and an R of 5 (\# of cards in a hand) we can plug this into our
code and see that there are 2,598,960 unique hands for poker.  I also
switched my code to use double because of arithmetic overflows for
ints.  By default, C\# does not do boundary checking for arithmetic
operations and values silently overflow for runtime expressions. 

Note: Constant expressions don't need the checked keyword as they are
checked at compile time rather then runtime. 

 There are a couple of ways you can check for overflows, including the
checked keyword and compiler switch shown below:

**Use for a particular expression:**  

``` 
 a = checked(b * c);  
```

**Use it for a block of code**  

    checked 
    {
        a = b * c;
        d = e * f;
    }

**Use Visual Studio to check all arithmetic operations in a given
project**  

1.  Right click on the project name in Solution Explorer
2.  Select Properties
3.  Under the Configuration Options folder select Build
4.  Change "Check for arithmetic overflow" from false to true

**Use the command line compiler to do the same thing**

1.  Run:
    
        csc.exe foo.cs /checked

**Tip**: You can also run /checked with a **+** or **-** symbol telling
the compiler whether you want it to throw an exception if there is an
overflow.

    csc.exe foo.cs /checked+

If you want to turn off arithmetic checking at *compile* time for
constants (please tell me why you would want to do this), you can
also use the unchecked keyword:

    a = unchecked(2 * 3);

``` 
 
```

</div>

</div>
