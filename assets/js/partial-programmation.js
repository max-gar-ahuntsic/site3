

function partial_programmation(onVisible){
    
    /////////  TYPEWRITER EFFECT
    let disconnectAfterExecuted = true ;
    onVisible(document.querySelector("#programmation-scriptWrite"), () => typeWrite(), disconnectAfterExecuted)

    function typeWrite(){
        var i = 0;
        var txt = "HTML, CSS, Javascript, Bootstrap, Vue, React // Python, PHP,  C#, Node.js, Java, // SQL, MongoDb // GIT, Docker // VmWare, Hyper-V, VirtualBox, Proxmox..."
        var speed = 30;

        typeWriter()
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("programmation-scriptWrite").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }




}

