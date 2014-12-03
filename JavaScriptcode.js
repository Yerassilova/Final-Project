            // global variables and arrays
			var curLoc = 0;		
			var score = 0;
			//global array for accumulated inventory (it is empty as you start playing...)
			var inventory = new Array();
			// global array for location instances
            var locArray = [Loc0_mansion_hall,
							Loc1_dark_room,
							Loc2_living_room,			
							Loc3_piano_room,
							Loc4_kitchen,
							Loc5_dining,
							Loc6_small_corridor,
							Loc7_bedroom,
							Loc8_large_hallway,
							Loc9_stairs,
							Loc10_library];
				
		    //global array for navigation 
			var navigation = new Array(    /*N   S   E   W*/ 
			                        /*0*/  [ 1,  3,  4,  2]  
									/*1*/  [-1,  0,  6, -1] 
								    /*2*/  [-1, -1,  0, -1] 
 									/*3*/  [ 0, -1, -1, -1] 
 								    /*4*/  [ 5, -1, 10,  0] 
								    /*5*/  [ 6,  4,  8, -1] 
								    /*6*/  [-1,  5,  7,  1] 
						            /*7*/  [-1,  8, -1,  6] 
							        /*8*/  [ 7, 10,  9,  5] 
								    /*9*/  [-1, -1, -1,  8] 
								   /*10*/  [ 8, -1, -1,  4] 
		                    )		 
		
			// global array for items and inventory
			var items = new Array();
			    items[3] = itemMap;
			    items[4] = itemFlashlight;
			    items[6] = itemMusicSheet;
				items[8] = itemBook;
            //global variables for score
     		var hasVisitedRoom0 = false;
		    var hasVisitedRoom1 = false;
		    var hasVisitedRoom2 = false;
		    var hasVisitedRoom3 = false;
		    var hasVisitedRoom4 = false;
			var hasVisitedRoom5 = false;
			var hasVisitedRoom6 = false;
			var hasVisitedRoom7 = false;
			var hasVisitedRoom8 = false;
			var hasVisitedRoom9 = false;
			var hasVisitedRoom10 = false;
			
		   //initial function
		   function init() {
			    updateDisplay(Loc0_mansion_hall);
				buttonVisibility();			
			    document.getElementById("picture").style.visibility = "hidden";
				takeButtonVisibility();
				document.getElementById("mainText").readOnly = true;
				document.getElementById("scoreText").readOnly = true;
			}	
		   
			// Location prototype	
		    function locale() {
			 this.id = "";
		     this.name = "";
			 this.message = "";
			 this.hasItem = "";
			 this.item = function () {
			 
			 }
			 this.toString = function() {
				     var text = "";
					 text = this.message + " " + this.item;
					 return text;
				 }			 
			 }
		
			  //Inventory prototype
			function Item() {
			  this.id = "";
			  this.name = "";
			  this.message = "";
			  this.isTaken = "";
			  }
			  //inventory instances
                var itemMap = new Item();
				itemMap.curLoc = 3;
				itemMap.name = "Map";
				itemMap.message = "There is a map on the table.";
			    itemMap.isTaken = false;

				var itemFlashlight = new Item();
				itemFlashlight.curLoc = 4;
				itemFlashlight.name = "Flashlight";
				itemFlashlight.message = "There is a flashlight.";
				itemFlashlight.isTaken = false;

				var itemMusicSheet = new Item();
				itemMusicSheet.curLoc = 6;
				itemMusicSheet.name = "Music Sheet";
				itemMusicSheet.message = "There is a music sheet on the floor.";
				itemMusicSheet.isTaken = false;
				
				var itemBook = new Item();
				itemBook.curLoc = 8;
				itemBook.name = "Book";
				itemBook.message = "Wow, there is a book in front of you!";
				itemBook.isTaken = false;
								
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
					    message = "You have taken a " + itemFlashlight.name + "!";	
                        checkScore();
		                dspScore();	
                        document.getElementById("takeButton").disabled = true;	
                      } else {
                          if (curLoc === 6 && !itemMusicSheet.isTaken) {
						      itemMusicSheet.isTaken = true;
							  Loc6_small_corridor.item = "";		
                              inventory.push(itemMusicSheet.name);							  
					          message = "You have taken " + itemMusicSheet.name + "!";
                              checkScore();							  
		                      dspScore();	
                              document.getElementById("takeButton").disabled = true;
                            } else {
                                if (curLoc === 8 && !itemBook.isTaken) {
									itemBook.isTaken = true;
									Loc8_large_hallway.item = "";		
									inventory.push(itemBook.name);							  
									message = "You have taken " + itemBook.name + "!";
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
			// Location Instances			
			var Loc0_mansion_hall = new locale();
			Loc0_mansion_hall.id = 0;
			Loc0_mansion_hall.name = "mansion's hall";
			Loc0_mansion_hall.message = "You are standing inside a mansion's hall. In the mansion" + 
			                            " there is a canary in a cage covered with black cloth, so" + 
									    " that it does not sing and you cannot hear it. Your aim is" + 
										" to find the bird and release it. If it sings when flies" + 
										" away, you will become the happiest person.";;
			Loc0_mansion_hall.item = "";
			Loc0_mansion_hall.hasItem = false;
						
		    var Loc1_dark_room = new locale();
		    Loc1_dark_room.id = 1;
			Loc1_dark_room.name = "dark room";
			Loc1_dark_room.message = "You entered a dark room with no windows, so you cannot see"+ 
			                         " anything...";
			Loc1_dark_room.item = "";
			Loc1_dark_room.hasItem = false;
		
			var Loc2_living_room = new locale();
			Loc2_living_room.id = 2;
			Loc2_living_room.name = "living room";
			Loc2_living_room.message = "You entered a living room, there is a table and an armchair"+ 
			                           " in front of a chimney."; 
			Loc2_living_room.item = "";
			Loc2_living_room.hasItem = false;
			
			var Loc3_piano_room = new locale();
			Loc3_piano_room.id = 3;
			Loc3_piano_room.name = "piano room";
			Loc3_piano_room.message = "You are in a big room, there is a grand piano in the" +
			                          " middle of the room and nothing else.";
			Loc3_piano_room.hasItem = true;
			Loc3_piano_room.item = itemMap.message;
			
			var Loc4_kitchen = new locale();
			Loc4_kitchen.id = 4;
			Loc4_kitchen.name = "kitchen";
			Loc4_kitchen.message = "You have entered a kitchen.";
			Loc4_kitchen.item = itemFlashlight.message;
			Loc4_kitchen.hasItem = true;
			
			var Loc5_dining = new locale();
			Loc5_dining.id = 5;
			Loc5_dining.name = "dining";
			Loc5_dining.message = "This is a dining hall. There is a large round table" + 
			                      " in the middle of the room.";
			Loc5_dining.item = "";
			Loc5_dining.hasItem = false;
			
			var Loc6_small_corridor = new locale();
			Loc6_small_corridor.id = 6;
			Loc6_small_corridor.name = "small corridor";
			Loc6_small_corridor.message = "You entered a small and narrow corridor. You can" + 
			                              " see pictures of previous owners of the mansion"; 
			Loc6_small_corridor.item = itemMusicSheet.message;
			Loc6_small_corridor.hasItem = true;
			
			var Loc7_bedroom = new locale();
			Loc7_bedroom.id = 7;
			Loc7_bedroom.name = "bedroom";
			Loc7_bedroom.message = "Now you are in a bedroom. There is a" +
			                       " bad, a desk and an old mirror in the room";
			Loc7_bedroom.item = "";
			Loc7_bedroom.hasItem = false;
			
			var Loc8_large_hallway = new locale();
			Loc8_large_hallway.id = 8;
			Loc8_large_hallway.name = "large hallway";
			Loc8_large_hallway.message = "You are in a large hallway now. You" + 
			                             "can see different pictures of previous" + 
									     "owners of the mansion.";
			Loc8_large_hallway.item = itemBook.message;
			Loc8_large_hallway.hasItem = true;
			
			var Loc9_stairs = new locale();
			Loc9_stairs.id = 9;
			Loc9_stairs.name = "stairs";
			Loc9_stairs.message = "You reached stairs that lead to the second floor." + 
			                      "The door to enter that floor is closed, so you" + 
							      "cannot get there now.";
			Loc9_stairs.item = "";
			Loc9_stairs.hasItem = false;
			
			var Loc10_library = new locale();
			Loc10_library.id = 10;
			Loc10_library.name = "library";
			Loc10_library.message = "This is a library. It is huge with high ceilings" + 
			                        "and large windows. There is an enormous amount" + 
								    "of books here.";
			Loc10_library.item = "";
			Loc10_library.hasItem = false;
			
           //navigation functions
		    function btn_go_North() {
		    if (curLoc === 3) {
			    curLoc = 0;               
                updateDisplay(Loc0_mansion_hall);			
			   } else {
			       if (curLoc === 0) {
				       curLoc = 1;	
                       updateDisplay(Loc1_dark_room);					   
			        } else {
					    if (curLoc === 4) {
				            curLoc = 5;	
                             updateDisplay(Loc5_dining);
						 } else {
							  if (curLoc === 5) {
				                  curLoc = 6;	
                                  updateDisplay(Loc6_small_corridor);
							    } else {
					                if (curLoc === 8) {
				                        curLoc = 7;	
                                        updateDisplay(Loc7_bedroom);
						              } else {
							               if (curLoc === 10) {
				                               curLoc = 8;	
                                               updateDisplay(Loc8_large_hallway);
							                 } else {
					                             navigationError();
											}
										}
									}
					             }		
					        }
					  }
					buttonVisibility();
			     } 

		    function btn_go_South() {
			    if (curLoc === 1) {
			        curLoc = 0;	
                    updateDisplay(Loc0_mansion_hall);
			     } else {
			          if (curLoc === 0) {
				          curLoc = 3;
                          updateDisplay(Loc3_piano_room);				  
				     } else {
					     if (curLoc === 6) {
				             curLoc = 5;	
                             updateDisplay(Loc5_dining);
						 } else {
							  if (curLoc === 5) {
				                  curLoc = 4;	
                                  updateDisplay(Loc4_kitchen);
							    } else {
					                if (curLoc === 7) {
				                        curLoc = 8;	
                                        updateDisplay(Loc8_large_hallway);
						              } else {
							               if (curLoc === 8) {
				                               curLoc = 10;	
                                               updateDisplay(Loc10_library);
							                  } else {
					                             navigationError();
											}
										}
									}
					             }		
					        }
					    }	
                     buttonVisibility();						
		           }
		    
		    function btn_go_West() {
		      if (curLoc === 4) {
                  curLoc = 0;  
                  updateDisplay(Loc0_mansion_hall);		  
			      } else {
			           if (curLoc === 0) {
				           curLoc = 2;	
                           updateDisplay(Loc2_living_room);					   
				        } else {
						    if (curLoc === 7) {
				                curLoc = 6;	
                                updateDisplay(Loc6_small_corridor);
						    } else {
							    if (curLoc === 6) {
				                    curLoc = 1;	
                                    updateDisplay(Loc1_dark_room);
							     } else {
							          if (curLoc === 8) {
				                          curLoc = 5;	
                                          updateDisplay(Loc5_dining);
							           } else {
					                        if (curLoc === 10) {
				                                curLoc = 4;	
                                                updateDisplay(Loc4_kitchen);
						                     } else {
							                      if (curLoc === 9) {
				                                      curLoc = 8;	
                                                      updateDisplay(Loc8_large_hallway);
							                       } else {
					                                     navigationError();
													}
												}
										    }
									  }
								 }
						   }
					            		
				    }
                  buttonVisibility();					
		      }			 
			         
		    function btn_go_East(){
		     if (curLoc === 2) {
			     curLoc = 0;
                 updateDisplay(Loc0_mansion_hall);				 
			     } else {
			          if (curLoc === 0) {
			              curLoc = 4;
                          updateDisplay(Loc4_kitchen);		          
			            } else {
						      if (curLoc === 1) {
				                  curLoc = 6;	
                                  updateDisplay(Loc6_small_corridor);
							  } else {
							       if (curLoc === 6) {
				                       curLoc = 7;	
                                       updateDisplay(Loc7_bedroom);
									} else {
							            if (curLoc === 5) {
				                            curLoc = 8;	
                                            updateDisplay(Loc8_large_hallway);
									    } else {
							                if (curLoc === 4) {
				                                curLoc = 10;	
                                                updateDisplay(Loc10_library);
									         } else {
							                     if (curLoc === 8) {
				                                     curLoc = 9;	
                                                     updateDisplay(Loc9_stairs);
									              } else {
					                                  navigationError();
												}
											}
										}
								   }
					          }					  
					     }
		            }
                  buttonVisibility();					
		        }

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
		  
		    function updateDisplay(msg) {
					 var userCommand = document.getElementById("mainText");
					 userCommand.value = msg + "\n\n" + userCommand.value;
			         checkScore();
		             dspScore();
			}
		  		 		  		  		  
		    function navigationError() {		          
			  presentMessage("You cannot go that way.");		     		 		        
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
		   
		  //utility functions
		   function presentMessage(message) {
			   var target = document.getElementById("mainText");
               target.value = message + "\n\n" + target.value;
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
function buttonVisibility() {
		     switch(curLoc) {
			    case 0: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
			            document.getElementById("westBtn").disabled = false;
			            document.getElementById("eastBtn").disabled = false;
				        document.getElementById("takeButton").disabled = true;
                        break;						
				case 1: document.getElementById("northBtn").disabled = true;
				        document.getElementById("westBtn").disabled = true;
                        document.getElementById("takeButton").disabled = true;						
						break;
				case 2: document.getElementById("northBtn").disabled = true;
			            document.getElementById("southBtn").disabled = true;
			            document.getElementById("westBtn").disabled = true;
						document.getElementById("eastBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 3: document.getElementById("southBtn").disabled = true;
			            document.getElementById("westBtn").disabled = true;
			            document.getElementById("eastBtn").disabled = true;
						document.getElementById("northBtn").disabled = false;
						takeButtonVisibility();
						break;
				case 4: document.getElementById("southBtn").disabled = true;
				        document.getElementById("eastBtn").disabled = false;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("northBtn").disabled = false;
						takeButtonVisibility();
						break;
				case 5: document.getElementById("westBtn").disabled = true;
			            document.getElementById("eastBtn").disabled = false;
						document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 6: document.getElementById("northBtn").disabled = true;
				        document.getElementById("southBtn").disabled = false;
			            document.getElementById("westBtn").disabled = false;
			            document.getElementById("eastBtn").disabled = false;
                        takeButtonVisibility();						
				        break;
				case 7: document.getElementById("northBtn").disabled = true;
			            document.getElementById("southBtn").disabled = false;
						document.getElementById("eastBtn").disabled = true;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 8: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
						document.getElementById("eastBtn").disabled = false;
						document.getElementById("westBtn").disabled = false;
						takeButtonVisibility();
						break;
				case 9: document.getElementById("northBtn").disabled = true;
			            document.getElementById("southBtn").disabled = true;
						document.getElementById("eastBtn").disabled = true;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
			   case 10: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = true;
						document.getElementById("eastBtn").disabled = true;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
			   default: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
			            document.getElementById("westBtn").disabled = false;
			            document.getElementById("eastBtn").disabled = false; 
						document.getElementById("takeButton").disabled = true;
		     }
		   }		
		  // functions for keeping and showing score!
		   function checkScore() {
		     if (curLoc === 0) {
		         if (! hasVisitedRoom0) {	        
			         score = score + 5;
				     hasVisitedRoom0 = true;
				 }
		     }		     
		    if (curLoc === 1) {			
			      if (! hasVisitedRoom1) {			  
			          score = score + 5;
				      hasVisitedRoom1 = true;
				  }
			 }				 							 		
			if (curLoc === 2) {
			     if (! hasVisitedRoom2) {
			         score = score + 5;
				     hasVisitedRoom2 = true;
				  }
			 }				   			   
			if (curLoc === 3) {
				  if (! hasVisitedRoom3) {
			          score = score + 5;
				      hasVisitedRoom3 = true;
			       }
			 }				 
			if (curLoc === 4) {
			    if (! hasVisitedRoom4) {
			        score = score + 5;
				    hasVisitedRoom4 = true;				 
			     }
			 }				 
			if (curLoc === 5) {
			    if (! hasVisitedRoom5) {
			        score = score + 5;
				    hasVisitedRoom5 = true;				 
			     }
			 }				 
			if (curLoc === 6) {
			    if (! hasVisitedRoom6) {
			        score = score + 5;
				    hasVisitedRoom6 = true;				 
			     }
			 }				 
			if (curLoc === 7) {
			    if (! hasVisitedRoom7) {
			        score = score + 5;
				    hasVisitedRoom7 = true;				 
			     }				 
			 }			 
			 if (curLoc === 8) {
			    if (! hasVisitedRoom8) {
			        score = score + 5;
				    hasVisitedRoom8 = true;				 
			     }
			 }			 
			 if (curLoc === 9) {
			    if (! hasVisitedRoom9) {
			        score = score + 5;
				    hasVisitedRoom9 = true;				 
			     }
			 }			 
			 if (curLoc === 10) {
			    if (! hasVisitedRoom10) {
			        score = score + 5;
				    hasVisitedRoom10 = true;				 
			     }
			 }	 
			 if (curLoc === 3 && inventory.indexOf("map") >= 0) {
			     score = score + 5;
			 }			 
			 if (curLoc === 4 && inventory.indexOf("flashlight") >= 0) {
			     score = score + 5;
				}			
			if (curLoc === 6 && inventory.indexOf("Music") >= 0) {
			     score = score + 5;
				}
			 
		 }     			
		  function dspScore() {			         
			     document.getElementById("scoreText").value = "Score:" + score;
		 }

