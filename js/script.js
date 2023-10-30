let container = document.querySelector('.cart')
let table = document.querySelector('.tablet')
reload(arr)
function reload(massiv) {
    container.innerHTML = ""

    for (let item of massiv) {
        let article = document.createElement('article'),
            h3 = document.createElement('h3'),
            p = document.createElement('p'),
            tablet = document.createElement('table'),
            tr = document.createElement('tr'),
            th = document.createElement('th'),
            p_table = document.createElement('p'),
            p_name = document.createElement('p'),
            p_car = document.createElement('p'),
            p_tom = document.createElement('p');





        article.classList.add('grid')
        if (item.id == 1) {
            article.classList.add('cart_grid')
        }
        if (item.id === 2) {
            article.style.background = " linear-gradient(84deg, #5F0A87 2.27%, #A4508B 92.26%)"
        }
        tr.classList.add('tr_reload')
        th.classList.add('th')
        p.classList.add('grid_p')

        h3.innerHTML = item.cart_name
        p.innerHTML = item.cart_amount
        th.innerHTML = item.id
        p_table.innerHTML = item.cart_name
        p_name.innerHTML = item.cart_amount
        p_car.innerHTML = item.cart_Transaction_amount
        p_tom.innerHTML = item.cart_time




        container.append(article)
        article.append(h3, p)
        table.append(tablet)
        tablet.append(tr)
        tr.append(th, p_table, p_car, p_name, p_tom)

    }
}