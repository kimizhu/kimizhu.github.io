<div id="page">

# Anders Hejlsberg on TheServerSide.net

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
1/6/2005 8:52:00 AM

-----

<div id="content">

For those of you who haven't seen this, [TheServerSide.NET interviewed
Anders
Hejlsberg](http://www.theserverside.net/talks/videos/AndersHejlsberg/interview.tss?bandwidth=dsl),
chief designer of the C\# language. If you're interested in the design
of the C\# language, untyped versus typed languages and C\#
futures, you'll definitely want to listen or read the transcript for
this interview

Some choice quotes below:

On C\# futures beyond C\# 2.0: *"One of the things that made .NET
incredibly successful was the fact that we took all of that housekeeping
and put it in the platform, garbage collection, type safety, exception
handling, whatever, all these things that programmers just get wrong, if
they have to do it manually. Put them in the platform, just allow you to
think about the algorithms. I am like trying to shift my focus to that
space and try to do some of those same things. Truly integrate the
database with the programing language. Of course, that is a very broad
vision and many people lie on the rocks of unsuccessful database
integration, and I am hoping not to be one of them, but I think we have
some interesting thoughts about it."*

Here's another gem A commonly asked question is whether "yield", the
identifier for C\# 2.0 iterators, is a keyword. Anders goes on to
explain why it's not (versioning) and how they work around not making it
an
identifier

## [Why is introducing a new keyword such a pain? I just never understood that.](http://www.theserverside.net/talks/videos/AndersHejlsberg/dsl/q14.html "click to load the video clip for this question")

*Because if you have an identifier by the same name as that keyword,
that identifier is now an error. So let's say that we had made the yield
keyword. Well it is not actually a keyword. If you look at the way we
design so yield is used by iterators in C\# and there are two new
statements, yield return and yield break. But the yield word in yield
return is actually not a keyword, it is the identifier yield coming
immediately before the keyword return that constitutes yield return,
because that was never a valid thing to say before. But you can still
have, in your financial application, a parameter called double yield,
that is the yield of your investments or whatever and you will not break
that code. It is very subtle, but you know, it is the real world right.
If we tell people, hey your C\# 2.0 upgrade today, and bam, the first
thing that happens is all their code breaks and it is just not a happy
experience. You really have to make sure that the barrier to entry is
nonexistent.*

** 

** 

</div>

</div>
