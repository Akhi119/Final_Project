
/*getting id's of bar class and item class*/
var menu = document.getElementById("bar");
var item = document.getElementById("item");
/*here the condition of the item should be right with the -300px
in order not to show the items in navbar when the screen sixe if reduced*/
item.style.right = '-300px';
menu.onclick = function () {
	/* body... */
	if(item.style.right == '-300px'){
		item.style.right = '0';
	}
	else{
		item.style.right = '-300px';
	}
}
