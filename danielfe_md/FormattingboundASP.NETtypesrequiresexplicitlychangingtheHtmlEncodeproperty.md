<div id="page">

# Formatting bound ASP.NET types requires explicitly changing the HtmlEncode property

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
2/8/2006 10:46:00 AM

-----

<div id="content">

I ran into this one while migrating our Beta 2 code to VS RTM for an
internal reporting site, but the behavior for ASP.NET 2.0 changed within
betas and, in short, anytime you want to add a formatting string,
like any of the [numeric or date format
strings](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconformattingtypes.asp) in
a bound field , you have to explicitly set the HTMLEncode property to
"false".

Here's what your code should look like with the newly added property in
bold.

\<asp:BoundField DataField="Total" DataFormatString="{0:\#,\#\#\#}" 
**HtmlEncode="False"** /\>

<table>
<tbody>
<tr class="odd">
<td><strong>Before HtmlEncode property</strong></td>
<td><strong>After HtmlEncode property</strong></td>
</tr>
<tr class="even">
<td>Total<br />
100000000</td>
<td>Total<br />
100,000,000</td>
</tr>
</tbody>
</table>

Why does ASP.NET need the explicit HtmlEncode property? From an internal
thread, the short answer is that ASP.NET will by default assume the
value is html encoded and then treat it like a string which rules out
numeric/date formatting.

</div>

</div>
