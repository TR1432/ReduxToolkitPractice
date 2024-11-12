function getrand(params) {
    let length = params.length
    let random_num = Math.random() * length
    random_num = Math.round(random_num)
    return params[random_num]
}

export default getrand