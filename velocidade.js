function clicar() {
    let vel = window.document.querySelector("input#txtlevel")
    let res = window.document.querySelector("p#res")
    let res2 =window.document.querySelector("p#res2")
    let velocidade = Number(vel.value)
    let max = 60

    if (velocidade > max) {
        res.innerHTML = `Voce foi multado por excesso de velocidade`
        res2.innerHTML = `Sua velocidade foi <strong>${velocidade}</strong> e a permitida é ${max}</strong>`
    }

    else {
        res.innerHTML = `Parabéns, o senhor esta dentro da velocidade permitida`
        res2.innerHTML = `O senhor estava a <strong>${velocidade}km/h numa avenida de <strong>${max}km/h</strong>. Continue assim`
    }
}