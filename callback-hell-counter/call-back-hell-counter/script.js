let button = document.getElementById('button')
let h1 = document.getElementById('text')


let count = 10;
h1.innerHTML = `${count}`;

const timer = () => {
    setTimeout(()=>{
        count = count-1
        h1.innerHTML = count
        setTimeout(()=>{
            count = count-1
            h1.innerHTML = count
            setTimeout(()=>{
                count = count-1
                h1.innerHTML = count
                setTimeout(()=>{
                    count = count-1
                    h1.innerHTML = count
                    setTimeout(()=>{
                        count = count-1
                        h1.innerHTML = count
                        setTimeout(()=>{
                            count = count-1
                            h1.innerHTML = count
                            setTimeout(()=>{
                                count = count-1
                                h1.innerHTML = count
                                setTimeout(()=>{
                                    count = count-1
                                    h1.innerHTML = count
                                    setTimeout(()=>{
                                        count = count-1
                                        h1.innerHTML = count
                                        setTimeout(()=>{
                                            count = count-1
                                            h1.innerHTML = "Happy Independence Day"
                                            count = 10;
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    
}

