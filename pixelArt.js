
	// var box = document.createElement('box')
	// box.style.height = "2.1%"
	// box.style.width = "2.1%"
	// box.style.float = "left"
	// box.style.paddingBottom = "11.1%"
	// box.style.backgroundColor = "black"
	// document.body.appendChild(box)


	for (i = 0 ; i < 2000 ; i++) {
		var box = document.createElement('box')
		box.addEventListener('click', function() {
			this.style.backgroundColor = "red"
		})


		//box.style.height = "2%"
		box.style.width = "2%"
		box.style.float = "left"
		box.style.paddingBottom = "2%"
		box.style.backgroundColor = "white"
		box.style.border = "1px dotted red"
		document.body.appendChild(box)
	}

		var chooser = document.createElement('chooser')

		chooser.addEventListener('click', function() {
		//this.style.color = "bluest"
		})

		//chooser.style.height = "2%"
		chooser.style.width = "2%"
		chooser.style.float = "left"
		chooser.style.paddingBottom = "2%"
		chooser.style.backgroundColor = "white"
		chooser.style.border = "2px dotted blue"
		chooser.style.backgroundColor = "blue"
		document.body.appendChild(chooser)


//box