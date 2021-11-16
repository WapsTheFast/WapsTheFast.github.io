//-------------кнопки--------------//
let back1 = document.querySelector("#back1")
let back2 = document.querySelector("#back2")
let more = document.querySelector("#more")
let add = document.querySelector("#add")
let save = document.querySelector("#save")
let obj = {}
if (back1) {
    back1.addEventListener('click', function () {
        document.location.href = "index.html"
    })
}
if (more) {
    more.addEventListener('click', function () {
        document.location.href = "dz4-3.html"
    })
}
document.querySelector("#add1").addEventListener('Click',()=>{
	document.location.href = "dz4-2.html"
})
let all = document.querySelectorAll('input')
let select = document.querySelector('#sel')
let fernelem = document.querySelectorAll('#fern')
let sprucelem = document.querySelectorAll('#spruc')
select.addEventListener('change', function () {
    stan()
    if (this.value == 'fern') {
        for (let i of fernelem) {
            i.style.display = 'flex'
        }
        for (let i of sprucelem) {
            i.style.display = ''
        }
    }
    if (this.value == 'spruce') {
        for (let i of sprucelem) {
            i.style.display = 'flex'
        }
        for (let i of fernelem) {
            i.style.display = ''
        }
    }
    if (this.value == 'none') {
        for (let i of fernelem) {
            i.style.display = ''
        }
        for (let i of sprucelem) {
            i.style.display = ''
        }
    }
})

function stan() {
    document.getElementById('fern').style.display = ''
}

function addd() {
    switch (select.value) {
        case ('fern'):
            let fern = new Paporotnik(all[0].value, all[1].value, all[2].value, all[3].value, all[4].value, all[5].value, all[6].value, all[7].value, all[8].value, )
            obj[Object.keys(obj).length] = fern
            table.innerHTML += `<div id='${Object.keys(obj).length-1}'><tr>
                                <td>Папаратнік</td>
                                <td>${fern.name}</td>
                                <td>${fern.age}</td>
                                <td>${fern.vid}</td>
                                <td>${fern.opis}</td>
                                <td>${fern.dang}</td>
                                <td>${fern.perv}</td>
                                <td>${fern.clas}</td>
                                <td>${fern.typ}</td>
                                <td>${fern.listnum}</td>
                                <td><button id='del'><img src='trash.png' width='15' height='15'></button></td>
                                <td><button id='edit' class = ${Object.keys(obj).length-1}><img src=edit.png width='15' height='15'></button></td>
                                <td><button><img src=look.png width='15' height='15'></button></td></tr><div>`
            console.log(fern)
            for (let i of all) {
                i.value = ''
            }
            break;
        case ('spruce'):
            let spruce = new Elka(all[0].value, all[1].value, all[2].value, all[3].value, all[4].value, all[5].value, all[6].value, all[9].value, all[10].value, )
            obj[Object.keys(obj).length] = spruce
            table.innerHTML += `<div id='${Object.keys(obj).length-1}'><tr>
                                <td>Елка</td>
                                <td>${spruce.name}</td>
                                <td>${spruce.age}</td>
                                <td>${spruce.vid}</td>
                                <td>${spruce.opis}</td>
                                <td>${spruce.dang}</td>
                                <td>${spruce.perv}</td>
                                <td>${spruce.clas}</td>
                                <td>${spruce.vysnah}</td>
                                <td>${spruce.vyselk}</td>
                                <td><button id='del'><img src='trash.png' width='15' height='15'></button></td>
                                <td><button id='edit' class = ${Object.keys(obj).length-1}><img src=edit.png width='15' height='15'></button></td>
                                <td><button><img src=look.png width='15' height='15'></button></td></tr><div>`
            console.log(spruce)
            for (let i of all) {
                i.value = ''
            }
            break;
        default:
            let rast23 = new Rastenie(all[0].value, all[1].value, all[2].value, all[3].value, all[4].value, all[5].value, all[6].value)
            obj[Object.keys(obj).length] = rast23
            table.innerHTML += `<div id='brrr'><tr>
                                <td>Расліна</td>
                                <td>${rast23.name}</td>
                                <td>${rast23.age}</td>
                                <td>${rast23.vid}</td>
                                <td>${rast.opis}</td>
                                <td>${rast.dang}</td>
                                <td>${rast.perv}</td>
                                <td>${rast.clas}</td>
                                <td>---</td>
                                <td>---</td>
                                <td><button id='del'><img src='trash.png' width='15' height='15'></button></td>
                                <td><button id='edit' class = ${Object.keys(obj).length-1}><img src=edit.png width='15' height='15'></button></td>
                                <td><button><img src=look.png width='15' height='15'></button></td></tr><div>`
            console.log(rast23)
            for (let i of all) {
                i.value = ''
            }
            break;

    }
    buttns()
}
let table = document.querySelector("#tablet")
add.addEventListener('click', addd())

