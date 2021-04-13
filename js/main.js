/*===== Nav Hover =====*/
var nav_item = document.querySelectorAll('.nav-link');
var mega_menu = document.getElementsByClassName('mega-menu');
var mega_menu_area = document.querySelector('.hover-menu-area');
for (i = 0; i < nav_item.length; i++){
	nav_item[i].addEventListener('mouseover', function(){
		mega_menu[0].style.display = 'block';
	});
}
mega_menu_area.addEventListener('mouseover', function(){
	mega_menu[0].style.display = 'block';
});
mega_menu_area.addEventListener('mouseout', function(){
	mega_menu[0].style.display = 'none';
});

/*===== Nav Mega Hover =====*/
var cart_item = document.querySelectorAll('.category a');
var category_img = document.getElementsByClassName('category-img');
for (i = 0; i < cart_item.length; i++){
	cart_item[i].addEventListener('mouseover', function(){;
		category_img[0].style.display = 'block';
	});
	cart_item[i].addEventListener('mouseout', function(){
		category_img[0].style.display = 'none';
	});
}

/*===== Slider Section Slider =====*/
const slider=document.querySelector(".slider").children;
let index=0;

function nextSlide(){
	if(index==slider.length-1){
		index=0;
	}
	else{
		index++;
	}
	changeSlide();
}

function changeSlide(){
	for (let i = 0; i <slider.length; i++) {
		slider[i].classList.remove("active");
	}
	slider[index].classList.add("active");
}

function autoPlay(){
	nextSlide();
}
let timer = setInterval(autoPlay,5000);

/*===== Product Section Slider =====*/
const product=document.querySelector(".products").children;
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
var next_div = document.getElementsByClassName('next');
var prev_div = document.getElementsByClassName('prev');
let p_index=0;

if(p_index==0){
	prev_div[0].style.display = 'none';
}
if(p_index==product.length-1){
	next_div[0].style.display = 'none';
}
next.addEventListener("click",function(){
	nextProduct();
})
prev.addEventListener("click",function(){
	prevProduct();
})

function nextProduct(){
	if(p_index < product.length-1){
		product[p_index].classList.add("deactive");
		p_index++;
		product[p_index].classList.add("first-product");
		prev_div[0].style.display = 'block';
		if (p_index == product.length-1) {
			next_div[0].style.display = 'none';
		}
	}

}
function prevProduct(){
	if(p_index > 0){
		product[p_index].classList.remove("first-product");
		p_index--;
		product[p_index].classList.remove("deactive");
		next_div[0].style.display = 'block';
		if (p_index == 0) {
			prev_div[0].style.display = 'none';
		}
	}
}

const s_product=document.querySelector(".s-products").children;
const s_next=document.querySelector(".s-next");
const s_prev=document.querySelector(".s-prev");
var s_next_div = document.getElementsByClassName('s-next');
var s_prev_div = document.getElementsByClassName('s-prev');
let s_p_index=0;

if(s_p_index==0){
	s_prev_div[0].style.display = 'none';
}
if(s_p_index==s_product.length-1){
	s_next_div[0].style.display = 'none';
}
s_next.addEventListener("click",function(){
	s_nextProduct();
})
s_prev.addEventListener("click",function(){
	s_prevProduct();
})

function s_nextProduct(){
	if(s_p_index < s_product.length-1){
		s_product[s_p_index].classList.add("deactive");
		s_p_index++;
		s_product[s_p_index].classList.add("first-product");
		s_prev_div[0].style.display = 'block';
		if (p_index == s_product.length-1) {
			s_next_div[0].style.display = 'none';
		}
	}

}
function s_prevProduct(){
	if(s_p_index > 0){
		s_product[s_p_index].classList.remove("first-product");
		s_p_index--;
		s_product[s_p_index].classList.remove("deactive");
		s_next_div[0].style.display = 'block';
		if (s_p_index == 0) {
			s_prev_div[0].style.display = 'none';
		}
	}
}

/*===== Tstimonial Section Slider =====*/
const testimonial=document.querySelector(".testimonial-area").children;
const t_next=document.querySelector(".testimonal-next");
const t_prev=document.querySelector(".testimonal-prev");
var t_next_div = document.getElementsByClassName('testimonal-next');
var t_prev_div = document.getElementsByClassName('testimonal-prev');
let t_index=0;

if(t_index==0){
	t_prev_div[0].style.display = 'none';
}
if(t_index==testimonial.length-1){
	t_next_div[0].style.display = 'none';
}
t_next.addEventListener("click",function(){
	nextTestimonial();
})
t_prev.addEventListener("click",function(){
	prevTestimonial();
})

function nextTestimonial(){
	if(t_index < testimonial.length-1){
		testimonial[t_index].classList.add("deactive");
		t_index++;
		r_index=t_index+1;
		if(t_index < testimonial.length-1){
			testimonial[r_index].classList.add("testimonial-right-content");
		}
		testimonial[t_index].classList.remove("testimonial-right-content");
		t_prev_div[0].style.display = 'block';
		if (t_index == testimonial.length-1) {
			t_next_div[0].style.display = 'none';
		}
	}

}
function prevTestimonial(){
	if(t_index > 0){
		t_index--;
		testimonial[t_index].classList.remove("deactive");
		r_index=t_index+1;
		testimonial[r_index].classList.add("testimonial-right-content");
		r_index++;
		testimonial[r_index].classList.remove("testimonial-right-content");
		t_next_div[0].style.display = 'block';
		if (t_index == 0) {
			t_prev_div[0].style.display = 'none';
		}
	}
}