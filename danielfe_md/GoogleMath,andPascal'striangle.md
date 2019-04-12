<div id="page">

# Google Math, and Pascal's triangle

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
8/25/2003 7:42:00 AM

-----

<div id="content">

Google recently added a cool [calulator
feature](http://www.google.com/help/features.html#calculator).  
Simply enter a math formula like "[5 \*
5](http://www.google.com/search?q=5*5)" into Google and it will return a
results page with the answer. 

 Asking Google: "[The answer to life, the universe and
everything](http://www.google.com/search?q=the%20answer%20to%20life,%20the%20universe%20and%20everything)"
returns the calculator and the answer 42, based on the calculation by
Deep Thought, the super computer in the Douglas Adam's classic "Life the
Universe and Everything".  
Google also links to a [Wikipedia
entry](http://www.wikipedia.org/wiki/The_Answer_to_Life,_the_Universe,_and_Everything) that
explains how 6 \* 9 = 42 (hint: not base 10) and how code written in C
using macros also correctly multiplies 6\*9=42.  I also work in building
42 which makes it that much more special :)

Another cool feature I discovered is that Google does factorials.
Entering [4\!](http://www.google.com/search?q=4!) and you'll see
4\*3\*2\*1 (x \* x-1) or 24.  This reminded me of French mathematician
Blaise Pascal who's Pascal triangle solves probabability questions. For
example, look at the triangle below:

``` 
1          1   1
    
2           1       2       1

3       1   3   3   1

4       1       4       6       4       1

5   1   5   10  10  5   1

6   1       6      15        20      15      6       1

```

Both parents sum to be the total of each child:

    1  2
        3

and

    4  6
       10

The numbers horizontally represents the possibilities of elements being
picked.  Let's use the 4th row and letters A, B, C, D as examples. The
fourth row represents the numbers 1, 4, 6, 4, 1 which represent the
probability of choosing 0, 1, 2, 3, and 4 of the letters. Let's look at
each of these:

0 - There is only one option for picking none of the letters.  
1 - Since there are four unique letters, there are four unique
possibilities.   
2 - There are six ways of picking exactly two letters: AB, AC, AD, BC,
BD, CD.  
3 - There are four ways of picking three out of the four elements,
simply choose which letter you are not going to pick.  
4 - There is only one way to select all of the letters.

Whew, with that explained, we can look at the mathematical formula for
this:  
N\!/(R\!(N\!-R\!)) where N represents the number of elements and R
represents the number of matches.

Using our example above, where N is 4 and we'll set 2 as the number of
matches, we get:

[ 4\!/(2\!(4-2)\!)](http://www.google.com/search?q=4!/\(2!\(4-2\)!\)). 
Google correctly answers this as 6, matching the value in Pascal's
triangle. 

If you didn't have Google, you can represent Pascal's formula in C\#
with the code below: 

``` 
   
class f
{
    //Factorial
    private static long fac(long x)
    {
        for(long i=x-1;i>0;i--)
        {
            x *= i;         
        }
        return x;
    
    }

    public static long Pascal(long n, long r)
    {
        
        return fac(n)/(fac(r) * fac(n-r));
    
    }
}
```

Another interesting mathematical pattern in Pascal's triangle is the
Fibonacci sequence on the triangle diagonals.

|              |               |
| ------------ | ------------- |
| Fibonacci \# | Diagonal \#'s |
| 1            | 1             |
| 2            | 1+1           |
| 3            | 1+2           |
| 5            | 1+3+1         |
| 8            | 1+4+1         |

Cool stuff, now do we call Google's calculator a web service?

</div>

</div>