function buttns() {
    let pun = document.querySelectorAll('#pun')
    let dels = document.querySelectorAll('#del')
    let edits = document.querySelectorAll('#edit')
    for (i of dels) {
        i.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
        })

    }
    for (i of edits) {
        i.addEventListener('click', function () {
            save.style.display = 'flex'
            save.addEventListener('click', function () {
                addd()
                save.style.display = 'none'
            })
            let id = this.getAttribute('class')
            let temp = obj[id]
            all[0].value = temp.name
            all[1].value = temp.age
            all[2].value = temp.vid
            all[3].value = temp.opis
            all[4].value = temp.dang
            all[5].value = temp.perv
            all[6].value = temp.clas
            if ((temp.__type) == 'Elka') {
                select.value = 'spruce'
                all[9].value = temp.vysnah
                all[10].value = temp.vyselk
            }
            if ((temp.__type) == 'Paporotnik') {
                select.value = 'fern'
                all[7].value = temp.typ
                all[8].value = temp.listnum
            }
            if ((temp.__type) == 'Rastenie') {
                select.value = 'none'
            }
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
        })
    }
}
//--------------class---------------//
class Rastenie {
    __type = 'Rastenie'
    constructor(name, age, vid, opis, dang, perv, clas) {
        this.name = name
        this.opis = opis
        this.vid = vid
        this.age = age
        this.clas = clas
        this.dang = dang
        this.perv = perv
    }
    setName(name) {
        this.name = name
    }
    setOpis(opis) {
        this.opis = opis
    }
    setVid(vid) {
        this.vid = vid
    }
    setAge(age) {
        this.age = age
    }
    setClas(clas) {
        this.clas = clas
    }
    setDang(dang) {
        this.dang = dang
    }
    setPerv(perv) {
        this.perv = perv
    }
    getName() {
        return (this.name)
    }
    getOpis() {
        return (this.opis)
    }
    getVid() {
        return (this.vid)
    }
    getAge() {
        return (this.age)
    }
    getClas() {
        return (this.clas)
    }
    getDang() {
        return (this.dang)
    }
    getPerv() {
        return (this.perv)
    }
}
class Paporotnik extends Rastenie {
    __type = 'Paporotnik'
    constructor(name, age, vid, opis, dang, perv, clas, typ, listnum) {
        super(name, age, vid, opis, dang, perv, clas)
        this.typ = typ
        this.listnum = listnum
    }
    setTyp(typ) {
        this.typ = typ
    }
    setListnum(listnum) {
        this.listnum = listnum
    }
    getTyp() {
        return (this.typ)
    }
    getListnum() {
        return (this.listnum)
    }
}
class Elka extends Rastenie {
    __type = 'Elka'
    constructor(name, age, vid, opis, dang, perv, clas, vysnah, vyselk) {
        super(name, age, vid, opis, dang, perv, clas)
        this.vysnah = vysnah
        this.vyselk = vyselk
    }
    setVysnah(vysnah) {
        this.vysnah = vysnah
    }
    setVyselk(vyselk) {
        this.vyselk = vyselk
    }
    getVysnah() {
        return (this.vysnah)
    }
    getVyselk() {
        return (this.vyselk)
    }
}