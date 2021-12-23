import PodcastService from './PodcastService.js';

class PodcastController {
  async create(req, res) {
    try {
      const podcast = await PodcastService.create(req.body, req.files.cover);

      res.json(podcast);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const podcasts = await PodcastService.getAll();
      return res.json(podcasts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const podcast = await PodcastService.getOne(req.params.id);
      return res.json(podcast);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedPodcast = await PodcastService.update(req.body);

      return res.json(updatedPodcast);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const podcast = await PodcastService.delete(req.params.id);
      return res.json(podcast);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PodcastController();
