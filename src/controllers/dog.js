const DogService = require('../services/dog');
const service = new DogService();

class DogController {
  async GetAll(req, res) {
    try {
      const result = await service.GetAll();
      res.status(200).json({
        dogs: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const result = await service.GetById(id);
      res.status(200).json({
        dog: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const dog = req.body;
      const result = await service.Add(dog);
      res.status(201).json({
        dog: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Update(req, res) {
    try {
      const result = await service.Update(req.params.id, req.body);
      res.status(200).json({
        dog: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id;
      await service.Delete(id);
      res.status(200).json({
        message: 'Dog deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = DogController;
