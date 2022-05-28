//каталог курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


//функция фильтрации курсов
function filterCourses(courses, filter) {
    //пустой массив для добавления в него отфильтрованных курсов
    let courses_filtered = []

    for (let i = 0; i < courses.length; i++) {
        //сортируем по порядку элементы выбранного массива, чтобы минимальное значение было первым, а максимальное - вторым
        let prices = courses[i].prices.sort((a, b) => { return a - b });
        //сортируем по порядку элементы фильтра, чтобы минимальное значение было первым, а максимальное - вторым
        let filter_sort = filter.sort((a, b) => { return a - b });

        //максимальная цена выбранного курса
        let max_price = prices[1]
        //минимальная цена выбранного курса
        let min_price = prices[0]

        //максимальная цена по фильтру
        let max_flter = filter_sort[1]
        //минимальная цена по фильтру
        let min_flter = filter_sort[0]

        //если минимальная цена не задана, то она будет равна максимальной цене
        if (min_price === null) {
            min_price = max_price
        }

        //если минимальная цена в фильтре не задана,  то она будет равна максимальной цене в фильтре
        if (min_flter === null) {
            min_flter = max_flter
        }

        //если максимальная и минимальная цена не заданы, то пропускаем данную итерацию
        if (max_price === null && min_price === null) continue;

        console.log('max_price => ', max_price, '  ', 'min_price => ', min_price)

        //1.для случаев, когда макимальная цена равна минималной цене и минимальная цена в фильтре равна максимальной цене в фильтре, а также когда максимальная цена может быть меньше или равна максимальной цене в фильтре
        if (max_flter >= max_price && min_price === max_price && min_flter === max_flter) {
            courses_filtered.push(courses[i].name)
        }
        //далее также минимальная цена должна быть строго меньше цены минимальной цены в фильтре наряду с тем, что максимальная цена должна быть больше и равна максимальной цене в фильтре
        if (min_flter > min_price && max_flter <= max_price) {
            courses_filtered.push(courses[i].name)
        }

        //2. для случаев, когда максимальное и минимальное значение цен в фильтре присутсвтуют и они разные наряду с условием, когда максимальная цена может быть меньше или равна максимальной цене в фильтре
        if (max_flter >= max_price && min_flter <= max_price && min_flter !== max_flter) {
            courses_filtered.push(courses[i].name)
        }
    }

    //возвращаем полученный остортированный массив
    return courses_filtered
}

//массив отфильтрованных курсов по фильтру 1
console.log(filterCourses(courses, requiredRange1))

//массив отфильтрованных курсов по фильтру 2
console.log(filterCourses(courses, requiredRange2))

//массив отфильтрованных курсов по фильтру 3
console.log(filterCourses(courses, requiredRange3))