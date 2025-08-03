onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);



  };

    setTimeout(()=>{
      const person = document.getElementById("person");
      person.style.display = "block";
    },5500);
