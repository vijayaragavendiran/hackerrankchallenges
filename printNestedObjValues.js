var employee = {
    name: {
        firstName: "Rohan",
        lastName: "Ray",
    },
    age: 25,
    city: "New York",
    getName: function () {
        return this.name;
    }
}

function nestedObjectValues(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            nestedObjectValues(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

nestedObjectValues(employee);