<div id="page">

# Settings1.Designer.cs Bug: Multiple settings files

[Dan Fernandez -
MSFT](https://social.msdn.microsoft.com/profile/Dan%20Fernandez%20-%20MSFT)
4/27/2008 10:11:26 PM

-----

<div id="content">

I ran into this
[bug](http://connect.microsoft.com/VisualStudio/feedback/ViewFeedback.aspx?FeedbackID=112716)
today which was unfortunately closed as can't repro. I was renaming some
AppSettings variable names (right click on a Project's  Properties and
go to the Settings tabs) and deleting some other settings, when I did a
Search/Replace for the entire solution and somehow wound up with a
duplicate Settings.Designer.cs file named Settings1.Designer.cs. This
was effectively a clone of Settings.Designer.cs which meant:

  - IntelliSense would report that any AppSettings variables were
    declared multiple times
  - The project wouldn't compile because the variables were already
    declared

The fix was to

  - From the Error menu, double click the Settings1.Designer.cs file to
    open it. Right click on the file and select **Open Containing
    Folder** and backup the the offending file(s) first (just in case).
  - After backing up, delete the **Settings1.Designer.cs** file
  - Switch back to VS and ensure **Show All Files** is selected in the
    **Solution Explorer**
  - Expand Settings.settings in the Solution Explorer and manually
    delete Settings1.Designer.cs (and if prompted say yes to removal
    from source control)
  - Select Build...Clean Project... (or Solution as appropriate)

You should be good to go, if you get an error about a missing file, you
may need to manually open your **csproj** or **sln** file in Notepad and
ensure that the MSBuild script doesn't contain a link to
Settings1.Designer.cs.

</div>

</div>
