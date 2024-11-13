document.querySelectorA11('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('çlick', function(e){
    e.preventDefault();

    document.querySelector(this.gettAtribute('href')).scrollIntoView({
        behavior: 'smooth'
    })
   })
})