(function(){
   var quoteList=[
      "i cant remember my dreams 
      when i was young i never had any fun",
      "i wanna be haunted 
       i wanna be loved 
       i want a lot of friends and 
       a lot of drugs 
       i wanna be haunted 
       i wont leave my bed 
       i wont go crazy and 
       i wont get sad",
      "i can hear you moving around downstairs

dragging your feet as you walk back and forth through the house

running your hand over the piano keys absentmindedly as you pass by

i want to join you

i sit up slowly in my bed

its dark outside but theres a light glowing in the yard and its coming in through the windows

i can hear the wind blowing the leaves around

i hear your voice downstairs and i want to join you

turning away, i walk down the hallway to the stairs where i sit and wait

the noises have all stopped and i see you standing by the window with your back to me, the light from the yard wrapping around your hair

i want to say something but i cant speak

the room starts to fade and there is only you in the light and nothing else"
   ];

   var showQuote=function(){
      document.getElementById("nullRandomQuote").appendChild(
         document.createTextNode(
            quoteList[0|(Math.random()*quoteList.length)]
         )
      );
   };
   
   if(window.addEventListener)
      window.addEventListener("load",showQuote,false);
   else if(window.attachEvent)
      window.attachEvent("onload",showQuote);
})();