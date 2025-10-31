function checkPassword() {
    const correctPassword = "160804"; // الباسوورد اللي انت تحدده
    const input = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");



    
    if (input === correctPassword) {
        // message.textContent = "✅ تم الدخول بنجاح!";
        // message.style.color = "green";
        // هنا ممكن تعمل تحويل لصفحة تانية مثلاً:
        window.location.href = "home.html";
      }
    //    else {
    //     message.textContent = "❌ كلمة السر غير صحيحة!";
    //     message.style.color = "red";
    //   }
}




const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    let index = 0;

    function showSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index++;
      if (index >= totalSlides) index = 0;
      showSlide();
    }

    function prevSlide() {
      index--;
      if (index < 0) index = totalSlides - 1;
      showSlide();
    }



    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";
  
      // مكان عشوائي
      heart.style.left = Math.random() * 100 + "vw";
      // حجم عشوائي صغير
      heart.style.fontSize = 10 + Math.random() * 10 + "px";
      // مدة الطلوع
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  
      document.body.appendChild(heart);
  
      // نمسح بعد 5 ثواني
      setTimeout(() => heart.remove(), 5000);
    }
  
    // إنشاء القلوب كل نص ثانية
    setInterval(createHeart, 400);



    