import AppError from "../utils/AppError.js";

//create a document in database
export function createOne(Model) {
  return async (req, res, next) => {
    try {
      const doc = await Model.create(req.body);
      res.status(200).json({
        status: "Hawaco Success",
        data: {
          data: doc,
        },
      });
      req.body._id = doc._id;
      next();
    } catch (err) {
      // console.log("Error when call API", err);
      res.status(400).json({
        status: "Hawaco Bad request",
        data: err.message,
      });
    }
  };
}

//get a document in model
export function readOne(Model, popOptions, select) {
  return async (req, res, next) => {
    try {
      const id = req.params.id;
      let query = await Model.findById(id);
      if (popOptions) {
        popOptionsArray.forEach((pop) => {
          query = query.populate(pop);
        });
      }

      if (select) query = query.select(select.join(" "));
      const doc = await query;

      if (!doc) {
        return next(new AppError("Np document found with that ID", 404));
      }
      res.status(200).json({
        status: "Hawaco Success",
        data: {
          data: doc,
        },
      });
    } catch (err) {
      // console.log("Error when call API", err);
      res.status(400).json({
        status: "Hawaco Bad request",
        data: err.message,
      });
    }
  };
}

//update a document

export function updateOne(Model) {
  return async (req, res, next) => {
    try {
      const id = req.body._id;
      if (!id) {
        res.status(400).json({
          status: "Hawaco Bad request",
          data: "Lack of _id field",
        });
      } else {
        const doc = await Model.findByIdAndUpdate(id, req.body, {
          new: true,
          upsert: true,
          runValidator: true,
          setDefaultsOnInsert: true,
          context: "query",
        });
        if (!doc) {
          return next(new AppError("Np document found with that ID", 404));
        }

        //return data
        res.status(200).json({
          status: "Hawaco Success :Update Succesfull",
          data: {
            data: doc,
          },
        });
      }
    } catch (err) {
      // console.log("Error when call API", err);
      res.status(400).json({
        status: "Hawaco Bad request",
        data: err.message,
      });
    }
  };
}

// delete a document

export function deleteOne(Model) {
  return async (req, res, next) => {
    try {
      const id = req.body._id;
      if (!id) {
        res.status(400).json({
          status: "Hawaco Bad request",
          data: "Lack of _id field",
        });
      } else {
        const doc = await Model.findByIdAndDelete(id);
        if (!doc) {
          return next(new AppError("Np document found with that ID", 404));
        }

        //return data
        res.status(200).json({
          status: "Hawaco Success",
          data: {
            data: "Delete Succesfull",
          },
        });
      }
    } catch (err) {
      // console.log("Error when call API", err);
      res.status(400).json({
        status: "Hawaco Bad request",
        data: err.message,
      });
    }
  };
}

export function getAll(Model, populate, select) {
  return async (req, res) => {
    try {
      let query = Model.find().sort({ _id: -1 });

      if (select) query = query.select(select.join(" "));

      const doc = await query;

      res.status(200).json({
        status: "Hawaco succes",
        results: doc.length,
        data: {
          data: doc,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Hawaco Internal Server Error",
        data: err.message,
      });
    }
  };
}
