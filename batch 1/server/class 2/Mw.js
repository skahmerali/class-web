const mW = (req, resp, next) => {
    if (!req.query.role) {
        resp.send("Please provide your role")
    }
    else if (req.query.role=="admin") {
        resp.send("You are admin")
    }
    else if (req.query.role=="user") {
        resp.send("You are user")
    }
    else if (req.query.role=== " ") {
        resp.send("please provide existing role")
    }
    else {
        next();
    }
}
module.exports = mW;