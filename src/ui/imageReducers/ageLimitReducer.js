export const ageLimitReducer = (action) => {
    switch (action){
        case "age0":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/RARS_0%2B_%28old%29.svg/149px-RARS_0%2B_%28old%29.svg.png"
        case "age6":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RARS_6%2B_%28old%29.svg/149px-RARS_6%2B_%28old%29.svg.png"
        case "age12":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RARS_12%2B_%28old%29.svg/149px-RARS_12%2B_%28old%29.svg.png"
        case "age16":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/RARS_16%2B_%28old%29.svg/149px-RARS_16%2B_%28old%29.svg.png"
        case "age18":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/RARS_18%2B_%28old%29.svg/149px-RARS_18%2B_%28old%29.svg.png"
        default:
            return "https://cdn-icons-png.flaticon.com/128/9379/9379974.png"
    }
}