 $(function() {
	 
	 var header = $("#header"),
		 introH = $("intro").innerHeight(),
		 scrolloffset = $(window).scrollTop;
		 
		 
	 checkScroll(scrolloffset);
	 
	 $(window).on("scroll", function() {
		scrolloffset = $(this).screenTop();
		
		checkScroll(scrolloffset);
	 });
	 
	 function checkScroll(scrolloffset) {
		 if( scrolloffset >= introH ) {
			header.addClass("fixed");
		 } else {
			 header.removeClass("fixed");
		 }
	 }
	 
	 
	 $("[data-scroll]").on("click", function(event) {
		 event.preventDefault();
		 
		 var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
			
			$("#nav a").removeClass("active");
			$this.addClass("active");
			
			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);
		});
	 
	 
 }