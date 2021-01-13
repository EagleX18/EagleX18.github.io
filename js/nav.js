jQuery(function ()
{
    $("nav .mobile .toggle").on("click", function (e)
    {
        isVisible = $("nav .mobile ul").hasClass("visible");

        if (isVisible)
        {
            $("nav .mobile ul").removeClass("visible");
            $("nav .mobile ul").addClass("hidden");
        }
        else
        {
            $("nav .mobile ul").removeClass("hidden");
            $("nav .mobile ul").addClass("visible");
        }
    });
});