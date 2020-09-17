/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         listaResp =(["item1",
         	 "item2",
             "item3",
             "item4",
             "item5",
             "item6",
             "item7",
             "item8",
             "item9",
             "item10",
             "item11",
             "item12"
             ]);
         
         listaResp=  listaResp.sort(function() {return Math.random() - 0.5});
         
         	sym.$(listaResp[0]).css({"left":"26px","top":"178px"});
         	sym.$(listaResp[1]).css({"left":"26px","top":"276px"});
         	sym.$(listaResp[2]).css({"left":"26px","top":"373px"});
         	sym.$(listaResp[3]).css({"left":"26px","top":"476px"});
         
         	sym.$(listaResp[4]).css({"left":"140px","top":"178px"});
         	sym.$(listaResp[5]).css({"left":"140px","top":"276px"});
         	sym.$(listaResp[6]).css({"left":"140px","top":"373px"});
         	sym.$(listaResp[7]).css({"left":"140px","top":"476px"});
         
         	sym.$(listaResp[8]).css({"left":"250px","top":"178px"});
         	sym.$(listaResp[9]).css({"left":"250px","top":"276px"});
         	sym.$(listaResp[10]).css({"left":"250px","top":"373px"});
         	sym.$(listaResp[11]).css({"left":"250px","top":"476px"});
         
         
         
         Correctas=0;
         
         seleccionadas=[];
         Contador=0;
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1640, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_instrucciones}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("instruccion").show();
         
         sym.getSymbol("instruccion").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1295, function(sym, e) {
         // introducir código aquí
         
         sym.$(".fichas").draggable({revert:'invalid'});
         
         sym.$(".cajas").droppable({
           accept: sym.$(".fichas"),
           drop: handleDropEvent,
         
         });
         
         
         
         
         function handleDropEvent(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            //ui.draggable.position( { of: $(this), my: 'left', at: 'top' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top', at: 'center'+'top' } );
             ui.draggable.position( { of: $(this), my: 'center'+'top',  at: 'center'+'right'} );
             ui.draggable.draggable( 'option', 'revert', false );
         
             var elem_dropable =$(this).attr("id");
             Contador++;
           switch(elem_dropable ) {
             case 'Stage_caja1':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item11'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja2':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item4'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja3':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item10'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
            case 'Stage_caja4':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item12'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
            case 'Stage_caja5':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item3'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja6':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item7'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja7':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item6'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja8':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item2'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja9':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item8'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja10':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item1'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja11':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item5'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
             case 'Stage_caja12':
                 var elem= $(ui.draggable).attr("id");
         		  //pregunta="pre2";
                 if (elem=='Stage_item9'){
         				// Mostrar un elemento 
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/si.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$("si").show();	
         				sym.$('si').attr('src','images/no.svg');	
         				sym.$("fail")[0].play();								 
         		  }
             break;
         	
         
         
         }
         
         // Mostrar un elemento 
         //sym.$("boton_siguiente").show();
         //sym.play(Siguiente);
         if (Contador==12){
         	sym.play('fin');
         }
         
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1917, function(sym, e) {
         // introducir código aquí
         if(Correctas==12){
         	// Mostrar un elemento 
         	sym.$("bien").show();	
         	sym.getSymbol("bien").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("aplauso_largo")[0].play();
         
         
         }else{
         	sym.$("mal").show();	
         	sym.getSymbol("mal").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("abucheo")[0].play();
         
         }
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instruccion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("instruccion");
   //Edge symbol end:'instruccion'

   //=========================================================
   
   //Edge symbol: 'bien'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.close();

      });
      //Edge binding end

   })("bien");
   //Edge symbol end:'bien'

   //=========================================================
   
   //Edge symbol: 'mal'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         location.reload();

      });
      //Edge binding end

   })("mal");
   //Edge symbol end:'mal'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1820150628");