function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(110,250);
    video =createCapture(VIDEO);
    video.hide();

    filter_tint="";
}
function draw()
{
    image(video,0,0,600,400);
    tint(filter_tint);
}
function take_snapshot()
{
    save('filter_image.png')
}
function apply_filter()
{
    filter_tint=document.getElementById("colour").value;
}