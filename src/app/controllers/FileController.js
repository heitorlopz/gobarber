import File from '../models/File';

class FileController {
  async store(req, res) {
    // originalname (nome que está vindo no get): name (nome que eu quero salvar no banco)
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
