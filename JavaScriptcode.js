            // global variables and arrays
			var curLoc = 0;		
			var score = 0;
			var NORTH = 0;
			var SOUTH = 1;
			var EAST  = 2;
			var WEST  = 3					
			//global array for buttons visibility 
			var buttons = [ /*N   S   E   W*/ 
					 /*0*/  [ 0,  0,  0,  0],  
					 /*1*/  [ 1,  0,  1,  0], 
					 /*2*/  [ 1,  1,  0,  1], 
					 /*3*/  [ 0,  1,  1,  1], 
					 /*4*/  [ 0,  1,  0,  0], 
					 /*5*/  [ 0,  0,  0,  1], 
					 /*6*/  [ 1,  0,  0,  0],
					 /*7*/  [ 1,  0,  1,  0],
					 /*8*/  [ 0,  0,  0,  0],
					 /*9*/  [ 1,  1,  1,  0],
					/*10*/  [ 0,  1,  1,  0] 
		              ];
            var buttonsDeclare = new Array ("northBtn", "southBtn", "westBtn", "eastBtn");					  
			
		    //global array for navigation 
			var nav = [ /*N   S   E   W*/ 
			     /*0*/  [ 1,  3,  4,  2],  
			     /*1*/  [-1,  0,  6, -1], 
				 /*2*/  [-1, -1,  0, -1], 
 			     /*3*/  [ 0, -1, -1, -1], 
 				 /*4*/  [ 5, -1, 10,  0], 
			     /*5*/  [ 6,  4,  8, -1], 
			     /*6*/  [-1,  5,  7,  1],
				 /*7*/  [-1,  8, -1,  6],
				 /*8*/  [ 7, 10,  9,  5],
				 /*9*/  [-1, -1, -1,  8],
				/*10*/  [ 8, -1, -1,  4] 
		              ];		 
			
		     //Inventory prototype
			function Item() {
			  this.id = "";
			  this.name = "";
			  this.description = "";
			  this.isTaken = "";
			}			
			  //inventory instances 
                var itemMap = new Item();
				itemMap.curLoc = 3;
				itemMap.name = "Map";
				itemMap.description = "There is a map on the piano.";
			    itemMap.isTaken = false;

				var itemFlashlight = new Item();
				itemFlashlight.curLoc = 4;
				itemFlashlight.name = "Flashlight";
				itemFlashlight.description = "There is a flashlight.";
				itemFlashlight.isTaken = false;

				var itemMusicSheet = new Item();
				itemMusicSheet.curLoc = 6;
				itemMusicSheet.name = "Music Sheet";
				itemMusicSheet.description = "There is a music sheet on the floor.";
				itemMusicSheet.isTaken = false;
				
				var itemBook = new Item();
				itemBook.curLoc = 8;
				itemBook.name = "Book";
				itemBook.description = "Wow, there is a book in front of you!";
				itemBook.isTaken = false;		   
		   
		    
			 // global array for items and inventory
			var items = new Array();
			    items[3] = itemMap;
			    items[4] = itemFlashlight;
			    items[6] = itemMusicSheet;
				items[8] = itemBook;
			
		    //global array for accumulated inventory (it is empty as you start playing...)
			var inventory = new Array();
		   
			// Location prototype	
		    function locale() {
			 this.id = "";
		     this.name = "";
			 this.message = "";
			 this.hasVisited = false;
			 this.hasItem = "";
			 this.item = "";
			 this.toString = function() {
				     var text = "";
					 text = this.message + " " + this.item;
					 return text;
				    }	
			}
            // Location Instances 		
			var Loc0_mansion_hall = new locale();
			Loc0_mansion_hall.id = 0;
			Loc0_mansion_hall.name = "mansion's hall";
			Loc0_mansion_hall.message = "You are standing inside a mansion's hall. In the mansion" + 
			                            " there is a canary in a cage covered with black cloth, so" + 
									    " that it does not sing and you cannot hear it. Your aim is" + 
										" to find the bird and release it. If it sings when flies" + 
										" away, you will become the happiest person.";
			Loc0_mansion_hall.hasVisited = false;
			Loc0_mansion_hall.item = "";
			Loc0_mansion_hall.hasItem = false;
						
		    var Loc1_dark_room = new locale();
		    Loc1_dark_room.id = 1;
			Loc1_dark_room.name = "dark room";
			Loc1_dark_room.message = "You entered a dark room with no windows, so you cannot see"+ 
			                         " anything.";
			Loc1_dark_room.hasVisited = false;
			Loc1_dark_room.item = "";
			Loc1_dark_room.hasItem = false;
		
			var Loc2_living_room = new locale();
			Loc2_living_room.id = 2;
			Loc2_living_room.name = "living room";
			Loc2_living_room.message = "You entered a living room, there is a table and an armchair"+ 
			                           " in front of a chimney."; 
			Loc2_living_room.hasVisited = false;
			Loc2_living_room.item = "";
			Loc2_living_room.hasItem = false;
			
			var Loc3_piano_room = new locale();
			Loc3_piano_room.id = 3;
			Loc3_piano_room.name = "piano room";
			Loc3_piano_room.message = "You are in a big room, there is a grand piano in the" +
			                          " middle of the room and nothing else.";
			Loc3_piano_room.hasVisited = false;
			Loc3_piano_room.hasItem = true;
			Loc3_piano_room.item = itemMap.description;
			
			var Loc4_kitchen = new locale();
			Loc4_kitchen.id = 4;
			Loc4_kitchen.name = "kitchen";
			Loc4_kitchen.message = "You have entered a kitchen.";
			Loc4_kitchen.hasVisited = false;
			Loc4_kitchen.item = itemFlashlight.description;
			Loc4_kitchen.hasItem = true;
			
			var Loc5_dining = new locale();
			Loc5_dining.id = 5;
			Loc5_dining.name = "dining";
			Loc5_dining.message = "This is a dining hall. There is a large round table" + 
			                      " in the middle of the room.";
			Loc5_dining.hasVisited = false;
			Loc5_dining.item = "";
			Loc5_dining.hasItem = false;
			
			var Loc6_small_corridor = new locale();
			Loc6_small_corridor.id = 6;
			Loc6_small_corridor.name = "small corridor";
			Loc6_small_corridor.message = "You entered a small and narrow corridor. You can" + 
			                              " see pictures of previous owners of the mansion";
            Loc6_small_corridor.hasVisited = false;										  
			Loc6_small_corridor.item = itemMusicSheet.description;
			Loc6_small_corridor.hasItem = true;
			
			var Loc7_bedroom = new locale();
			Loc7_bedroom.id = 7;
			Loc7_bedroom.name = "bedroom";
			Loc7_bedroom.message = "Now you are in a bedroom. There is a" +
			                       " bad, a desk and an old mirror in the room";
			Loc7_bedroom.hasVisited = false;
			Loc7_bedroom.item = "";
			Loc7_bedroom.hasItem = false;
			
			var Loc8_large_hallway = new locale();
			Loc8_large_hallway.id = 8;
			Loc8_large_hallway.name = "large hallway";
			Loc8_large_hallway.message = "You are in a large hallway now. You" + 
			                             "can see different pictures of previous" + 
									     "owners of the mansion.";
			Loc8_large_hallway.hasVisited = false;
			Loc8_large_hallway.item = itemBook.description;
			Loc8_large_hallway.hasItem = true;
			
			var Loc9_stairs = new locale();
			Loc9_stairs.id = 9;
			Loc9_stairs.name = "stairs";
			Loc9_stairs.message = "You reached stairs that lead to the second floor." + 
			                      "The door to enter that floor is closed, so you" + 
							      "cannot get there now.";
			Loc9_stairs.hasVisited - false;
			Loc9_stairs.item = "";
			Loc9_stairs.hasItem = false;
			
			var Loc10_library = new locale();
			Loc10_library.id = 10;
			Loc10_library.name = "library";
			Loc10_library.message = "This is a library. It is huge with high ceilings" + 
			                        "and large windows. There is an enormous amount" + 
								    "of books here.";
			Loc10_library.hasVisited = false;
			Loc10_library.item = "";
			Loc10_library.hasItem = false;				 
			
		
			// global array for location instances
            var locArray = new Array();
			    locArray[0] = Loc0_mansion_hall,
				locArray[1] = Loc1_dark_room,
				locArray[2] = Loc2_living_room,			
				locArray[3] = Loc3_piano_room,
				locArray[4] = Loc4_kitchen,
				locArray[5] = Loc5_dining,
				locArray[6] = Loc6_small_corridor,
				locArray[7] = Loc7_bedroom,
				locArray[8] = Loc8_large_hallway,
				locArray[9] = Loc9_stairs,
				locArray[10] = Loc10_library
			
				
             //initial function
		   function init() {
			    presentMessage(Loc0_mansion_hall);				
				buttonVisibility();			
			    document.getElementById("picture").style.visibility = "hidden";
				takeButtonVisibility();
				document.getElementById("mainText").readOnly = true;
				document.getElementById("scoreText").readOnly = true;
			}			
				
			function btn_take() {
				if (curLoc === 3 && !itemMap.isTaken) {
				    itemMap.isTaken = true;
					Loc3_piano_room.item = "";
					inventory.push(itemMap.name);
					document.getElementById("picture").style.visibility = "visible";					
					message = "You have taken the " + itemMap.name + "!";
                    checkScore();
		            dspScore();	
                    document.getElementById("takeButton").disabled = true;					
				 } else {			 
			        if (curLoc === 4 && !itemFlashlight.isTaken) {
					    itemFlashlight.isTaken = true;
						Loc4_kitchen.item = "";
						inventory.push(itemFlashlight.name);
					    message = "You have taken the " + itemFlashlight.name + "!";	
                        checkScore();
		                dspScore();	
                        document.getElementById("takeButton").disabled = true;	
                      } else {
                          if (curLoc === 6 && !itemMusicSheet.isTaken) {
						      itemMusicSheet.isTaken = true;
							  Loc6_small_corridor.item = "";		
                              inventory.push(itemMusicSheet.name);							  
					          message = "You have taken the " + itemMusicSheet.name + "!";
                              checkScore();							  
		                      dspScore();	
                              document.getElementById("takeButton").disabled = true;
                            } else {
                                if (curLoc === 8 && !itemBook.isTaken) {
									itemBook.isTaken = true;
									Loc8_large_hallway.item = "";		
									inventory.push(itemBook.name);							  
									message = "You have taken the " + itemBook.name + "!";
									checkScore();							  
									dspScore();									
									document.getElementById("takeButton").disabled = true;							  
			                    } else {
					                  message = "There is nothing to take in this room.";
						            } 
					          }
			             }
				    }
			  presentMessage(message);
			}								
	     
			//navigation functions		   
		    function btn_go_North() {
			    nextLoc(NORTH);
				presentMessage(locArray[curLoc].message);				
				checkScore();
				takeButtonVisibility();
				buttonVisibility();
				flashlightPuzzle();
			}
			
			function btn_go_South() {
			    nextLoc(SOUTH);
				presentMessage(locArray[curLoc].message);
				checkScore();
				takeButtonVisibility();
				buttonVisibility();
			}
			
			function btn_go_East() {
			    nextLoc(EAST);
				presentMessage(locArray[curLoc].message);
				checkScore();
				takeButtonVisibility();
				buttonVisibility();
			}
			
			function btn_go_West() {
			    nextLoc(WEST);
				presentMessage(locArray[curLoc].message);
				checkScore();
				takeButtonVisibility();
				buttonVisibility();
				flashlightPuzzle();
			}
			
             function nextLoc(dir) {
			 var newLoc = nav [curLoc][dir];
			     if (newLoc >= 0) {
				    curLoc = newLoc;
				} else {
				    presentMessage("You cannot go that way!");
					}
			}
			
			//utility functions
            function txtCommand_keypress(e) {
				 if (e.which === 13) {
				     document.getElementById("go").onclick();
					 }
			}
				  
			function btnGo_click() {             			
               txtCommand.value = txtCommand.value.toLowerCase();				  
			    if (txtCommand.value === "north" || txtCommand.value === "n") {				
			       btn_go_North();					
			       } else {
			           if (txtCommand.value === "south" || txtCommand.value === "s") {
				           btn_go_South();
				         } else {
					         if (txtCommand.value === "east" || txtCommand.value === "e") {
						         btn_go_East();
					           } else {
						           if (txtCommand.value === "west" || txtCommand.value === "w") {
							           btn_go_West();
							         } else {
							             if (txtCommand.value === "take" || txtCommand.value === "t") {
							                 btn_take();
							             } else {
	   					                     unknownCommand();
											}
										}
						             }
					            }
			               }
		            }
		  
		    function unknownCommand() {
		      presentMessage("I don't understand your command.");
		   }
	   				   
		    function showInventory() {	      
			   message = "Your inventory includes:" + " " + inventory + " ";
			   presentMessage(message);			  
		   }

		    function btn_Help() {
		        message = "Navigate with buttons north, south, east, or west." + 
				          " Collect items available with by pressing Take button" + 
						  " or typing take into the command text area. Check your" + 
						  " inventory by pressing My Inventory button. Score is" + 
						  " reflected on the right. To see the map, you have to find it";
				presentMessage(message);
		   }
		   		  
		    function presentMessage(message) {
		      var target = document.getElementById("mainText");
		      if (this.hasItem = true) {
			      target.value = message + " " + locArray[curLoc].item + "\n\n" + target.value;
			  } else {			   
                  target.value = message + "\n\n" + target.value;
			  }			
			   checkScore();
		       dspScore();
            }	
									
			function takeButtonVisibility() {
			    if (curLoc === 3 && !itemMap.isTaken) {
				    document.getElementById("takeButton").disabled = false;
				    } else {
					    if (curLoc === 4 && !itemFlashlight.isTaken){				        
						    document.getElementById("takeButton").disabled = false;
						  } else { 
	                           if (curLoc === 6 && !itemMusicSheet.isTaken) {				        
						           document.getElementById("takeButton").disabled = false;
					             } else {
                                      if (curLoc === 8 && !itemBook.isTaken) {				        
						                  document.getElementById("takeButton").disabled = false;
					                    } else { 
                                             document.getElementById("takeButton").disabled = true;
                                            }		 
				       
				                        }
						        }
						}
			}
			
		// puzzle elements
        function btn_Play() {
		    presentMessage("Wow, you are playing music! Do you hear the bird singing? It is somewhere close!");
		}
	  
	    function btn_Play_Visibility() {		
		   if (itemMusicSheet.isTaken = true && curLoc === 3) {
		       document.getElementById("play").disabled = false;
		   } else {
		        document.getElementById("play").disabled = true;
		   }
		}
			
        function buttonVisibility() {
		   btn_Use_Visibility();
		   btn_Play_Visibility();
		   for (var i=0;  i < buttonsDeclare.length; i++) {
			    var disable_Main_Buttons = 0;
			    disable_Main_Buttons = buttons [curLoc] [i];
			    if (disable_Main_Buttons === 1) {
			        document.getElementById(buttonsDeclare[i]).disabled = true;
			    } else {
			        document.getElementById(buttonsDeclare[i]).disabled = false;
				}
            }
		}
        			
        function btn_Use() {
		    presentMessage("You are using the flashlight and now you can see an old closet in the room.");
		}
		
		function btn_Use_Visibility() {
		    if (curLoc === 1 && itemFlashlight.isTaken) {
			    document.getElementById("use").disabled = false;
		    } else {
		        document.getElementById("use").disabled = true;
		    }
		}
		   
		function flashlightPuzzle() {
            if (curLoc === 1 && itemFlashlight.isTaken) {
			    presentMessage("You entered a dark room with no windows, so you cannot see"+ 
			                             " anything. You have a flashlight, use it to see what's" + 
										 "inside the room! Press Use button.");			
            }
        }   		
		  // functions for keeping and showing score!
		   function checkScore() {
		     if (curLoc === 0) {
		         if (! Loc0_mansion_hall.hasVisited) {      
			         score = score + 5;
				     Loc0_mansion_hall.hasVisited = true;
				 }
		     }		     
		    if (curLoc === 1) {			
			      if (! Loc1_dark_room.hasVisited) {			  
			          score = score + 5;
				      Loc1_dark_room.hasVisited = true;
				  }
			 }				 							 		
			if (curLoc === 2) {
			     if (! Loc2_living_room.hasVisited) {
			         score = score + 5;
				     Loc2_living_room.hasVisited = true;
				  }
			 }				   			   
			if (curLoc === 3) {
				  if (! Loc3_piano_room.hasVisited) {
			          score = score + 5;
				      Loc3_piano_room.hasVisited = true;
			       }
			 }				 
			if (curLoc === 4) {
			    if (! Loc4_kitchen.hasVisited) {
			        score = score + 5;
				    Loc4_kitchen.hasVisited = true;				 
			     }
			 }				 
			if (curLoc === 5) {
			    if (! Loc5_dining.hasVisited) {
			        score = score + 5;
				    Loc5_dining.hasVisited = true;				 
			     }
			 }				 
			if (curLoc === 6) {
			    if (! Loc6_small_corridor.hasVisited) {
			        score = score + 5;
				    Loc6_small_corridor.hasVisited = true;				 
			     }
			 }				 
			if (curLoc === 7) {
			    if (! Loc7_bedroom.hasVisited) {
			        score = score + 5;
				    Loc7_bedroom.hasVisited = true;				 
			     }				 
			 }			 
			 if (curLoc === 8) {
			    if (! Loc8_large_hallway.hasVisited) {
			        score = score + 5;
				    Loc8_large_hallway.hasVisited = true;				 
			     }
			 }			 
			 if (curLoc === 9) {
			    if (! Loc9_stairs.hasVisited) {
			        score = score + 5;
				    Loc9_stairs.hasVisited = true;				 
			     }
			 }			 
			 if (curLoc === 10) {
			    if (! Loc10_library.hasVisited) {
			        score = score + 5;
				    Loc10_library.hasVisited = true;				 
			     }
			 }
			 if (curLoc === 3) {
                 if (itemMap.isTaken) {
                     score = score + 2.5;
                 }
			 }
			 if (curLoc === 4) {
                 if (itemFlashlight.isTaken) {
                     score = score + 2.5;
                 }
			 }
			 if (curLoc === 6) {
                 if (itemMusicSheet.isTaken) {
                     score = score + 2.5;
                 }
			 }
			 if (curLoc === 8) {
                 if (itemBook.isTaken) {
                     score = score + 2.5;
                 }
			 }
          }				 
			 
		      			
		function dspScore() {			         
			     document.getElementById("scoreText").value = "Score:" + score;
		}

		
		
		
		
