window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}

let tg = window.Telegram.WebApp;
        let buy = document.getElementById("buy")
        let skip = document.getElementById("skip")
        let skip_chat = document.getElementById("skip_chat")
        let home = document.getElementById("home")
        let order = document.getElementById("order")
        let page_1 = document.getElementById("page_1")
        let page_2 = document.getElementById("page_2")
        let page_3 = document.getElementById("page_3")
        let page_4 = document.getElementById("page_4")
        let page_5 = document.getElementById("page_5")
        tg.expand();

        buy.addEventListener("click", () =>{
            document.getElementById("main").style.display = "none"
            document.getElementById("page_list").style.display = "block"
            
        })

        skip.addEventListener("click", () =>{
            document.getElementById("main").style.display = "none"
            document.getElementById("form").style.display = "block"
            
        })

        page_1.addEventListener("click", () =>{
            document.getElementById("main").style.display = "none"
            document.getElementById("page_list").style.display = "none"
            document.getElementById("page_lesson").style.display = "block"
        })
        page_2.addEventListener("click", () =>{
            document.getElementById("main").style.display = "none"
            document.getElementById("page_list").style.display = "none"
            document.getElementById("page_lesson").style.display = "none"
            document.getElementById("page_commands").style.display = "block"
        })

        page_3.addEventListener("click", () =>{
            document.getElementById("main").style.display = "none"
            document.getElementById("page_list").style.display = "none"
            document.getElementById("page_lesson").style.display = "none"
            document.getElementById("page_commands").style.display = "none"
            document.getElementById("page_chat").style.display = "block"
            
        })

        skip_chat.addEventListener("click", () =>{
            document.getElementById("main").style.display = "none"
            document.getElementById("page_list").style.display = "none"
            document.getElementById("page_lesson").style.display = "none"
            document.getElementById("page_commands").style.display = "none"
            document.getElementById("page_chat").style.display = "none"
            document.getElementById("form").style.display = "block"
            
        })


        home.addEventListener("click", () =>{
            document.getElementById("main").style.display = "block"
            document.getElementById("page_list").style.display = "none"
            document.getElementById("page_lesson").style.display = "none"
            document.getElementById("page_commands").style.display = "none"
            document.getElementById("page_chat").style.display = "none"
            document.getElementById("form").style.display = "none"
        })


        order.addEventListener("click", () =>{
            let list = document.getElementById("list").value;
            let lesson = document.getElementById("lesson").value;
            
            let data = {
                list: list,
                lesson: lesson,
                
            }
            tg.sendData(JSON.stringify(data));

            tg.close();
        })