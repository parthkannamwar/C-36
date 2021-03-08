class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('h1')
      title.html("Multiplayer Car Racing Game");
      title.position( width/2  , 100   );
      
      var input = createInput("Your Name Here");
      var button = createButton('   Start   ');
     
      
      input.position(  width/2  ,200   );
      button.position(  width/2 ,300   );

      button.mousePressed(function()
                          {
                               input .hide();
                               button .hide();
  
                                var name = input.value();

                                playerCount=playerCount+1;

                               player.updateName(name);
                               player.updateCount(playerCount);

                                var greeting = createElement('h3');
                                greeting.html("Welcome, " +   name     );
                                greeting.position(  width/2,200 );
                         });

    }
}
