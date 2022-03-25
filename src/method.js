function pertemuanPertama(){
   return materi[0].bab1.map(m => {
       return `
       <div class="materi" id=${m.heading.split(' ')}>
       <h4 class="materi-header" >${m.heading}</h4>
       <p>${m.materi}</p>
       <ul class="materi-lists">
        ${m.list.map(l => `<li class='list-materi'>${l}</li>`).join('')}</ul>
        </div>
       `
   }).join('')
}

function pertemuanKedua(){
    return materi[0].bab2.map(m => {
        return `
        <div class="materi" id = ${m.heading.split(' ')}>
         <h4 class="materi-header" >${m.heading}</h4>
         <p>${m.materi}</p>
         <ul class="materi-lists">
          ${m.list.map(l => `<li class= "list-materi">${l}</li>`).join('')}</ul>
          </div>
        `
    }).join('')
}