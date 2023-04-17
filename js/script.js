$("#call").click(
    function()
    {
      getItemID();
    }
    );
  
      function getItemID()
      {
  
          const settings = {
              url: "ajax/itemAttID.php",
              method: "GET",
            };
            
            $.ajax(settings).done(function (response) {
              console.log(response);
              $('#results').html(response);
            });
  
      }