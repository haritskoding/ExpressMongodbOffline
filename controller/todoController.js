const Todos = require('../model/todoModels');

exports.test = (req, res) => {
    res.send("Ini udah bener komunikasi antara model dan route")
}

exports.create = (req, res) => {
    let todos = new Todos({
        name: req.body.name,
        done: false
    });
    todos.save((err) => {
        if (err) {
            return next(err)
        }
        res.send("Todos sukses dibikin");
    })
}


exports.todoShow = (req, res) => {
    Todos.find({}, (err, todos) => {
        if (err) {
            return next(err);
        }
        res.send(todos)
    })
}

exports.todoDetails = (req, res) => {
    Todos.findById(req.params.id, (err, todos) => {
        if (err) {
            return next(err);
        }

        res.send(todos);
    })
}

exports.todoUpdate = (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, todos) => {
        if (err) {
            return next(err)
        }
        res.send("Update berhasil")
    })
}

exports.todoDelete = (req, res) => {
    Todos.findByIdAndRemove(req.params.id, { $set: req.body }, (err, todos) => {
        if (err) {
            return next(err)
        }
        res.send("Update berhasil")
    })
}